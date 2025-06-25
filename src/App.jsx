import { useEffect, useState } from "react";
import api from "./Api";
import "./App.css";
import UserSection from "./components/UserSection";
import Counter from "./components/Counter";
import IconMod from "./components/IconMod";
import IconUser from "./components/IconUser";
import Header from "./components/Header";


function App() {
  const [token, setToken] = useState("");
  const [chanel, setChanel] = useState(0);
  const [mod, setMod] = useState(0);
  const [chatters, setChatters] = useState([]);

  const chanel_login = "ojoojao";
  const mod_login = chanel_login;

  window.onload = () => {
    setToken(document.location.hash)
  
  }

  api.defaults.headers.common = {
    Authorization: `Bearer ${token.slice(token.indexOf("#access_token=")+14, token.indexOf("&scope"))}`,
    "Client-Id": "hatjqubn1mwj09m17p6tdfmj983tim",
  };
  
  function onGetChanel() {
    api.get(`/users?login=${chanel_login}`).then((r) => {  
        setChanel(r.data.data[0].id)
      }).catch((err) => console.error("Erro: " + err));
  }

  function onGetMod() {
    api.get(`/users?login=${mod_login}`).then((r) => {  
        setMod(r.data.data[0].id)
      }).catch((err) => console.error("Erro: " + err));
  }

  function onGetChatters() {
    api.get(`/chat/chatters?broadcaster_id=${chanel}&moderator_id=${mod}`).then((r) => {  
        setChatters(r.data.data)
      }).catch((err) => console.error("Erro: " + err));
  }

  return (
    <div>
      <div>{onGetChanel()}{onGetMod()}{onGetChatters()}</div>
      <Header />
      <Counter count={chatters.length} />
      <UserSection 
        icon={<IconMod />} 
        type={"Moderadores"} 
        users={chatters} 
      />
      <UserSection
        icon={<IconUser fillColor="fill-white" />}
        type={"Usuários"}
        users={chatters}
      />
      
      <div className="text-amber-100">
        {token.slice(token.indexOf("#access_token=")+14, token.indexOf("&scope"))}
        {chanel}
        {mod}
        {JSON.stringify(chatters)}
      </div> 
    </div>
  );
}

export default App;
