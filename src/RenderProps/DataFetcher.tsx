import { useEffect, useState } from "react";

type DataFetcherProps<T, E> = {
  url: string;
  render: (data: {
    data: T | null;
    loading: boolean;
    error: E | null;
  }) => JSX.Element;
};

// Use generics to define the type of the props and the data fetched
export const DataFetcher = <T, E>({ url, render }: DataFetcherProps<T, E>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<E | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json() as Promise<T>;
      })
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setData(null);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return render({ data, loading, error });
};
