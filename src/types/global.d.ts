declare type PageProps<
  TParams = { [key: string]: string | undefined },
  TSearchParams = { [key: string]: string | string[] | undefined }
> = {
  params: TParams;
  searchParams: TSearchParams;
};
