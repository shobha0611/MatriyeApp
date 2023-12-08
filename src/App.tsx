import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserTable from "./Pages/User/UserTable";
import UserForm from "./Pages/User/UserForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserTable />,
    errorElement: <div>Error</div>,
  },
  {
    path: "/adduser",
    element: <UserForm />,
    errorElement: <div>Error</div>,
  },
]);

export default function App(){
    return (    <RouterProvider router={router} />
)
}