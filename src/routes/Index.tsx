import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Protected } from "./Protected";
import Home from "../views/Home";
import SignsIn from "../views/SignsIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<Protected />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="signin" element={<SignsIn />} />
    </Route>
  )
);

const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;
