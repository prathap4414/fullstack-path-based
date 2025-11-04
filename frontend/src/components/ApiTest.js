import React, { useState } from "react";

export default function ApiTest() {
  const [response, setResponse] = useState("");

  const callAPI = async () => {
    try {
      const res = await fetch("/api/hello");
      const data = await res.json();
      setResponse(data.message);
    } catch (err) {
      setResponse("Error connecting to backend");
    }
  };

  return (
    <div>
      <h2>🔗 API Test Page</h2>
      <button onClick={callAPI}>Call Backend API</button>
      <p>{response}</p>
    </div>
  );
}
