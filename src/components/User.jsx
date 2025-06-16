function User({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <div className="flex gap-2 ml-8 mt-2 mb-2 mr-8 pl-5 pt-2 pb-2 border-t-1 border-t-[#35353B]">
          <img src={user.img} alt="Profile Picture" />
          <span>•</span>
          <a href={user.userURL}>{user.name}</a>
        </div>
      ))}
    </ul>
  );
}

export default User;
