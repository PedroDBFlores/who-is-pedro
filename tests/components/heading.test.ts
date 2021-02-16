import { render, screen } from "@testing-library/svelte"
import Heading from "../../src/components/heading.svelte"
import userEvent from "@testing-library/user-event"

describe("Heading component", () => {
    it("renders the component", () => {
        render(Heading, { changeTheme: jest.fn() })

        expect(screen.getByText(/who is pedro flores\?/i)).toBeInTheDocument()
    })

    it("toggles the theme", () => {
        const changeThemeMock = jest.fn()
        render(Heading, { changeTheme: changeThemeMock })

        const toggleButton = screen.getByLabelText(/toggle theme/i)
        userEvent.click(toggleButton)

        expect(changeThemeMock).toHaveBeenCalled()
    })
})
