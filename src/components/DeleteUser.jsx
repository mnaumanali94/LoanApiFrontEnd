import * as React from "react";

const DeleteUser = ({ apiKey, id }) => {
    function handleSubmit(event) {
        const url = `https://loan-api-269422.appspot.com/users/${id}?key=${apiKey}`;
        fetch(url, {
            method: "DELETE",
            mode: "no-cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                ContentType: "application/json",
                Accept: "application/json"
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer" // no-referrer, *client
        }).then(data => {
            console.log(data); // JSON data parsed by `response.json()` call
        });
        event.preventDefault();
    }
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="submit" value="Confirm Delete" />
            </form>
        </div>
    );
};
export default DeleteUser;
