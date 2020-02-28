import * as React from "react";
import { Link } from "@reach/router";

const User = ({ apiKey, id }) => {
    const [user, setUser] = React.useState([]);

    function getUser() {
        const url = `http://loan-api-269422.appspot.com/users/${id}?key=${apiKey}`;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setUser(data || []);
            });

        console.log(user);
    }

    React.useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            <Link to={`/users/${id}/edit`}>Edit User</Link>
            <Link to={`/users/${id}/delete`}>Delete User</Link>

            <div>
                <div>{user.userId}</div>
                <div>{user.incorporationDate}</div>
                <div>{user.loanPurpose}</div>
                <div>{user.industry}</div>
                <div>{user.revenue}</div>
                <div>{user.requestedAmount}</div>
                <div>{user.url}</div>
            </div>
        </div>
    );
};
export default User;
