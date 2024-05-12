import { Navigate, Route } from "react-router-dom";

function PrivateRoute() {
    // Check if the user is authenticated
    const isAuthenticated = true;
    return isAuthenticated ? <Route /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;
