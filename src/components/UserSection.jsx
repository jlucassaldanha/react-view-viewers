import { useEffect, useState } from "react";
import User from "./User";
import api from "../Api";

function UserSection({ icon, type, users, chanel }) {
  const [IDs, setIDs] = useState([])
  const [mods, setMods] = useState([])
  const [usersInfos, setUsersInfos] = useState([])


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

  function onGetIds() {
    onGetMods()

    if (type == "Moderadores") {
      setIDs(mods)
    } else if (type == "Usuários") {
      setIDs(users.filter(item => !mods.include(item)))
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      onGetIds()

      let ids = ""
      for(let i = 1; i < IDs.length; i++) {
        ids += `&id=${IDs[i]}`
      }

      api.get(`/users?id=${IDs[0]}${ids}`).then((r) => { 
        data = []
        for (let i in r.data.data) {
          data[i] = {
            username:r.data.data[i].display_name,
            profileImgURL:r.data.data[i].profile_image_url
          }
        }
        setUsersInfos(data)
      }).catch((err) => console.error("Erro: " + err));
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <div className="flex gap-2 mt-8 ml-8 mr-8 pl-1.5 py-1.5  bg-[#1F1F23]">
        {icon}
        <p>{`${usersInfos.length} ${type}`}</p>
      </div>
      <User users={usersInfos} />
    </div>
  );
}

export default UserSection;
