import React from "react";
import {Link} from "react-router-dom"


const ProfileCard = ({ user }) => {
  return (
    <div>
      
      <div className="card" style={{ width: "18rem" }}>
      <div>
        
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png"
            height="75px"
            width="75px"
           alt="profile pic"
          />
        </div>
        <Link to={`/users/${user.id}`}>
        <div>
         <h5>{user.name}</h5>
          <p>{user.email}</p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;