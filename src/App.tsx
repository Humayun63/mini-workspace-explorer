import { BrowserRouter, Route, Routes } from "react-router";
import routes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
