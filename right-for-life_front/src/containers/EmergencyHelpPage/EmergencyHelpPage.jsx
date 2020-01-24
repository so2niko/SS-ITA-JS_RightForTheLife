import React, {useState, useEffect} from "react";
import { ArticlesList } from "../../components/ArticlesList";

export const EmergencyHelpPage = () => {
  const dataApi = "https://alex-boklag.github.io/SSA-Demo-AnimalShelter/db/emergency.json";
  const [emergencies, setEmergencies] = useState([]);

  useEffect(() => {
    fetch(dataApi)
      .then(data => data.json())
      .then(list => setEmergencies(list));
  }, []);

  return (
    <div className="bg-lightgray-100 min-h-screen pb-8">
      <ArticlesList articles={emergencies} listTitle="Cрочная помощь"/>
    </div>
  );
};
