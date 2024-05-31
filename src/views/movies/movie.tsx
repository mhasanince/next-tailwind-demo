import type { Movie } from '@/utils/get-movies';
import Image from 'next/image';
import Link from 'next/link';

export default function Movie(props: Movie) {
  const {
    id,
    original_title,
    overview,
    release_date,
    poster_path,
    vote_average,
  } = props;

  return (
    <Link
      href={`/movies/${id}`}
      className="flex border rounded-lg h-48 overflow-hidden gap-4 hover:scale-[1.01] hover:shadow-lg bg-white transition-all duration-300 cursor-pointer"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        width={500}
        height={750}
        alt={original_title}
        className="w-36 h-auto object-cover shrink-0"
      />

      <div className="py-4 pr-4 flex flex-col gap-1 flex-1">
        <div className="flex items-center justify-between gap-4">
          <h4 className="text-xl line-clamp-4 font-semibold">
            {original_title}
          </h4>
          <p className="shrink-0">{release_date}</p>
        </div>
        <p className="h-[70px] line-clamp-3">{overview}</p>
        <p className="mt-auto">{vote_average.toFixed(1)}</p>
      </div>
    </Link>
  );
}
