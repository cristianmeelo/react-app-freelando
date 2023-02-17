import { createBrowserRouter } from "react-router-dom"
import SelecaoCliente from "../paginas/cadastro/SelecaoCliente";
import PaginaInicial from "../paginas/PaginaInicial"

export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path:'cadastro',
                element: <SelecaoCliente />,
                children: [
                    {
                        path: 'cliente',
                        element: <h1>Interesesses</h1>
                    },
                    {
                        path: 'dados-pessoais',
                        element: <h1>Dados pessoais</h1>
                    },
                    {
                        path: 'concluido',
                        element: <h1>Concluído</h1>
                    }
                ]
            }
        ],
    },
]);