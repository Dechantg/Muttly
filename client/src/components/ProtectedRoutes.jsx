import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isValid, path, element }) => {
  if (!isValid) {
    return <Navigate to="/" replace />;
  }

  return <Route path={path} element={element} />;
}; 

export default ProtectedRoute