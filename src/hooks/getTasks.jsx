import { useEffect, useState } from "react";
import { getAllTasks } from "../services/tasksService";

function useAllTasks() {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    const fetchAllTasks = async () => {
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
