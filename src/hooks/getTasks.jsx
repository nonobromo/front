import { useEffect, useState } from "react";
import { getAllTasks } from "../services/tasksService";
import { useAuth } from "../context/auth.context";

function useAllTasks() {
  const [allTasks, setAllTasks] = useState([]);

  const { user } = useAuth();
  useEffect(() => {
    const fetchAllTasks = async () => {
      if (!user) {
        return;
      }

      try {
        const allTasksData = await getAllTasks();
        setAllTasks(allTasksData.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAllTasks();
  }, []);
  return { allTasks };
}

export default useAllTasks;
