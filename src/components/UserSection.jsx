import { useEffect, useState } from "react";
import User from "./User";
import api from "../Api";

function UserSection({ icon, type, chatters, chanel }) {
  const [IDs, setIDs] = useState([]);
  const [mods, setMods] = useState([]);
  const [usersInfos, setUsersInfos] = useState([]);

  useEffect(() => {
    let ids = "";
    for (let u in chatters) {
      ids += `&user_id=${chatters[u]}`;
    }

    api
      .get(`/moderation/moderators?broadcaster_id=${chanel}${ids}`)
      .then((r) => {
        // colocar map aqui para pegar os ids
        let mods = r.data.data.map((mod) => {
          return mod.user_id;
        });
        setMods(mods);
      })
      .catch((err) => "Erro: " + err);
  }, [chatters]);

  useEffect(() => {
    if (type == "Moderadores") {
      setIDs(mods);
    } else if (type == "Usuários") {
      setIDs(chatters.filter((item) => !mods.includes(item)));
    }
  }, [mods]);

  useEffect(() => {
    if (IDs.length > 0) {
      let ids = "";
      for (let i = 1; i < IDs.length; i++) {
        ids += `&id=${IDs[i]}`;
      }

      api
        .get(`/users?id=${IDs[0]}${ids}`)
        .then((r) => {
          let data = [];
          for (let d in r.data.data) {
            /*if (
              r.data.data[d].display_name != "ojoojao" &&
              r.data.data[d].display_name != "Nightbot" &&
              r.data.data[d].display_name != "StreamElements"
            ) {*/
              data[d] = {
                id: r.data.data[d].id,
                username: r.data.data[d].display_name,
                profileImgURL: r.data.data[d].profile_image_url,
              };
            //}
          }

          setUsersInfos(data.sort(function(a, b) {
            return a.id - b.id;
          }));

          //setUsersInfos(data);
        })
        .catch((err) => console.error("Erro: " + err));
    }
  }, [IDs]);

  return (
    <div>
      <details>
        <summary>
          <div className="flex gap-2 mt-8 ml-8 mr-8 pl-1.5 py-1.5  bg-[#1F1F23]">
            {icon}
            <p>{`${usersInfos.length} ${type}`}</p>
          </div>
          <div>
            <User users={usersInfos} />
          </div>
        </summary>
      </details>
    </div>
  );
}

export default UserSection;
