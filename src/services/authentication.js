// import { redirect } from "react-router-dom";

// const isAuthenticated = () => {
//     const token = localStorage.getItem("token");

//     if (token) throw redirect("/");
//     return null;
// }

import { redirect } from "react-router-dom";
export const handleVerificationProtected = () => {
    const token = localStorage.getItem("token");

    if (!token) {
        throw redirect("/signin");

    }
    return null;
}

// export {
//     isAuthenticated,
//     handleVerificationProtected
// }