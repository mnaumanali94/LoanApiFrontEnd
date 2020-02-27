import * as React from "react";
import { Link } from "@reach/router";

const Users = ({ apiKey }) => {
    const [users, setUsers] = React.useState([]);

    const userList = users.map((user, index) => (
        <tr key={index}>
            <td>
                <Link to={`/users/${user.userId}`}>{user.userId}</Link>
            </td>
            <td>{user.incorporationDate}</td>
            <td>{user.loanPurpose}</td>
            <td>{user.industry}</td>
            <td>{user.revenue}</td>
            <td>{user.requestedAmount}</td>
        </tr>
    ));

    function getUsers() {
        const url = `http://loan-api-269422.appspot.com/users?key=${apiKey}`;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setUsers(data || []);
            });

        console.log(users);
    }
    React.useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>incorporationDate</th>
                        <th>loanPurpose</th>
                        <th>industry</th>
                        <th>revenue</th>
                        <th>requestedAmount</th>
                    </tr>
                </thead>
                <tbody>{userList}</tbody>
            </table>
        </div>
    );
};

export default Users;
