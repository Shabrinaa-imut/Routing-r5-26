import Link from 'next/link';
import { BlogPosts } from '../../data/blog';

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const { category } = resolvedSearchParams;

  const filteredPosts = category
    ? BlogPosts.filter(
        (post) => post.category.toLowerCase() === category.toLowerCase()
      )
    : BlogPosts;

  return (
    <main className="container mx-auto">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 min-h-screen">
        <h1 className="text-3xl font-bold mb-4 text-soft-brown">Blog Posts</h1>

        <div className="mt-2 mb-8 flex justify-center space-x-4">
          <Link
            href="/blog"
            className={`text-soft-brown ${!category ? "font-bold underline" : "opacity-75 hover:opacity-100"}`}
          >
            All
          </Link>
          <Link
            href="/blog?category=website"
            className={`text-soft-brown ${
              category === "website" ? "font-bold underline" : "opacity-75 hover:opacity-100"
            }`}
          >
            Web
          </Link>
          <Link
            href="/blog?category=mobile"
            className={`text-soft-brown ${
              category === "mobile" ? "font-bold underline" : "opacity-75 hover:opacity-100"
            }`}
          >
            Mobile
          </Link>
        </div>

        <div className="grid gap-6">
          {filteredPosts.map((post) => (
            <div key={post.id} className="border border-gray-200 p-4 rounded-lg">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold mb-2 text-soft-brown hover:underline">
                  {post.title}
                </h2>
              </Link>
              <p className="text-white text-sm font-semibold mb-2">{post.date}</p>
              <p>{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}