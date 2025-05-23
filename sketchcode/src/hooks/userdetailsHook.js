'use client'

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

export function useUserData() {
  const { isSignedIn, user } = useUser();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!isSignedIn || !user) return;

      try {
        const response = await fetch('/api/user/userDetails', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: user.id }),
        });

        const data = await response.json();
        setUserData(data); // <-- don't forget to actually set the data!
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [isSignedIn, user]);

  return userData;
}
