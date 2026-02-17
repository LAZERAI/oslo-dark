# Oslo Dark Theme

A dark theme for VS Code inspired by Nordic design principles. Provides readable syntax highlighting and UI colors for all-day coding.

![Visual Studio Marketplace](https://img.shields.io/visual-studio-marketplace/v/lazerai.oslo-dark?label=Version&color=1e3a5f)
![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/lazerai.oslo-dark?label=Downloads&color=1e3a5f)
![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/lazerai.oslo-dark?label=Rating&color=1e3a5f)
![License](https://img.shields.io/badge/License-MIT-1e3a5f)

## Features

- **Color Palette** – Cool blue tones with good contrast for readability
- **Language Support** – Syntax highlighting for:
  - JavaScript, TypeScript, JSX/TSX
  - HTML, CSS, SCSS, SASS, Less, PostCSS
  - JSON (with multi-level key differentiation)
  - Python, Go, Rust, PHP
  - Markdown, YAML, XML
  - And many more
- **UI Theming** – Styled elements including activity bar, sidebar, tabs, status bar, terminal, and panels
- **Git Integration** – Custom colors for file status indicators
- **Terminal Support** – ANSI color palette for terminals

## Installation

### From VS Code Marketplace (Recommended)

1. Open **Extensions** in VS Code (`Ctrl+Shift+X` / `Cmd+Shift+X`)
2. Search for **"Oslo Dark"**
3. Click **Install**
4. Select **Oslo Dark** from the theme picker (`Ctrl+K Ctrl+T` / `Cmd+K Cmd+T`)

### From Command Palette

1. Open Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
2. Type `ext install lazerai.oslo-dark`
3. Press Enter

### Manual Installation

```bash
git clone https://github.com/LAZERAI/oslo-dark.git ~/.vscode/extensions/oslo-dark
```

## Color Palette

Color reference for the Oslo Dark theme:

| Color | Hex | Usage |
|-------|-----|-------|
| **Background** | `#1a1a1a` | Main editor & workspace |
| **Surface** | `#141414` | Activity bar, tabs |
| **Accent** | `#1e3a5f` | Status bar, highlights |
| **Primary** | `#82a5b9` | Active elements, cursor |
| **Text** | `#c8f0fa` | Main text & foreground |
| **Muted** | `#587a92` | Keywords, comments |
| **Function** | `#90b3c6` | Function names |
| **String** | `#66889f` | Strings & attributes |

### Visual Palette Reference

```
Background:     ████ #1a1a1a
Surface:        ████ #141414
Accent:         ████ #1e3a5f
Primary:        ████ #82a5b9
Text:           ████ #c8f0fa
Muted:          ████ #587a92
Function:       ████ #90b3c6
String:         ████ #66889f
```

## Preview

### Code Example

```javascript
// Comments are soft and italic
const greeting = "Hello, Oslo!";

function welcomeUser(name) {
  console.log(`Welcome, ${name}`);
  return name.toUpperCase();
}

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

users.forEach(user => {
  welcomeUser(user.name);
});
```

### UI Elements

- **Activity Bar**: Dark background with soft cyan accents
- **Sidebar**: Slightly lighter than editor for subtle contrast
- **Status Bar**: Bold Oslo blue highlight
- **Terminal**: Full ANSI support with custom color palette
- **Diff View**: Clear, distinct colors for added/removed code

## Customization

### Override Colors

Customize colors in settings.json:

```json
"workbench.colorCustomizations": {
  "[Oslo Dark]": {
    "editor.background": "#1a1a1a",
    "editor.foreground": "#c8f0fa",
    "editor.lineHighlightBackground": "#1e3a5f40"
  }
}
```

### Recommended Fonts
- Fira Code
- Jetbrains Mono
- Anonymous Pro
- Victor Mono

## Development

### Building Locally

1. Clone the repository:
```bash
git clone https://github.com/LAZERAI/oslo-dark.git
cd oslo-dark
```

2. Open in VS Code:
```bash
code .
```

3. Press **F5** to open the Extension Development Host
4. Your changes to the theme will appear instantly

### Project Structure

```
oslo-dark/
├── themes/
│   └── oslo-dark-color-theme.json    # Main theme definition
├── package.json                       # Extension metadata
├── icon.png                          # Marketplace icon
├── README.md                         # This file
├── CHANGELOG.md                      # Version history
├── LICENSE                           # MIT License
└── .vscodeignore                     # Files to exclude from package
```

### Modifying Colors

Edit `themes/oslo-dark-color-theme.json` directly:

```json
{
  "name": "Oslo Dark",
  "type": "dark",
  "colors": {
    "editor.background": "#1a1a1a",
    "editor.foreground": "#c8f0fa",
    // ... other colors
  },
  "tokenColors": [
    // ... syntax highlighting rules
  ]
}
```

After changes, press **Reload** in the Extension Development Host to see them instantly.

## Contributing

Contributions are welcome:

- Report issues at https://github.com/LAZERAI/oslo-dark/issues
- Create discussions for suggestions
- Submit pull requests for direct contributions

### Guidelines

- Keep color changes harmonious with the existing palette
- Test changes in different file types (JS, Python, Markdown, etc.)
- Update the CHANGELOG with your changes
- Ensure your changes work in both light and dark environments

## Version History

See CHANGELOG.md for release notes.

## Resources

- [VS Code Theme Documentation](https://code.visualstudio.com/api/extension-capabilities/theming)
- [Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)
- [TextMate Grammar Scopes](https://macromates.com/manual/en/language_grammars)
- [Monaco Editor Colors](https://microsoft.github.io/monaco-editor/playground.html?source=v0.44.0)

## License

MIT License © 2024 LazerAI

See LICENSE for details.
