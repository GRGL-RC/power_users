
const User = ({ user, removeUser, totalClicks }) => {
    return (
            <li id={user.id}>
                {user.name}
                <button onClick={() => removeUser(user.id)}>Remove {user.id}</button>
                clicks: {(totalClicks - user.clicks) !== 0 ? totalClicks -user.clicks : ''}
            </li>
    )
};

export default User;