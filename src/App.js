import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

//layouts
import RootLayout from "./layouts/RootLayout";
import PlanetLayout from "./layouts/PlanetLayout";
// planets' pages
import Overview from "./pages/Overview";
import InternalStructure from "./pages/InternalStructure";
import Geology from "./pages/Geology";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/Planets_Site" element={<RootLayout />}>
      <Route path=":planet" element={<PlanetLayout />}>
        <Route index element={<Overview />}></Route>
        <Route path="overview" element={<Overview />}></Route>
        <Route path="intstr" element={<InternalStructure />}></Route>
        <Route path="geology" element={<Geology />}></Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
