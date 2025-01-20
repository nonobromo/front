import { useEffect, useState } from "react";
import { useAuth } from "../context/auth.context";
import { getUserData } from "../services/usersService";

function useUser(id) {
  const [userInfo, setUserInfo] = useState();
  const { user } = useAuth();

  useEffect(() => {
    console.log(userInfo)
    const getUserInfo = async () => {
      try {
        if (!user) return;

        const userData = await getUserData(id);
        setUserInfo(userData);
      } catch (err) {
        console.error(err);
      }
    };
    getUserInfo();
  }, [user]);

  return { userInfo };
}

export default useUser;
