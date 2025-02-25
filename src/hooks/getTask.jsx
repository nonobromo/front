import { useEffect, useState, useCallback } from "react";
import { getTask } from "../services/tasksService";
import { useAuth } from "../context/auth.context";

function useTask(id) {
  const [taskById, setTaskById] = useState({});
  const { user } = useAuth();

  const fetchTask = useCallback(async () => {
    if (!user) return;

    try {
      const allTasksData = await getTask(id);
      setTaskById(allTasksData.data);
    } catch (err) {
      console.error(err);
    }
  }, [id, user]);

  useEffect(() => {
    fetchTask();
  }, [fetchTask]);

  return { taskById, refetch: fetchTask };
}

export default useTask;
