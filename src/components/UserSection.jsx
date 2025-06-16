import User from "./User";

function UserSection({ icon, count, type, users }) {
  

  return (
    <div>
      <div className="flex gap-2 mt-8 ml-8 mr-8 pl-1.5 py-1.5  bg-[#1F1F23]">
        {icon}
        <p>{`${count} ${type}`}</p>
      </div>
      <User users={users} />
    </div>
  );
}

export default UserSection;
