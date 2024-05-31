import { BrowserRouter } from "react-router-dom";
import Router from "./components/router/Router";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
