import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import HowWorks from "./pages/HowWorks/HowWorks";

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
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "how-works",
          element: <HowWorks />,
        },
      ],
    },
    {
      path: "/:catchAll", 
      element: <Navigate to="/" replace />,
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
