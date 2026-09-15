import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { portfolioContent } from "@/content/portfolio";
import { ContactForm } from "./ContactForm";

const content = portfolioContent.pt.contact.form;

function deferred() {
  let resolve;
  const promise = new Promise((resolvePromise) => {
    resolve = resolvePromise;
  });

  return { promise, resolve };
}

async function fillValidForm(user) {
  await user.type(screen.getByLabelText(content.fields.name), "Luana");
  await user.type(screen.getByLabelText(content.fields.email), "luana@example.com");
  await user.type(screen.getByLabelText(content.fields.subject), "Projeto");
  await user.type(screen.getByLabelText(content.fields.message), "Olá, gostaria de conversar.");
}

describe("ContactForm", () => {
  it("uses native required validity while exposing localized inline errors", async () => {
    const user = userEvent.setup();
    const submitContactImpl = vi.fn();
    render(<ContactForm content={content} submitContactImpl={submitContactImpl} />);
    const nameInput = screen.getByLabelText(content.fields.name);
    const form = nameInput.closest("form");
    const submitted = vi.fn();
    form.addEventListener("submit", submitted);

    expect(nameInput.validity.valueMissing).toBe(true);
    await user.click(screen.getByRole("button", { name: content.actions.submit }));

    expect(submitted).not.toHaveBeenCalled();
    expect(submitContactImpl).not.toHaveBeenCalled();
    expect(nameInput).toHaveAttribute("aria-invalid", "true");
    expect(nameInput).toHaveAccessibleDescription(content.validation.required);
  });

  it("shows an accessible validation message for an invalid email", async () => {
    const user = userEvent.setup();
    const submitContactImpl = vi.fn();
    render(<ContactForm content={content} submitContactImpl={submitContactImpl} />);

    await user.type(screen.getByLabelText(content.fields.name), "Luana");
    await user.type(screen.getByLabelText(content.fields.email), "email-invalido");
    await user.type(screen.getByLabelText(content.fields.subject), "Projeto");
    await user.type(screen.getByLabelText(content.fields.message), "Olá!");
    const emailInput = screen.getByLabelText(content.fields.email);
    const submitted = vi.fn();
    emailInput.closest("form").addEventListener("submit", submitted);
    expect(emailInput.validity.typeMismatch).toBe(true);
    await user.click(screen.getByRole("button", { name: content.actions.submit }));

    expect(submitted).not.toHaveBeenCalled();
    expect(screen.getByRole("alert")).toHaveTextContent(content.validation.email);
    expect(emailInput).toHaveAttribute("aria-invalid", "true");
    expect(submitContactImpl).not.toHaveBeenCalled();
  });

  it("disables submission and announces progress while the request is pending", async () => {
    const request = deferred();
    const user = userEvent.setup();
    render(
      <ContactForm
        content={content}
        submitContactImpl={() => request.promise}
      />,
    );
    await fillValidForm(user);

    await user.click(screen.getByRole("button", { name: content.actions.submit }));

    expect(screen.getByRole("button", { name: content.actions.submitting })).toBeDisabled();
    expect(screen.getByRole("status")).toHaveTextContent(content.status.submitting);

    request.resolve({ success: true });
  });

  it("announces success and clears fields only after the service confirms", async () => {
    const request = deferred();
    const user = userEvent.setup();
    render(
      <ContactForm
        content={content}
        submitContactImpl={() => request.promise}
      />,
    );
    await fillValidForm(user);

    await user.click(screen.getByRole("button", { name: content.actions.submit }));
    expect(screen.getByLabelText(content.fields.name)).toHaveValue("Luana");

    request.resolve({ success: true });

    expect(await screen.findByRole("status")).toHaveTextContent(content.status.success);
    expect(screen.getByLabelText(content.fields.name)).toHaveValue("");
    expect(screen.getByLabelText(content.fields.email)).toHaveValue("");
    expect(screen.getByLabelText(content.fields.subject)).toHaveValue("");
    expect(screen.getByLabelText(content.fields.message)).toHaveValue("");
  });

  it("announces failure and preserves all field values", async () => {
    const user = userEvent.setup();
    render(
      <ContactForm
        content={content}
        submitContactImpl={() => Promise.reject(new Error("CONTACT_SUBMIT_FAILED"))}
      />,
    );
    await fillValidForm(user);

    await user.click(screen.getByRole("button", { name: content.actions.submit }));

    expect(await screen.findByRole("alert")).toHaveTextContent(content.status.error);
    expect(screen.getByLabelText(content.fields.name)).toHaveValue("Luana");
    expect(screen.getByLabelText(content.fields.email)).toHaveValue("luana@example.com");
    expect(screen.getByLabelText(content.fields.subject)).toHaveValue("Projeto");
    expect(screen.getByLabelText(content.fields.message)).toHaveValue("Olá, gostaria de conversar.");
  });
});
