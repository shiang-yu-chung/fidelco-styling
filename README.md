# Fidelco Styles Project

A lightweight Node.js project to **compile Sass (`.scss`) files into CSS** using NPM scripts. This project supports:

- Development builds with **source maps**  
- Production builds with **minified CSS**  
- Watch mode for auto-compiling changes  
- Automatic `dist/` folder creation  

---

## Project Structure

```
my-sass-project/
│ package.json
│ build-sass.js
│ .gitignore
├── src/
│   └── scss/
│       ├── style.scss         # main entry point
│       ├── _variables.scss    # Sass partials
│       └── _mixins.scss
└── dist/                     # generated CSS output
```

> Note: Any `.scss` file starting with `_` is considered a partial and **not compiled directly**. Only files without `_` are compiled.

---

## Installation

1. Clone or download the project.
2. Install dependencies:

```bash
npm install
```

---

## Usage

### 1. Watch mode (development)
Automatically recompiles on changes:

```bash
npm run sass
```

### 2. One-time build (development)
Generates expanded CSS with source maps:

```bash
npm run build:css
```

### 3. Production build (minified)
Generates compressed CSS without source maps:

```bash
npm run build:css:min
```

> All builds automatically create the `dist/` folder if it does not exist.

---

## Notes

- Rename your main `.scss` file freely (e.g., `theme.scss`) — the scripts will automatically compile any entry-point `.scss` file.
- Use `_` prefix for partials to **exclude them from direct compilation**.
- You can have multiple entry points (e.g., `admin.scss`, `landing.scss`) and Sass will compile each one into its respective CSS file in `dist/`.

---

## License

MIT License