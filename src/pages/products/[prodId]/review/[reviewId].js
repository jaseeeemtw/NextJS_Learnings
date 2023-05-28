import { useRouter } from "next/router";
//nested dynamic routes

const ProductReview = () => {
  const router = useRouter();

  return (
    <div>
      ProductReview {router.query.prodId} -- {router.query.reviewId}
    </div>
  );
};

export default ProductReview;
