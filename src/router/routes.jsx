import { createBrowserRouter } from "react-router";
import App from "../App";
// import RootLayout from "../layout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);