"use client";

import { useState } from "react";

export default function TestPage() {
  const [result, setResult] = useState("");

  async function sendTest() {
    console.log("CLIENT: sending to /api/test");

    try {
      const res = await fetch("/api/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hello: "world", timestamp: Date.now() }),
      });

      const json = await res.json();
      console.log("CLIENT received:", json);

      setResult(JSON.stringify(json));
    } catch (err) {
      console.error("CLIENT error:", err);
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Test Sender</h1>
      <button
        onClick={sendTest}
        style={{ padding: 20, border: "1px solid black" }}
      >
        Send Test Event
      </button>

      <pre style={{ marginTop: 20 }}>{result}</pre>
    </div>
  );
}
