"use client";

import { useEffect, useState } from "react";

export default function StockList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/`); // Replace `/` with your backend API path if needed
        if (!res.ok) throw new Error("Network response was not ok");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setData({ error: error.message });
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Stock Insight API Response:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

