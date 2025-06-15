import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserSection from "./components/UserSection";
import Counter from "./components/Counter";
import IconMod from "./components/IconMod";
import IconUser from "./components/IconUser";

function App() {
  return (
    <div>
      <header className="bg-gray-700 p-3">
        <h2>Espectadores</h2>
      </header>
      <Counter count={5} />
      <UserSection icon={<IconMod />} users={5} type={"Moderadores"} />
      <UserSection icon={<IconUser fillColor="fill-white" />} users={5} type={"Usuários"}/>
    </div>
  );
}

export default App;
