export type TrackEventName =
  | "ai_session_started"
  | "ai_request_completed"
  | "button_clicked";

export interface TrackEventPayload {
  name: TrackEventName;
  data?: Record<string, unknown>;
}

export async function trackEvent(event: TrackEventPayload) {
  console.log("CLIENT: sending event", event);

  try {
    const res = await fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    });

    const json = await res.json();
    console.log("CLIENT: server response", json);

    return json;
  } catch (err) {
    console.error("CLIENT: tracking failed", err);
  }
}
