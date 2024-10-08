import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Index";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <RouterProvider router={router} />
    </ProvedorTema>
  );
}

export default App;
