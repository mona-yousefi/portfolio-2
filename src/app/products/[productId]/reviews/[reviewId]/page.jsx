import { notFound } from "next/navigation";

export default async function EachReviewPage({ params }) {
  const myParam = await params;

  if (myParam.reviewId > 50) {
    return notFound();
  }
  return (
    <h2>
      Product {myParam.productId} and review {myParam.reviewId}
    </h2>
  );
}
