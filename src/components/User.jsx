function User({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <div className="flex gap-2 ml-8 mt-0 mb-2 mr-8 pl-5 pt-2 pb-0 border-t-1 border-t-[#1F1F23]">
          <img
            className="w-[26px] rounded-[50%]"
            src={user.profileImgURL}
            alt="Profile Picture"
          />
          <span>•</span>
          <a href={`https://twitch.tv/${user.username}`} target="_blank">
            <strong className="text-[#BE93FE]">{user.username}</strong>
          </a>
        </div>
      ))}
    </ul>
  );
}

export default User;
