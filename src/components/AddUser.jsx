import * as React from "react";

const User = ({ apiKey }) => {
    const [incorporationDate, setIncorporationDate] = React.useState();
    const [loanPurpose, setLoanPurpose] = React.useState();
    const [industry, setIndustry] = React.useState();
    const [revenue, setRevenue] = React.useState();
    const [requestedAmount, setRequestedAmount] = React.useState();

    async function addUser(url = "", data = {}) {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/vnd.restful+json"
            },
            redirect: "follow", // manual, *follow, error
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    function handleSubmit(event) {
        const url = `https://loan-api-269422.appspot.com/users?key=${apiKey}`;
        const user = {
            incorporationDate: incorporationDate,
            loanPurpose: loanPurpose,
            industry: industry,
            revenue: revenue,
            requestedAmount: requestedAmount
        };
        addUser(url, user).then(data => {
            console.log(data); // JSON data parsed by `response.json()` call
        });

        event.preventDefault();
    }

    return (
        <div>
            <br /> <br /> <br />
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>incorporationDate</label>
                    <input
                        onChange={e => setIncorporationDate(e.target.value)}
                        value={incorporationDate}
                        type="date"
                    />
                </div>
                <div>
                    <label>loanPurpose</label>
                    <input
                        onChange={e => setLoanPurpose(e.target.value)}
                        value={loanPurpose}
                    />
                </div>
                <div>
                    <label>industry</label>
                    <input
                        onChange={e => setIndustry(e.target.value)}
                        value={industry}
                    />
                </div>
                <div>
                    <label>revenue</label>
                    <input
                        onChange={e => setRevenue(Number(e.target.value))}
                        value={revenue}
                        type="number"
                    />
                </div>
                <div>
                    <label>requestedAmount</label>
                    <input
                        onChange={e => setRequestedAmount(Number(e.target.value))}
                        value={requestedAmount}
                        type="number"
                    />
                </div>
                <input type="submit" value="Save" />
            </form>
        </div>
    );
};
export default User;
