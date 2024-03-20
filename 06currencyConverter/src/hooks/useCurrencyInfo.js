import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json`)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Failed to fetch');
            }
            return res.json();
        })
        .then((res) => {
            if (!res || !res[currency]) {
                throw new Error(`Currency ${currency} not found in response`);
            }
            setData(res[currency]);
            console.log("Data:", res[currency]);
        })
        .catch((error) => {
            setError(error.message);
            console.error('Error fetching data:', error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
