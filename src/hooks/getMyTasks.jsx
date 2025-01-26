import { useEffect, useState } from "react";
import { getAllTasks, getMyTasks } from "../services/tasksService";
import { useAuth } from "../context/auth.context";

function useAllMyTasks(id) {
  const [allMyTasks, setMyAllTasks] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const fetchAllTasks = async () => {
      if (!user) {
        return;
      }

      try {
        const allMyTasksData = await getMyTasks(id);
        setMyAllTasks(allMyTasksData.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAllTasks();
  }, [user, id]);
  return { allMyTasks };
}

export default useAllMyTasks;
