import "./App.css";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Cart from "./components/pages/Cart";
import PublicLayout from "./components/layouts/PublicLayout";

const App = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
