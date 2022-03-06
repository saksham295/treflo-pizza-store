import PublicLayout from "../components/layouts/PublicLayout";
import Dashboard from "../components/Dashboard";

const routes = () => [
  {
    path: "/",
    element: <PublicLayout />,
    children: [{ path: "dashboard", element: <Dashboard /> }],
  },
];

export default routes;
