import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();

  const id = router.query.prodId;

  return (
    <>
      <h1>Product Details Page</h1>
      <p>Product id is {id}</p>
    </>
  );
};

export default ProductDetails;
