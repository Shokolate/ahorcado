import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ScenePlayer from ".";

describe("ScenePlayer", () => {
    it("ScenePlayer should show a message when the tries reach 0", () => {
        render(
            //Set tries to 0
            <ScenePlayer
                tries={0}
            />
        );
        //Creates a constant to capture the state of "h2-ScenePlayer"
        const msg_h2 = screen.getByTestId("h2-ScenePlayer");

        //Defines the expected message
        expect(msg_h2.textContent).toBe("You are dead");
    });
});

