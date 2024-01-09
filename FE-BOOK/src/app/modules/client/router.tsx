import { RouteObject } from "react-router-dom";
import HomeComponent from "./home/home.component";
import CheckTicketComponent from "./check-ticket/check-ticket.component";
import BooktickitsComponent from "./book-tickets/book-tickets.component";
import LoginComponent from "./login/login.component";
import RegisterComponent from "./register/register.component";

export const clientRouter: RouteObject[] = [
    {
        path: "/",
        element: <HomeComponent />
    },
    {
        path: "/check-ticket",
        element: <CheckTicketComponent />
    },
    {
        path: "/book-tickets",
        element: <BooktickitsComponent />
    },
    {
        path: "/login",
        element: <LoginComponent />
    },
    {
        path: "/register",
        element: <RegisterComponent />
    }
]