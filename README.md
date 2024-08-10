# `<url-input>`

A Web Component to add a protocol to URL inputs.

**[Demo](https://chrisburnell.github.io/url-input/demo.html)** | **[Further reading](https://chrisburnell.com/url-input/)**

## Usage

### General usage example

```html
<script type="module" src="url-input.js"></script>

<url-input><input type="url"></url-input>
```

## Installation

You have a few options (choose one of these):

1. Install via [npm](https://www.npmjs.com/package/@chrisburnell/url-input): `npm install @chrisburnell/url-input`
1. [Download the source manually from GitHub](https://github.com/chrisburnell/url-input/releases) into your project.
1. Skip this step and use the script directly via a 3rd party CDN (not recommended for production use)

## Usage

Make sure you include the `<script>` in your project (choose one of these):

```html
<!-- Host yourself -->
<script type="module" src="url-input.js"></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script
  type="module"
  src="https://www.unpkg.com/@chrisburnell/url-input/url-input.js"
></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script
  type="module"
  src="https://esm.sh/@chrisburnell/url-input"
></script>
```

## Credit

With thanks to the following people:

- [David Darnes](https://darn.es) for creating this [Web Component repo template](https://github.com/daviddarnes/component-template)
- [Aaron Parecki](https://aaronparecki.com) for creating [the `addDefaultScheme` function](https://aaronparecki.com/2019/05/13/2/https) that this Web Component uses
