export default class URLInput extends HTMLElement {
	static register(tagName) {
		if ("customElements" in window) {
			customElements.define(tagName || "url-input", URLInput);
		}
	}

	static observedAttributes = ["force-https"];

	connectedCallback() {
		if (this.inputs.length === 0) {
			return;
		}

		this.controller = new AbortController();

		this.processInputs(this.controller);
	}

	attributeChangedCallback() {
		this.processInputs(this.controller);
	}

	disconnectedCallback() {
		if (this.controller) {
			this.controller.abort();
		}
	}

	processInputs(controller) {
		this.inputs.forEach((input) => {
			input.addEventListener(
				"blur",
				(event) => {
					this.addDefaultScheme(event.target, this.forceHTTPS);
				},
				{ controller },
			);
			input.addEventListener(
				"keypress",
				(event) => {
					if (event.key === "Enter") {
						this.addDefaultScheme(event.target, this.forceHTTPS);
					}
				},
				{ controller },
			);
		});
	}

	get inputs() {
		return this.querySelectorAll(`input[type="url"]`);
	}

	get forceHTTPS() {
		return (
			this.hasAttribute("force-https") &&
			this.getAttribute("force-https") !== "false"
		);
	}

	addDefaultScheme(input, forceHTTPS) {
		if (input.value.match(/^(?!https?:).+\..+/)) {
			input.value = `https://${input.value}`;
		}
		if (forceHTTPS) {
			input.value = input.value.replace(/^http:\/\//i, "https://");
		}
	}
}

URLInput.register();
