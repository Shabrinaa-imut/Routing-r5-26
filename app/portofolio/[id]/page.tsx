import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { arrayPorto } from '@/data/portofolio'; 

type Params = Promise<{
  id: string;
}>;

export default async function ProjectDetail({ params }: { params: Params }) {
  const { id } = await params;
  const targetId = parseInt(id, 10);

  if (isNaN(targetId)) {
    notFound();
  }

  const porto = arrayPorto.find((p) => p.id === targetId);

  if (!porto) {
    notFound(); 
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Link href="/portofolio" className="inline-block mb-6 text-soft-brown hover:underline">
          ← Back to Portfolio
        </Link>
        <p className="font-semibold text-sm text-soft-brown">{porto.category}</p>
        <h1 className="text-2xl font-bold text-white">{porto.name}</h1>
        <p className="mb-4 text-gray-300">{porto.description}</p>
        
        <div className="relative w-full h-80 rounded-lg overflow-hidden">
          <Image
            alt={porto.name}
            src={porto.image}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}