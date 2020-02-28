import * as React from "react";

const User = ({ apiKey, id }) => {
    function getUser() {
        const url = `http://loan-api-269422.appspot.com/users/${id}?key=${apiKey}`;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setIncorporationDate(data.incorporationDate);
                setLoanPurpose(data.loanPurpose);
                setIndustry(data.industry);
                setRevenue(data.revenue);
                setRequestedAmount(data.requestedAmount);
            });
    }

    React.useEffect(() => {
        getUser();
    }, []);

    const [incorporationDate, setIncorporationDate] = React.useState();
    const [loanPurpose, setLoanPurpose] = React.useState();
    const [industry, setIndustry] = React.useState();
    const [revenue, setRevenue] = React.useState();
    const [requestedAmount, setRequestedAmount] = React.useState();

    function handleSubmit(event) {
        const url = `http://loan-api-269422.appspot.com/users/${id}?key=${apiKey}`;
        const data = {
            incorporationDate: incorporationDate,
            loanPurpose: loanPurpose,
            industry: industry,
            revenue: revenue,
            requestedAmount: requestedAmount
        };
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/vnd.restful+json"
            },
            body: JSON.stringify(data),
            redirect: 'follow'
        }).then(data => {
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
