import React, { useState, useEffect } from 'react';

const ApiFetch = (initialUrl) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [url, setUrl] = useState(initialUrl);

    useEffect(() => {
        setIsLoading(true);

        fetch(url)
        .then ((res) => res.json())
        .then ((data) => {
            setIsLoading(false);
            setData(data);
        })
        .catch((error) => {
            setIsLoading(false);
            setError(error)
        })
    }, [url])
    return ({ data, error, isLoading, setUrl });
}

export default ApiFetch;