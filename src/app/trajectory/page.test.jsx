import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { usePortfolio } from "@/i18n/usePortfolio";
import TrajectoryPage from "./page";

function LanguageControl() {
  const { setLanguage } = usePortfolio();

  return <button onClick={() => setLanguage("en")}>English</button>;
}

function renderTrajectory() {
  return render(
    <LanguageProvider>
      <LanguageControl />
      <TrajectoryPage />
    </LanguageProvider>,
  );
}

describe("TrajectoryPage", () => {
  it("renders Portuguese operational labels from localized content", () => {
    localStorage.setItem("portfolio-language", "pt");
    renderTrajectory();

    expect(screen.getByText("trajetoria.log")).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "perfil.txt" })).toBeInTheDocument();
    expect(screen.getByText("01 / experiencia")).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "formacao.log" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "certificacoes.log" })).toBeInTheDocument();
  });

  it("updates operational labels to English", async () => {
    localStorage.setItem("portfolio-language", "pt");
    const user = userEvent.setup();
    renderTrajectory();

    await user.click(screen.getByRole("button", { name: "English" }));

    expect(screen.getByText("journey.log")).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "profile.txt" })).toBeInTheDocument();
    expect(screen.getByText("01 / experience")).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "education.log" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "certifications.log" })).toBeInTheDocument();
  });
});
