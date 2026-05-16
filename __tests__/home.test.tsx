import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/image", () => ({
  default: function MockImage({
    alt,
    src,
    ...props
  }: {
    alt: string;
    src: string;
    fill?: boolean;
  }) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={alt} src={typeof src === "string" ? src : ""} {...props} />;
  },
}));

import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders the hero headline", () => {
    const { container } = render(<HomePage />);
    expect(
      container.querySelector("#hero-heading"),
    ).toBeInTheDocument();
  });

  it("renders primary section anchors", () => {
    const { container } = render(<HomePage />);
    expect(container.querySelector("#problem")).toBeInTheDocument();
    expect(container.querySelector("#methodology")).toBeInTheDocument();
    expect(container.querySelector("#solutions")).toBeInTheDocument();
    expect(container.querySelector("#team")).toBeInTheDocument();
    expect(container.textContent).toMatch(/join us/i);
  });
});
