export default async function EachProductPage({ params }) {
  const myParam = await params;
  return <h2>Product {myParam.productId}</h2>;
}
