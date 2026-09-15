const CONTACT_ENDPOINT =
  "https://formsubmit.co/ajax/464254e377754e214be6601234604e28";

export async function submitContact(payload, fetchImpl = fetch) {
  try {
    const response = await fetchImpl(CONTACT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("CONTACT_SUBMIT_FAILED");
    }

    const result = await response.json();
    const isConfirmed = result?.success === true || result?.success === "true";

    if (!isConfirmed) {
      throw new Error("CONTACT_SUBMIT_FAILED");
    }

    return result;
  } catch {
    throw new Error("CONTACT_SUBMIT_FAILED");
  }
}
