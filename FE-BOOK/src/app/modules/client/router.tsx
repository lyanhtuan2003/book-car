import { RouteObject } from "react-router-dom";
import HomeComponent from "./home/home.component";
import DetailComponent from "./detail/detail.component";

export const clientRouter: RouteObject[] = [
    {
        path: "/",
        element: <HomeComponent />
    },
    {
        path: "/detail",
        element: <DetailComponent />
    }
]