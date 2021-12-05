import React, { useEffect, useState } from "react";
import UserContext from "../user-context";

const UserContextProvider = ({children}) => {
    const [userDetails, setUserDetails] = useState(null);

    useEffect(()=> {
        const accessToken = localStorage.getItem('mytoken');
        const UserType = localStorage.getItem('UserType');
        const username = localStorage.getItem('Username');

        setUserDetails(accessToken ? {
            accessToken,
            UserType,
            username
        } : null)
    }, []);

    const login = (token, UserType, username) => {
debugger;
        if(token){
            localStorage.setItem('mytoken',token);
            localStorage.setItem('UserType', UserType);
            localStorage.setItem('Username', username);
        }

        setUserDetails(token ? {
            token,
            UserType,
            username
        } : null)
    };

    const logout = () => {
        debugger;
        localStorage.removeItem('mytoken');
        localStorage.removeItem('UserType');
        localStorage.removeItem('Username');
        setUserDetails(null);
    }

    return(
        <UserContext.Provider value={{
            userDetails,
            login,
            logout
        }}> {children} </UserContext.Provider>
    )

}

export default UserContextProvider;