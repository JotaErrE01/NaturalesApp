import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import { Portada } from "../pages";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portada />} />
        <Route path="/app" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  )
};
