function Viewers({users}){
	<ul>
      {users.map((user) => (
        <div className="flex gap-2 ml-8 mt-0 mb-2 mr-8 pl-5 pt-2 pb-0 border-t-1 border-t-[#35353B]">
          <img className="w-[26px] rounded-[50%]" src={user.img} alt="Profile Picture" />
          <span>•</span>
          <a href={user.userURL}><strong className="text-[#BE93FE]">{user.name}</strong></a>
        </div>
      ))}
    </ul>
}