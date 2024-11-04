import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "../views/Home";
import SignsIn from "../views/Signin";
import Dashboard from "../views/Dashboard";
import Rootlayout from "../views/home/Rootlayout";
import Settings from "../views/Settings";
import Signup from "../views/Signup";
import Form from "../views/form/Form";

import { handleVerificationProtected } from "../services/authentication";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} loader={handleVerificationProtected} />
      <Route
        path="dashboard"
        element={<Dashboard />}
        loader={handleVerificationProtected}
      />
      <Route path="signin" element={<SignsIn />} />
      <Route
        path="settings"
        element={<Settings />}
        loader={handleVerificationProtected}
      />
      <Route path="form" element={<Form />} />
      <Route path="signup" element={<Signup />} loader={handleVerificationProtected} />
    </Route>
  )
);

const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;
