import getMovies from '@/utils/get-movies';

import Movie from './movie';

export default async function Movies() {
  const data = await getMovies({ page: 3 });

  if ('error' in data) {
    return <div>Something went wrong!</div>;
  }

  return (
    <ul className="grid grid-cols-2 gap-4">
      {data.results.map((movie) => (
        <li key={movie.id}>
          <Movie {...movie} />
        </li>
      ))}
    </ul>
  );
}
