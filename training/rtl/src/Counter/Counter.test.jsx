import { describe, expect, it } from "vitest";
import Counter from "./Counter";
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

describe("Counter", () => {
    it("check default state", () => {
        render(<Counter />);
        const counter = screen.getByTestId('count');
        expect(counter.textContent).toBe("0");
    });

    it("test increment", async () => {
        render(<Counter />);
        const counter = screen.getByTestId('count');
        const incrementButton = screen.getByTestId('increment');
        const user = userEvent.setup();

        await user.click(incrementButton);
        expect(counter.textContent).toBe("1");
    });

    it("test decrement", async () => {
        render(<Counter />);
        const counter = screen.getByTestId('count');
        const decrementButton = screen.getByTestId('decrement');
        const user = userEvent.setup();

        await user.click(decrementButton);
        expect(counter.textContent).toBe("-1");
    });
})