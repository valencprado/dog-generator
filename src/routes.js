import { createBrowserRouter } from "react-router-dom";
import Home from "./components/routes/home";
import Breeds from "./components//routes/breeds";
import About from "./components/routes/about";
import Root from "./components/routes/root";
import Error from "./components/routes/error";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,  
            },
            {
                path: 'breeds',
                element: <Breeds />,
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    }

])