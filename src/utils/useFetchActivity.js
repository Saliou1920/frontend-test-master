import React from 'react'

const url = 'https://aircall-job.herokuapp.com/activities';
export default function useFetchActivity() {
    const [activity, setActivity] = React.useState([])
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setActivity(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

}