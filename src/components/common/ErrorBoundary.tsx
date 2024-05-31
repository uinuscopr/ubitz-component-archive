import { useEffect, useState } from "react";

const ErrorBoundary = (props: any) => {
  const { children } = props;
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (event: any) => {
      setHasError(true);
      console.error(event.error);
    };

    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  if (hasError) {
    return <div>에러페이지 입니다.</div>;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
