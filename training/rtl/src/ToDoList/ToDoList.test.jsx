import { describe, expect, it, vi } from "vitest";
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import ToDoList from "./ToDoList";

describe("ToDoList", () => {
    const todos = [
        {id: 1, text: "Finish React Testing Library", completed: false},
        {id: 2, text: "Finish JEST", completed: true}
    ];

    const handleToggle = vi.fn();

    it("check list rendering", async () => {
        render(<ToDoList todos={todos} onToggle={handleToggle} />);

        expect(await screen.findByText(/React Testing Library/)).toBeInTheDocument();
        expect(await screen.findByText(/JEST/)).toBeInTheDocument();
    });

    it("check checkbox checks", () => {
        render(<ToDoList todos={todos} onToggle={handleToggle} />);

        const checkboxes = screen.getAllByRole("checkbox");
        expect(checkboxes).toHaveLength(2);
        expect(checkboxes[0]).not.toBeChecked();
        expect(checkboxes[1]).toBeChecked();
    });

    it("check user checking", async () => {
        render(<ToDoList todos={todos} onToggle={handleToggle} />);

        const user = userEvent.setup();
        const checkboxes = screen.getAllByRole("checkbox");

        await user.click(checkboxes[0]);
        expect(handleToggle).toBeCalledTimes(1);
        expect(handleToggle).toBeCalledWith(1);
    });
});