import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import { rutasUnidades } from "../data";
import { Portada } from "../pages";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portada />} />
        <Route path="/app/*" element={<Layout />}>
          {
            rutasUnidades.map(({ Component, path }) => (
              <Route key={path} path={path} element={<Component />} />
            ))
          }
          <Route path="*" element={<Navigate to={rutasUnidades[0].path} replace />} />
        </Route>
        <Route path="*" element={<Navigate to={'/'} replace />} />
      </Routes>
    </BrowserRouter>
  )
};
