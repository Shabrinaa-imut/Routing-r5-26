import Link from 'next/link';
import { arrayEvents } from '@/data/event'; 
interface PageProps {
  searchParams?: Promise<{ type?: string }>;
}

export default async function EventPage({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const currentType = resolvedSearchParams.type || 'all';

  const filteredEvents = currentType !== 'all'
    ? arrayEvents.filter(
        (event) => event.type.toLowerCase() === currentType.toLowerCase()
      )
    : arrayEvents;

  const filterOptions = [
    { label: 'All', value: 'all', href: '/events' },
    { label: 'Free', value: 'free', href: '/events?type=free' },
    { label: 'Paid', value: 'paid', href: '/events?type=paid' },
  ];

  return (
    <main className="min-h-screen bg-amber-70 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">   
          <h1 className="text-3xl font-bold text-white">Daftar Event</h1>
          <p className="text-white mt-1">Filter event berdasarkan tipe tiket.</p>
        </header>

        <div className="flex gap-2 mb-8">
          {filterOptions.map((filter) => {
            const isActive = currentType === filter.value;
            return (
              <Link
                key={filter.value}
                href={filter.href}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-amber-700 text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {filter.label}
              </Link>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                      {event.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {event.description}
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-3 text-xs text-gray-500 space-y-1">
                  <p>📅 {event.date}</p>
                  <p>📍 {event.location}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full bg-white p-8 text-center rounded-xl border border-gray-200">
              <p className="text-gray-500">Tidak ada event untuk tipe ini.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}