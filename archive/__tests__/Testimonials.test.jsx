import { render, screen } from "@testing-library/react";
import Testimonials from "../../pages/Home/Testimonials";

describe("Testimonials Component", () => {
  test("renders testimonials section heading", () => {
    render(<Testimonials />);
    const heading = screen.getByText("Real results from real businesses");
    expect(heading).toBeInTheDocument();
  });

  test("renders testimonial quotes", () => {
    render(<Testimonials />);
    const testimonialText = screen.getByText(
      /Partnering with Next Layer Consulting/i,
    );
    expect(testimonialText).toBeInTheDocument();
  });

  test("renders multiple testimonials", () => {
    render(<Testimonials />);
    const testimonials = screen.getAllByRole("figure");
    expect(testimonials.length).toBeGreaterThan(0);
  });

  test("has proper accessibility attributes", () => {
    render(<Testimonials />);
    const section = screen.getByRole("region", { hidden: true });
    expect(section).toBeInTheDocument();
  });
});
