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
  const [chanel, setChanel] = useState(localStorage.getItem("chanel") || 0);
  const [mod, setMod] = useState(localStorage.getItem("mod") || 0);
  const [chatters, setChatters] = useState([]);

  const chanel_login = "ojoojao";
  const mod_login = chanel_login;

  window.onload = () => {
    setToken(document.location.hash);
  };

  api.defaults.headers.common = {
    Authorization: `Bearer ${token.slice(
      token.indexOf("#access_token=") + 14,
      token.indexOf("&scope")
    )}`,
    "Client-Id": "hatjqubn1mwj09m17p6tdfmj983tim",
  };

  useEffect(() => {
    api
      .get(`/users?login=${chanel_login}`)
      .then((r) => {
        setChanel(r.data.data[0].id);
        localStorage.setItem("chanel", r.data.data[0].id);
      })
      .catch((err) => console.error("Erro: " + err));
  }, [token]);

  useEffect(() => {
    api
      .get(`/users?login=${mod_login}`)
      .then((r) => {
        setMod(r.data.data[0].id);
        localStorage.setItem("mod", r.data.data[0].id);
      })
      .catch((err) => console.error("Erro: " + err));
  }, [token]);

  useEffect(() => {
    const interval = setInterval(() => {
      api
        .get(`/chat/chatters?broadcaster_id=${chanel}&moderator_id=${mod}`)
        .then((r) => {
          const users_ids = r.data.data.map((user) => {
            return user.user_id;
          });

          setChatters(users_ids);
        })
        .catch((err) => console.error("Erro: " + err));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Header />
      <Counter count={chatters.length} />
      <UserSection
        icon={<IconMod />}
        type={"Moderadores"}
        chatters={chatters}
        chanel={chanel}
      />
      <UserSection
        icon={<IconUser fillColor="fill-white" />}
        type={"Usuários"}
        chatters={chatters}
        chanel={chanel}
      />
    </div>
  );
}

export default App;
