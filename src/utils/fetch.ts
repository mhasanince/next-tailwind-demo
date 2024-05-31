import sleep from './sleep';

const BASE_API_URL = process.env.TMDB_API_URL || 'http://localhost:3000/api';
const API_KEY = process.env.TMDB_API_KEY || 'api-key';

interface FetchOptions extends RequestInit {
  endpoint: string;
  queryParams?: Record<string, string>;
}

export default async function enhancedFetch<TData = {}>(
  options: FetchOptions
): Promise<TData | { error: any }> {
  const { endpoint, queryParams = {}, ...fetchOptions } = options;

  const url = new URL(BASE_API_URL + endpoint);
  url.search = new URLSearchParams({
    ...queryParams,
    api_key: API_KEY,
  }).toString();

  const response = await fetch(url.toString(), fetchOptions);

  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }

  await sleep(1000 * Math.random());

  return response.json();
}
