import { useState } from "react";
import User from "./User";
import api from "../Api";

function UserSection({ icon, type, users, chanel }) {
  const [usersInfo, setUsersInfo] = useState()
  const [mods, setMods] = useState()


  function onGetMods() {
    let ids = ""
    for(i in users) {
      ids += `&user_id=${users[i]}`
    }

    api.get(`/moderation/moderators?broadcaster_id=${chanel}${ids}`)
        .then((r) => { 
          // colocar map aqui para pegar os ids
          let mods = r.data.data.map((mod) => {
            return mod.id;
          })
          setMods(mods)
        }).catch((err) => "Erro: "+err)
  }

  function divideUsers() {

  }

  function onGetUsersInfo() {
   
  }

  return (
    <div>
      <div className="flex gap-2 mt-8 ml-8 mr-8 pl-1.5 py-1.5  bg-[#1F1F23]">
        {icon}
        <p>{`${users.length} ${type}`}</p>
      </div>
      <User users={users} />
    </div>
  );
}

export default UserSection;
