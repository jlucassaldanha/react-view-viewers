import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserSection from "./components/UserSection";
import Counter from "./components/Counter";
import IconMod from "./components/IconMod";
import IconUser from "./components/IconUser";
import Header from "./components/Header";

// Transformar o counter e user section em um só

function App() {
  const users = [{
    img: "https://lh3.googleusercontent.com/a/ACg8ocI34zVJyKA4L4Jk2HbQD8dFe0-yDMKFCSzH9YrPV-D6AUom9Ew=s288-c-no",
    name: "nome",
    userURL: 2
  },
  {
    img: "https://lh3.googleusercontent.com/a/ACg8ocI34zVJyKA4L4Jk2HbQD8dFe0-yDMKFCSzH9YrPV-D6AUom9Ew=s288-c-no",
    name: "nome2",
    userURL: 2
  }
  ]
  return (
    <div>
      <Header />
      <Counter count={5} />
      <UserSection icon={<IconMod />} count={5} type={"Moderadores"} users={users} />
      <UserSection icon={<IconUser fillColor="fill-white" />} count={5} type={"Usuários"} users={users} />
    </div>
  );
}

export default App;
