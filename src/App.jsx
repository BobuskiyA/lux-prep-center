import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import About from "./pages/About/About";

function App() {
  const element = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
    {
      path: "/:catchAll", // Define a catch-all parameter
      element: <Navigate to="/" replace />, // Navigate to the index page
    },
  ]);

  const location = useLocation();

  return (
    <main>
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    </main>
  );
}

export default App;
