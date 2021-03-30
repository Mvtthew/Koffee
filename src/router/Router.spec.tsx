import Router from "./Router";
import { render } from "@testing-library/react";

describe("Router.tsx", () => {
	it("should render", () => {
		const w = render(<Router />);
		expect(w).toBeTruthy();
	});
});
