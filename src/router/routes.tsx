// router/routes.ts
import React from "react";
import Test from "../pages/Test";

type RouteConfig = {
    path: string;
    element: React.ReactNode;
}

const routes: RouteConfig[] = [
    { path: "/", element: <Test /> },
];

export default routes;