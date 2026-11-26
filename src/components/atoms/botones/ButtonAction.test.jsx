import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ButtonAction from "./ButtonAction";

describe("ButtonAction", () => {
  it("combines Bootstrap props and forwards native button attributes", () => {
    const onClick = vi.fn();

    render(
      <ButtonAction
        type="submit"
        variant="outline-primary"
        size="sm"
        className="w-100"
        aria-label="Guardar"
        onClick={onClick}
      >
        Guardar
      </ButtonAction>,
    );

    const button = screen.getByRole("button", { name: "Guardar" });
    expect(button).toHaveClass("btn", "btn-outline-primary", "btn-sm", "w-100");
    expect(button).toHaveAttribute("type", "submit");

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("disables the button when requested", () => {
    render(<ButtonAction disabled>Guardar</ButtonAction>);

    expect(screen.getByRole("button", { name: "Guardar" })).toBeDisabled();
  });
});
