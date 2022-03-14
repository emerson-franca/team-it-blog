import { screen, fireEvent, act, getByRole } from "@testing-library/react";
import Form from ".";
import { renderTestComponent } from "../../utils";

describe("<Comment />", () => {
  it("with valid name value", async () => {
    const { getByLabelText, container, getByRole } = renderTestComponent(
      <Form postId={1} />
    );

    await act(async () => {
      const nameInput = getByLabelText("Name*");
      fireEvent.change(nameInput, { target: { value: "Emerson" } });
    });

    await act(async () => {
      const button = getByRole("button");
      fireEvent.click(button);
    });

    expect(container.innerHTML).not.toMatch(
      "name must be at least 3 character"
    );
  });

  it("should renders the Name validation error", async () => {
    const { getByLabelText, container, getByRole } = renderTestComponent(
      <Form postId={1} />
    );

    await act(async () => {
      const nameInput = getByLabelText("Name*");
      fireEvent.change(nameInput, { target: { value: "Em" } });
    });

    await act(async () => {
      const button = getByRole("button");
      fireEvent.click(button);
    });

    expect(container.innerHTML).toMatch("name must be at least 3 character");
  });
  it("should renders the Comment validation error", async () => {
    const { getByLabelText, container, getByRole } = renderTestComponent(
      <Form postId={1} />
    );

    await act(async () => {
      const nameInput = getByLabelText("Comment*");
      fireEvent.change(nameInput, { target: { value: "Co" } });
    });

    await act(async () => {
      const button = getByRole("button");
      fireEvent.click(button);
    });

    expect(container.innerHTML).toMatch(
      "comment must be at least 3 characters"
    );
  });
});
