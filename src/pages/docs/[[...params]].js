import { useRouter } from "next/router";

//catch all routes - can be used when some parameters are optional
// [[...params]] makes the page to render for /docs also
const DocumentationPage = () => {
  const router = useRouter();
  const { params = [] } = router.query;

  return <div>Documentation Page</div>;
};

export default DocumentationPage;
