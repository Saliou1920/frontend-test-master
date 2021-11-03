import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "https://aircall-job.herokuapp.com/activities";
export default function useFetchActivity() {
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    setLoading(true);
    setError(null);

    axios
      .get(url, { signal: signal })
      .then((response) => {
        response.data[0].is_archived = true;
        setActivity(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          setError(error);
          setLoading(false);
        }
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return [activity, setActivity, loading, error];
}
