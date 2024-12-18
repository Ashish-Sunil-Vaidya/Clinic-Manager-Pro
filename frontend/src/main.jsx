import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Doctor from "./pages/home/Doctor";
import Schedules from "./components/Schedules";
import ResetPassword from "./components/forms/ResetPassword";
import Dashboard from "./components/Dashboard";
import GlobalProvider from "./context/GlobalContext";
import Receptionist from "./pages/home/Receptionist";
import AddBilling from "./components/forms/AddBilling";
import AddAppointment from "./components/forms/AddAppointment";
import PatientsHistory from "./components/PatientsHistory";
import ProfileForm from "./components/forms/ProfileForm";
import PatientData from "./components/PatientData";
import AddPatientDetails from "./components/forms/AddPatientDetails";
import UpdateDetails from "./components/UpdateDetails";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ]
  },
  {
    path: "reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/edit-profile",
    element: <ProfileForm />,
  },
  {
    path: "/user/doctor",
    element: <Doctor />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "schedules",
        element: <Schedules />,
      },
      {
        path: "patients",
        element: <PatientsHistory />,
      },
      {
        path: "patient/:id",
        element: <PatientData />,
      },
    ],
  },
  {
    path: "/user/receptionist",
    element: <Receptionist />,
    children: [
      {
        path: "AddBilling",
        element: <AddBilling />,
      },
      {
        path: "appointment",
        element: <AddAppointment />,
      },
      {
        path: "add-details",
        element: <AddPatientDetails />,
      },
      {
        path: "all-appointments",
        element: <Schedules />,
      },
      {
        path: "patient/:id",
        element: <PatientData />,
      },
      {
        path: "patients",
        element: <PatientsHistory />,
      },
      {
        path: "patient/update/:id",
        element: <UpdateDetails />,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider>
      <GlobalProvider><RouterProvider router={routes} /></GlobalProvider>
    </ChakraProvider>
  </React.StrictMode>
);
