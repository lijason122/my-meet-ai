"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/trackEvent";

export default function Home() {
  useEffect(() => {
    trackEvent({ name: "ai_session_started", data: { timestamp: Date.now() } });
  }, []);

  return (
    <main className="p-6">
      <h1>Tracking Demo</h1>
      <button
        onClick={() =>
          trackEvent({
            name: "button_clicked",
            data: { label: "test button" },
          })
        }
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Send Event
      </button>
    </main>
  );
}
