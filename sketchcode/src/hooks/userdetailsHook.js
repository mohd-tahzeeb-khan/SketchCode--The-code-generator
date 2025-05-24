'use client';

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

export function useUserData() {
  const { isSignedIn, user, isLoaded } = useUser();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // Optional loading state
  const [error, setError] = useState(null);     // Optional error state

  useEffect(() => {
    // console.log("useEffect triggered", { isLoaded, isSignedIn, user });
    // Only run if user is loaded and signed in
    if (!isLoaded || !isSignedIn || !user) return;

    const fetchUserData = async () => {
      try {
        const userId = user.id?.replace("user_", "");
        if (!userId) throw new Error("Invalid user ID");

        const response = await fetch('/api/user/userDetails', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId }),
        });
        // console.log("response from server: ", response)
        if (!response.ok) throw new Error("Failed to fetch user data");

        const data = await response.json();
        setUserData(data);
        // console.log("Data of the user is: from userData: ", data)
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError(err.message || "Unexpected error");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [isSignedIn, isLoaded, user]);

  return { userData, loading, error };
}
