import { parseHTML } from "linkedom";
import assert from "node:assert/strict";
import { afterEach, before, describe, it } from "node:test";

describe("<url-input> Web Component", () => {
	let window, document, customElements, HTMLElement, DocumentFragment, Event;

	const now = new Date();
	const defaultBody = `<url-input><input type="url"></url-input>`;

	before(async () => {
		window = global.window = parseHTML(`
			<!DOCTYPE html>
			<html lang="en">
				<body>
					${defaultBody}
				</body>
			</html>
		`);
		DocumentFragment = global.DocumentFragment = window.DocumentFragment;
		document = global.document = window.document;
		customElements = global.customElements = window.customElements;
		Event = global.Event = window.Event;
		HTMLElement = global.HTMLElement = window.HTMLElement;

		await import("./url-input.js");
	});

	afterEach(() => {
		document.body.innerHTML = defaultBody;
	});

	it("Should be defined in the customElements registry", () => {
		assert.strictEqual(!!customElements.get("url-input"), true);
	});

	it("Should apply a default protocol on input blur", () => {
		const inputElement = document.querySelector("input");
		inputElement.value = "example.com";
		inputElement.blur();
		assert.strictEqual(inputElement.value === "https://example.com", true);
	});

	it("Should preserve `http:` protocol", () => {
		const inputElement = document.querySelector("input");
		inputElement.value = "http://example.com";
		inputElement.blur();
		assert.strictEqual(inputElement.value === "http://example.com", true);
	});

	it("Should be able to force `https:` protocol", () => {
		document.body.innerHTML = `<url-input force-https><input type="url"></url-input>`;
		const inputElement = document.querySelector("input");
		inputElement.value = "http://example.com";
		inputElement.blur();
		assert.strictEqual(inputElement.value === "https://example.com", true);
	});
});
