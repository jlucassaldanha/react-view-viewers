import { useEffect, useState } from "react";
import axios from "axios";
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
  const [token, setToken] = useState("")

  window.onload = () => setToken(
    document.location.hash
  )

  const api = axios.create({
    baseURL: "https://api.twitch.tv/helix",
  });

  api.defaults.headers.common = {
    Authorization: `Bearer ${token.slice(token.indexOf("#access_token=")+14, token.indexOf("&scope"))}`,
    "Client-Id": "hatjqubn1mwj09m17p6tdfmj983tim",
  };

  return (
    <div>
      <Header />
      {/*<Counter count={users.length + mods.length} />
      <UserSection 
        icon={<IconMod />} 
        type={"Moderadores"} 
        users={mods} 
      />
      <UserSection
        icon={<IconUser fillColor="fill-white" />}
        type={"Usuários"}
        users={users}
      />*/}
      <div className="text-amber-100">
        {token.slice(token.indexOf("#access_token=")+14, token.indexOf("&scope"))}
      </div> 
    </div>
  );
}

export default App;
