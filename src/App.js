import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./Components/Layouts/NavBar";
import Home from "./Pages/Home";
import { FormProvider } from "./FormContext";
import ExcerciseDetails from "./Pages/ExcerciseDetails";
// eslint-disable-next-line
import css from "./Assets/images/App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />}></Route>
      <Route path="excercise/:id" element={<ExcerciseDetails />}></Route>
    </Route>
  )
);

function App() {
  return (
    <FormProvider>
      <RouterProvider router={router} />
    </FormProvider>
  );
}

export default App;
