"use client";

import { useState } from "react";
import { submitContact } from "@/services/contact";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values, messages) {
  const errors = {};

  Object.entries(values).forEach(([field, value]) => {
    if (!value.trim()) {
      errors[field] = messages.required;
    }
  });

  if (values.email.trim() && !emailPattern.test(values.email.trim())) {
    errors.email = messages.email;
  }

  return errors;
}

export function ContactForm({ content, submitContactImpl = submitContact }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) return current;

      const next = { ...current };
      delete next[name];
      return next;
    });

    if (status === "success" || status === "error") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (status === "submitting") return;

    const nextErrors = validate(values, content.validation);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");

    try {
      await submitContactImpl(values);
      setValues(initialValues);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
      aria-busy={status === "submitting"}
    >
      <div className="contact-form__heading">
        <h2>{content.title}</h2>
        <p>{content.description}</p>
      </div>

      <div className="contact-form__fields">
        {Object.keys(initialValues).map((field) => {
          const errorId = `${field}-error`;
          const isMessage = field === "message";
          const sharedProps = {
            id: field,
            name: field,
            value: values[field],
            onChange: handleChange,
            required: true,
            "aria-invalid": errors[field] ? "true" : undefined,
            "aria-describedby": errors[field] ? errorId : undefined,
          };

          return (
            <div className={`field contact-form__field contact-form__field--${field}`} key={field}>
              <label htmlFor={field}>{content.fields[field]}</label>
              {isMessage ? (
                <textarea {...sharedProps} />
              ) : (
                <input {...sharedProps} type={field === "email" ? "email" : "text"} />
              )}
              {errors[field] ? (
                <p className="field__error" id={errorId} role="alert">
                  {errors[field]}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="contact-form__footer">
        <button className="button" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? content.actions.submitting : content.actions.submit}
        </button>

        {status === "submitting" || status === "success" ? (
          <p className={`form-status form-status--${status}`} role="status">
            {content.status[status]}
          </p>
        ) : null}
        {status === "error" ? (
          <p className="form-status form-status--error" role="alert">
            {content.status.error}
          </p>
        ) : null}
      </div>
    </form>
  );
}
