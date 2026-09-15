import { describe, expect, it, vi } from "vitest";
import { submitContact } from "./contact";

describe("submitContact", () => {
  it("posts the payload to the configured FormSubmit AJAX endpoint", async () => {
    const payload = {
      name: "Luana",
      email: "a@b.com",
      subject: "Hi",
      message: "Hello",
    };
    const result = { success: true };
    const fetchImpl = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => result,
    });

    await expect(submitContact(payload, fetchImpl)).resolves.toEqual(result);
    expect(fetchImpl).toHaveBeenCalledWith(
      "https://formsubmit.co/ajax/464254e377754e214be6601234604e28",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      },
    );
  });

  it.each([
    null,
    {},
    { success: "yes" },
  ])("rejects a malformed HTTP-ok response: %j", async (responseBody) => {
    const fetchImpl = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => responseBody,
    });

    await expect(
      submitContact(
        {
          name: "Luana",
          email: "a@b.com",
          subject: "Hi",
          message: "Hello",
        },
        fetchImpl,
      ),
    ).rejects.toThrow("CONTACT_SUBMIT_FAILED");
  });

  it.each([
    { success: false },
    { success: "false" },
  ])("rejects an explicit FormSubmit failure: %j", async (responseBody) => {
    const fetchImpl = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => responseBody,
    });

    await expect(
      submitContact(
        {
          name: "Luana",
          email: "a@b.com",
          subject: "Hi",
          message: "Hello",
        },
        fetchImpl,
      ),
    ).rejects.toThrow("CONTACT_SUBMIT_FAILED");
  });

  it("accepts FormSubmit's string success response", async () => {
    const result = { success: "true", message: "Email sent successfully" };
    const fetchImpl = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => result,
    });

    await expect(
      submitContact(
        {
          name: "Luana",
          email: "a@b.com",
          subject: "Hi",
          message: "Hello",
        },
        fetchImpl,
      ),
    ).resolves.toEqual(result);
  });

  it("throws a safe error when FormSubmit rejects the request", async () => {
    const fetchImpl = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({}),
    });

    await expect(
      submitContact(
        {
          name: "Luana",
          email: "a@b.com",
          subject: "Hi",
          message: "Hello",
        },
        fetchImpl,
      ),
    ).rejects.toThrow("CONTACT_SUBMIT_FAILED");
  });

  it("hides network failure details behind the safe error", async () => {
    const fetchImpl = vi.fn().mockRejectedValue(new Error("socket disconnected"));

    await expect(
      submitContact(
        {
          name: "Luana",
          email: "a@b.com",
          subject: "Hi",
          message: "Hello",
        },
        fetchImpl,
      ),
    ).rejects.toThrow("CONTACT_SUBMIT_FAILED");
  });
});
