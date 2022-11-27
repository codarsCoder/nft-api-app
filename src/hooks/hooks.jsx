import { onAuthStateChanged } from "firebase/auth";
import { getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, dbLike } from "../auth/firebase";
  
export const useCurrentUser = () => {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      return onAuthStateChanged(auth, (user) => {
        setUser(user);
      });
    }, []);
  
    return [user];
  };
  
  export const useIsLoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
  
    useEffect(() => {
      return onAuthStateChanged(auth, (user) => {
        setIsLoggedIn(!!user);
      });
    }, []);
  
    return isLoggedIn;
  };
  
  