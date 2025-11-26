# HRnet Modal - React Plugin

**HRnet Modal** is a reusable React component that provides a clean, accessible, animated modal window.
It was created as part of the HRnet projet to replace the old jQuery plugin `jquery.modal.js`.

---

## Features

- Close modal with:
  - overlay click
  - close button
  - `Escape` key
- Built-in animations:
  - `slide-up` (default)
  - `fade`
  - `zoom`
  - `none`
- Custom themes using CSS variables
- Includes `modal-success` and `modal-dark` themes
- Accessible:
  - `role="dialog"`
  - `aria-modal`
  - supports keyboard close (Esc)
- Light, dependency-free (only React)

---

## Installation (local development)

From your React app:

```bash
npm install @aweb1112/hrnet-modal
```

## Usage

1. Import the component and CSS

```jsx
import Modal from "@aweb1112/hrnet-modal";
import "@aweb1112/hrnet-modal/dist/hrnet-modal.css";
```

2. Example

```jsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Employee created"
  animation="fade"
  className="modal-success"
>
  Employee successfully created!
</Modal>
```

## Props

```md
| Prop        | Type                                     | Required | Default   | Description                   |
| ----------- | ---------------------------------------- | -------- | --------- | ----------------------------- |
| `isOpen`    | boolean                                  | yes      | -         | Controls visibility           |
| `onClose`   | function                                 | yes      | -         | Called when modal closes      |
| `className` | string                                   | no       | ""        | Adds custom classes or themes |
| `animation` | "fade" \| "zoom" \| "slide-up" \| "none" | no       | "slide-up | Opening animation             |
```

## Development

Build the plugin:

```bash
npm run build
```

Output files are generated in the `/dist` folder.

## License

MIT - free to use and modify.
