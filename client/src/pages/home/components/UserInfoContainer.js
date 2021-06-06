import userImage from "../../../assets/user.jpg";

const UserInfoContainer = ({user}) => {
  const alt = "it was't possible to load this image";
  return (
    <div className="user-info-container">
      <img src={userImage} alt={alt} className="big-user-pic"/>
      <div className="user-infos">
        <div>
          <div id="user-name">{user.user.name}</div>
          <div className="edit-profile light-effect">Edit Profile</div>
          <i className="fas fa-cog light-effect"></i>
        </div>

        <div>
          <div className="follow-info">posts</div>
          <div className="follow-info">followers</div>
          <div className="follow-info">following</div>
        </div>

        <div>
          <div className="bold">{user.user.name}</div>
        </div>

        <button className="edit-profile light-effect invisible">
          Edit Profile
        </button>
      </div>
    </div>
  )
}

export default UserInfoContainer;