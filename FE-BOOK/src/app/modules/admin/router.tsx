import { RouteObject } from 'react-router-dom'
import DashboardComponent from './dashboard/dashboard.component';
import UserAdminComponent from './user/user-admin.component';

export const adminRouter: RouteObject[] = [
    {
        path: '',
        element: <DashboardComponent />,
        children: []
    },
    {
        path: 'user',
        element: <UserAdminComponent />,
        children: []
    }

]