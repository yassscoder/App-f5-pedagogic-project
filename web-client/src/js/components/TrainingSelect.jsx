import * as React from "react";

function TrainingsDropDown() {
    const [loading, setLoading] = React.useState(true);
    const [items, setItems] = React.useState([]);
    const [value, setValue] = React.useState("");
    React.useEffect(() => {
        let unmounted = false;
        async function getTrainingsArray() {
            const response = await fetch(
                "http://localhost:8080/trainings"
            );
            const body = await response.json();
            if (!unmounted) {
                setItems(
                    body.map(({ id,promoName }) => ({ label: id, value: promoName }))
                );
                setLoading(false);
            }
        }
        getTrainingsArray();
        return () => {
            unmounted = true;
        };
    }, []);

    return (
        <select
            disabled={loading}
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
        >
            {items.map(({ label, value }) => (
                <option key={label} value={value}>
                    {value}
                </option>
            ))}
        </select>
    );
}

export const TrainingSelect = () => {
    return (
        <div>
           <TrainingsDropDown/>
        </div>
    )
}