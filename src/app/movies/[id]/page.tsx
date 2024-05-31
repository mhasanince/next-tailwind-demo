export default function Page(
  props: PageProps<{
    id: string;
  }>
) {
  const { id } = props.params;

  return <div>{id}</div>;
}
