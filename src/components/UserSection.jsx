import { useState } from "react";
import User from "./User";
import api from "../Api";

function UserSection({ icon, type, users }) {
  const [usersInfo, setUsersInfo] = useState()

  function onGetModsInfo() {
    api.get("/moderation/moderators")
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
