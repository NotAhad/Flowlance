import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import Menu from "./Components/Menu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Tasks from "./Pages/Tasks";
import Projects from "./Pages/Projects";
import Invoices from "./Pages/Invoices";
import Client from "./Pages/Client";
import Clients from "./Pages/Clients";

const App = () => {
  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div className="grid grid-cols-12">
          <div className="col-span-1 lg:col-span-2 lg:px-5 border-r-2">
            <div className="ps-5 lg:ps-0">
              <Menu />
            </div>
          </div>
          <div className="col-span-10 md:col-span-11 lg:col-span-9 xl:col-span-10 px-4">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/clients",
          element: <Clients />,
        },
        {
          path: "/invoices",
          element: <Invoices />,
        },
        {
          path: "/CLIENTS/:id",
          element: <Client />,
        },
        {
          path: "/PROJECTS/:id",
          element: <Tasks />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
