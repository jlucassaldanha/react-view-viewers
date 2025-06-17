import { useState } from "react";
import "./App.css";
import UserSection from "./components/UserSection";
import Counter from "./components/Counter";
import IconMod from "./components/IconMod";
import IconUser from "./components/IconUser";
import Header from "./components/Header";

// Transformar o counter e user section em um só

function App() {
  const mods = [
    {
      profileImgURL: "https://static-cdn.jtvnw.net/jtv_user_pictures/c13a4be0-1fa3-4727-a070-efb995966b35-profile_image-70x70.png",
      userName: "ojoojao",
      id: 2,
    },
  ];

  const users = [
    {
      profileImgURL: "https://static-cdn.jtvnw.net/jtv_user_pictures/c13a4be0-1fa3-4727-a070-efb995966b35-profile_image-70x70.png",
      userName: "ojoojao",
      id: 2,
    },
  ];

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
