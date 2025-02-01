import { useEffect, useState } from "react";
import { getTask } from "../services/tasksService";
import { useAuth } from "../context/auth.context";

function useTask(id) {
  const [taskById, setTaskById] = useState({});
  const { user } = useAuth();
  useEffect(() => {
    const fetchTask = async () => {
      if (!user) {
        return;
      }

      try {
        const allTasksData = await getTask(id);
        setTaskById(allTasksData.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTask();
  }, []);
  return { taskById };
}

export default useTask;
