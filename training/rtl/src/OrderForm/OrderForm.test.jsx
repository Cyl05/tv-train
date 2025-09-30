import { describe, expect, it, vi } from "vitest";
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import OrderForm from "./OrderForm";

describe('Order Form', () => {
    it("check default rendering", () => {
        render(<OrderForm />);
        expect(screen.getByPlaceholderText("Product name").value).toBe("");
        expect(screen.getByTestId("selectQuantity").value).toBe("1");
    });

    it("check type user input", async () => {
        const user = userEvent.setup();
        render(<OrderForm />);

        const textBox = screen.getByPlaceholderText("Product name");
        await user.type(textBox, "Hello, world!");
        
        expect(textBox.value).toBe('Hello, world!');
    });

    it("check select quantity", async () => {
        const user = userEvent.setup();
        render(<OrderForm />);

        const selectForm = screen.getByTestId("selectQuantity");
        await user.selectOptions(selectForm, "2");

        expect(selectForm.value).toBe("2");
    });

    it("check submit", async () => {
        const handleSubmit = vi.fn();

        render(<OrderForm onSubmit={handleSubmit} />);
        const user = userEvent.setup();

        const textBox = screen.getByPlaceholderText("Product name");
        const selectForm = screen.getByTestId("selectQuantity");
        const submitButton = screen.getByRole("button");

        await user.type(textBox, "Laptop");
        await user.selectOptions(selectForm, "3");
        await user.click(submitButton);

        expect(handleSubmit).toHaveBeenCalled(1);
        expect(handleSubmit).toHaveBeenCalledWith({ product: "Laptop", quantity: 3 });
    });
});