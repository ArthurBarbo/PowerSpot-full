import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function ProtectedRoute({ children }) {
    const { currentUser } = useContext(CurrentUserContext);


    if (currentUser === null && localStorage.getItem("token")) {
        return null;
    }


    if (!currentUser) {
        return <Navigate to="/" replace />;
    }


    return children;
}