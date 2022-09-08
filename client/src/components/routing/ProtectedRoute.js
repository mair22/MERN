import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Spinner from "react-bootstrap/esm/Spinner";

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const {
//     authState: { authLoading, isAuthenticated },
//   } = useContext(AuthContext);

//   if (authLoading)
//     return (
//       <div className="spinner-container">
//         <Spinner animation="border" variant="info" />
//       </div>
//     );

//   return (
//     <Routes>
//       <Route
//         {...rest}
//         element={
//           isAuthenticated ? (
//             <>
//               <Component {...rest} />
//             </>
//           ) : (
//             <Navigate to={"/login"} />
//           )
//         }
//       />
//     </Routes>
//   );
// };

const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);
  
  if (!isAuthenticated) {
    return (
      <div>
        <Navigate to={redirectPath} replace />
      </div>
    );
  }
  
  if (authLoading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  }
  
  return children;
};

export default ProtectedRoute;
