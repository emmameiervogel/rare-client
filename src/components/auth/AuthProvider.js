import React, { useState } from "react"
export const ProfileContext = React.createContext()

export const ProfileProvider = (props) => {
    const [profile, setProfile] = useState({events:[]})


    const getProfile = () => {
        return fetch("http://localhost:8000/myprofile", {
            method: "GET",
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
            }
        })
            .then(response => response.json())
            .then(setProfile)
    }


    return (
        <ProfileContext.Provider value={{
            profile, getProfile
        }}>
            {props.children}
        </ProfileContext.Provider>
    )
}
