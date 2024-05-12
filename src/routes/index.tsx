import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Demo from "./Demo";
import Introduction from "./Introduction";
import ClientLayout from "../layouts/ClientLayout";

interface Route {
    index?: boolean;
    path: string;
    element: JSX.Element;
    exact?: boolean;
    restrict?: boolean;
}

// Routes that require authentication
const privateRoutes: Route[] = [
];

// Routes that do not require authentication
const publicRoutes: Route[]  = [
    {
        index: true,
        path: "/",
        element: <Demo />,
    },
    {
        index: true,
        path:"/about",
        element: <Introduction />
    }
];

// Routes that do not have a layout. For example, login, register, etc.
const noLayoutRoutes: Route[]  = [
];

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ClientLayout />}>
                    {publicRoutes.map((route) => (
                        <Route
                            index={route.index}
                            path={route.path}
                            element={route.element} />
                    ))}
                </Route>
                <Route element={<PrivateRoute />}>
                    {privateRoutes.map((route) => (
                        <Route
                            index={route.index}
                            path={route.path}
                            element={route.element} />
                    ))}
                </Route>
                {noLayoutRoutes.map((route) => (
                    <Route
                        index={route.index}
                        path={route.path}
                        element={route.element} />
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default RouterComponent;
