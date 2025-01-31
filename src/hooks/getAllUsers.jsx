import { useEffect, useState } from "react";
import { useAuth } from "../context/auth.context";
import { getAllusers } from "../services/usersService";

function useAllUser() {
  const [allUsersByName, setAllUsersByName] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        if (!user) return;

        const usersData = await getAllusers();
        setAllUsersByName(usersData);
      } catch (err) {
        console.error(err);
      }
    };
    getUserInfo();
  }, [user]);

  return { allUsersByName };
}

export default useAllUser;
