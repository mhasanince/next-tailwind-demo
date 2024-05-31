import { Suspense } from 'react';

import Movies from '@/views/movies';
import MoviesSkeleton from '@/views/movies/skeleton';

export default function Page() {
  return (
    <div className="container my-6">
      <h1 className="text-4xl font-semibold mb-8">Popular Movies</h1>
      <section>
        <Suspense fallback={<MoviesSkeleton />}>
          <Movies />
        </Suspense>
      </section>
    </div>
  );
}
