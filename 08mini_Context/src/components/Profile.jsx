import React, { useContext } from "react";
import UserContext from "../context/Usercontext";

function Profile(){
    const {user} = useContext(UserContext)

    if(!user) return <div> Please LOGIN</div>

    return <div>Welcome {user.username} </div>
}

export default Profile