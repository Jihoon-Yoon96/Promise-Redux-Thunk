// router/routes.ts
import React from "react";
import Test from "../pages/Test";
import Signup from "../pages/Signup";  
import Layout from "../Layouts/SingupForm";  

type RouteConfig = {
    path: string;
    element: React.ReactNode;
}

const routes: RouteConfig[] = [
    { path: "/", element: <Test /> },
    { path: "/signup", element: (
        <Layout>
            <Signup />
        </Layout>
    ) },
];

export default routes;