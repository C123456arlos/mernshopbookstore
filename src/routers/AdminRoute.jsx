// import React from 'react'
// import { Navigate, Outlet } from 'react-router-dom'

// const AdminRoute = ({ children }) => {
//     const token = localStorage.getItem('token')
//     if (!token) {
//         return <Navigate to={'/admin'}></Navigate>
//     }
//     return children ? children : <Outlet></Outlet>
// }

// export default AdminRoute





import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to="/admin" />
    }
    return children ? children : <Outlet />;
}

export default AdminRoute