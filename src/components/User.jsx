function User({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <div>
          <img src={user.img} alt="Profile Picture" />
          <span>•</span>
          <a href={user.userURL}>{user.name}</a>
        </div>
      ))}
    </ul>
  );
}

export default User;
