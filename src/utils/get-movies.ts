import fetch from './fetch';

export type Movie = {
  id: number;
  original_title: string;
  overview: string;
  release_date: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
};

interface GetMovies {
  page?: number;
}

export default async function getMovies(
  { page }: GetMovies = {
    page: 1,
  }
) {
  return await fetch<{
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  }>({
    endpoint: '/movie/popular',
    queryParams: {
      page: String(page),
    },
  });
}
