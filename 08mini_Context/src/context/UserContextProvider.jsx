import React from "react";
import UserContext from "./Usercontext"; //importing the context 

const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
export default UserContextProvider;

// children is a prop that will take all the components wrapped in it in this case these are login and profile
