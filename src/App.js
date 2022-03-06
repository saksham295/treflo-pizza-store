import "./App.css";
import {
  useRoutes,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import routes from "./utils/routes";
import Dashboard from "./components/Dashboard";
import PublicLayout from "./components/layouts/PublicLayout";

const App = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <PublicLayout />,
      children: [{ path: "/", element: <Dashboard /> }],
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
