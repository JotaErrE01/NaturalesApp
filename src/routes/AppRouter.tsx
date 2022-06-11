import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Portada } from "../pages";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portada />} />
      </Routes>
    </BrowserRouter>
  )
};
