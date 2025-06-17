import { useEffect, useState } from "react";
import "./App.css";
import UserSection from "./components/UserSection";
import Counter from "./components/Counter";
import IconMod from "./components/IconMod";
import IconUser from "./components/IconUser";
import Header from "./components/Header";

// Transformar o counter e user section em um só
const _mods = [
    {
      profileImgURL: "https://static-cdn.jtvnw.net/jtv_user_pictures/c13a4be0-1fa3-4727-a070-efb995966b35-profile_image-70x70.png",
      userName: "ojoojao",
      id: 2,
    },
    {
      profileImgURL: "https://static-cdn.jtvnw.net/jtv_user_pictures/c13a4be0-1fa3-4727-a070-efb995966b35-profile_image-70x70.png",
      userName: "ojoojao",
      id: 2,
    },
  ];

  const _users = [
    {
      profileImgURL: "https://static-cdn.jtvnw.net/jtv_user_pictures/c13a4be0-1fa3-4727-a070-efb995966b35-profile_image-70x70.png",
      userName: "ojoojao",
      id: 2,
    },
  ];
function App() {
  const [mods, setMods] = useState([])
  const [users, setUsers] = useState([]) 
  
  useEffect(() => {
    const getViewers = async () => {
      const response = await fetch('API');
      const data = await response.json();

      setMods(data.mods);
      setUsers(data.users);
    };    

    getViewers();
    const interval = setInterval(getViewers, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Header />
      <Counter count={users.length + mods.length} />
      <UserSection 
        icon={<IconMod />} 
        type={"Moderadores"} 
        users={mods} 
      />
      <UserSection
        icon={<IconUser fillColor="fill-white" />}
        type={"Usuários"}
        users={users}
      />
    </div>
  );
}

export default App;
