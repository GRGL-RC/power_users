// npm modules
import { useState, useEffect } from "react";
// project modules
import User from "../User/User";

const List = ({ users, removeUser }) => {
    const [searchString, setSearchString] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(users);
    const [clicks, setClicks] = useState(0);

    // for initial render
    useEffect(() => {
        setFilteredUsers(users);
    },[users]);
    
    useEffect(() => {
        if (searchString) {
            let timeout = setTimeout(() => {
                const newUsers = users.filter((user) => searchByName(user));
                setFilteredUsers(newUsers);
            }, 300);

            // cleaner
            return () => {
                clearTimeout(timeout)
                }
        } else {
            setFilteredUsers(users);
        }
    }, [searchString]);

  // callback for filter
  function searchByName(value) {
    let name = value.name.toUpperCase();
        if (name.includes(searchString.toUpperCase())) {
            return value;
        }
    }

    
    function fireClick(e) {
        if (e.target.localName === "li") {

            let targetId = parseInt(e.target.id); // compare numbers with numbers
            let userIndex = filteredUsers.findIndex(user => user.id === targetId); // find the user

            filteredUsers[userIndex].clicks += 1;

            setFilteredUsers(filteredUsers);
            setClicks(clicks + 1);
        }
    }

    return (
            <ul onClick={(e) => fireClick(e)}>
                <input type="text" onChange={(e) => setSearchString(e.target.value)} placeholder="Search for users...."/>
            {filteredUsers.map((user, index) => (<User user={user} key={index} removeUser={removeUser} totalClicks={clicks}/>))}
            </ul>
    );
}

export default List;

