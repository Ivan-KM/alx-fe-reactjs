import { useState } from "react";

export default function useAuth() {
    // Simulate authentication status
    const [isAuthenticated] = useState(
        localStorage.getItem("isLoggedIn") === "true"
    );
    return { isAuthenticated };
    }
