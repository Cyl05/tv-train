import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from '@testing-library/react';
import FetchUser from "./FetchUser";

describe("Fetch User", () => {
    beforeEach(() => {
        global.fetch = vi.fn();
    });

    it("shows loading initially and then fetches data", async () => {
        global.fetch.mockResolvedValueOnce({
            json: async () => ({ userId: 1, username: "Chiraag" }),
        });
        
        render(<FetchUser userId={1} />);

        expect(screen.getByText(/Loading/)).toBeInTheDocument();

        expect(await screen.findByText(/Chiraag/)).toBeInTheDocument();

        expect(global.fetch).toHaveBeenCalledWith("/api/users/1");
    });
});