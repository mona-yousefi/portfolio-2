export default async function BlogSlugs({ params }) {
  const myParam = await params;
  console.log(myParam.slug);
  if (myParam.slug?.length === 1) {
    return <div>this is {myParam.slug[0]}</div>;
  } else if (myParam.slug?.length === 2) {
    return (
      <div>
        this is {myParam.slug[0]} feature and {myParam.slug[1]} subcategory
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-red-200">hello this is blog slug</h2>
    </div>
  );
}
