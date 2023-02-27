import { useState, useEffect } from "react";

const url_additiona_servers =
  "https://star-link-back-end-production.up.railway.app/additional-servers";
//const url_additiona_server= "https://star-link-back-end-production.up.railway.app/additional-servers/:id";
const url_cloud_servers =
  "https://star-link-back-end-production.up.railway.app/cloud-servers";
//const url_cloud_server="https://star-link-back-end-production.up.railway.app/cloud-servers/:id";
const url_dedicated_servers =
  "https://star-link-back-end-production.up.railway.app/dedicated-servers";
//const url_dedicated_server="https://star-link-back-end-production.up.railway.app/dedicated-servers/:id";
const url_domains =
  "https://star-link-back-end-production.up.railway.app/domains";
//const url_domain="https://star-link-back-end-production.up.railway.app/domains/:id";
const url_housings =
  "https://star-link-back-end-production.up.railway.app/housings";
//const url_housing="https://star-link-back-end-production.up.railway.app/housings/:id";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url, { signal });

        if (!res.ok) {
          let err = new Error("Error en la peticion fetch");
          err.status = res.status || "00";
          err.statusText = res.statusText || "Ocurrio un error";
          throw err;
        }
        const response = await res.json();

        if (!signal.aborted) {
          setData(response);
          setError(null);
        }
      } catch (error) {
        if (!signal.aborted) {
          setData(null);
          setError(error);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [url]);

  return { data, error, loading };
};
