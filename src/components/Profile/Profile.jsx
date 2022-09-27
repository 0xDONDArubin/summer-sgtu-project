// import { useState } from "react";

import Student from "../Student/Student";
import Teacher from "../Teacher/Teacher";

import users from '../../db/Users.json';
import './Profile.css';

const Profile = () => {
    const user = users[1];

    const userAcces = (user) => {
        switch(user.access) {
            case "teacher": 
                return <Teacher
                            name={user.name}
                            surname={user.surname}
                            groups={user.groups}/>
            case "student":
                return <Student 
                            name={user.name} 
                            surname={user.surname} 
                            group={user.group} 
                            semestr={user.semestr} 
                            subscribe={user.subscribe}/>
            default:
                // return <Admin />
                return null;
        }
    }

    const userView = userAcces(user);
    return (
        <>
            {userView}
        </>
    );
}

export default Profile;