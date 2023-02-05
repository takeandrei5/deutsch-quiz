import ErrorPage from "next/error";

const NotFoundPage = () => {
  return <ErrorPage statusCode={404} />;
};

export default NotFoundPage;
