import { useEffect, useState } from "react";
import {getGuide} from "../services/guidesService"

function useGuide(id) {
  const [guideData, setGuideData] = useState();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
    
        const guideData = await getGuide(id)
        setGuideData(guideData.data);
      } catch (err) {
        console.error(err);
      }
    };
    getUserInfo();
  }, [guideData]);

  return { guideData };
}



export default useGuide