import { auth } from './config/firebase'
import { Navigate } from 'react-router-dom'
//used so that if you arent logged in you can just navigate to /app or something

function PrivateRoute({ children }) {

    const user = auth.currentUser; //user is null if not logged in



    if (!user) {
        return <Navigate to="/" replace />;
    }
    else {
        return children;

    }
}

export default PrivateRoute;