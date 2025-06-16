import User from "./User";

function UserSection({ icon, users, type }) {
  const usersInfo = [{
    img: 1,
    name: "nome",
    userURL: 2
  },
  {
    img: 1,
    name: "nome2",
    userURL: 2
  }
  ]

  return (
    <div>
      <div className="flex gap-2 mt-8 ml-8 mr-8 bg-[#1F1F23] pl-1.5 py-1.5">
        {icon}
        <p>{`${users} ${type}`}</p>
      </div>
      <User users={usersInfo} />
    </div>
  );
}

export default UserSection;
