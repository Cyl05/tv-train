import { describe, it } from "vitest";
import { render, screen } from '@testing-library/react';
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
    it('renders default render state', () => {
        render(<ErrorMessage />);
        expect(screen.getByTestId('message-container')).toHaveTextContent("Something went wrong");
    });

    it('renders custom render state', () => {
        render(<ErrorMessage message={'Email is already taken'} />);
        expect(screen.getByTestId('message-container')).toHaveTextContent("Email is already taken");
    });
});