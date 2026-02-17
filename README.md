# 🌌 Oslo Dark Theme

A serene, elegant dark theme for VS Code inspired by the calm twilight skies of Oslo. Perfect for long, focused coding sessions without eye strain.

![Visual Studio Marketplace](https://img.shields.io/visual-studio-marketplace/v/lazerai.oslo-dark?label=Version&color=1e3a5f)
![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/lazerai.oslo-dark?label=Downloads&color=1e3a5f)
![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/lazerai.oslo-dark?label=Rating&color=1e3a5f)
![License](https://img.shields.io/badge/License-MIT-1e3a5f)

---

## ✨ Features

- **🎨 Carefully Curated Colors** – A harmonious palette of cool blues and soft whites designed to reduce eye strain
- **💻 Comprehensive Language Support** – Perfect syntax highlighting for:
  - JavaScript, TypeScript, JSX/TSX
  - HTML, CSS, SCSS, SASS, Less, PostCSS
  - JSON (with multi-level key differentiation)
  - Python, Go, Rust, PHP
  - Markdown, YAML, XML
  - And many more...
- **🎯 Complete UI Theming** – Every VS Code element is carefully styled:
  - Activity bar, sidebar, and file explorer
  - Tabs and breadcrumbs
  - Status bar and terminal
  - Search, debug, and extension panels
  - Input fields and dropdowns
- **🌿 Git Integration** – Custom colors for file status (added, modified, deleted, conflicting)
- **⚡ Terminal Support** – Beautiful ANSI color palette included
- **🎭 Consistent Design** – All 200+ UI colors work harmoniously together

---

## 🚀 Installation

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

---

## 🎨 Color Palette

The Oslo Dark theme uses a carefully selected palette inspired by Nordic design:

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

---

## 🖼️ Preview

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

---

## 💡 Tips & Tricks

### Customize the Theme

Don't like a specific color? You can override any color in your **settings.json**:

```json
"workbench.colorCustomizations": {
  "[Oslo Dark]": {
    "editor.background": "#1a1a1a",
    "editor.foreground": "#c8f0fa",
    "editor.lineHighlightBackground": "#1e3a5f40"
  }
}
```

### Font Recommendations

Pair Oslo Dark with these fonts for an optimal experience:
- **Fira Code** – Modern, clean, great ligatures
- **Jetbrains Mono** – Professional, highly readable
- **Anonymous Pro** – Classic monospace feel
- **Victor Mono** – Unique style with great italics

### Terminal Integration

Oslo Dark includes a complete ANSI color palette perfect for shell prompts:

```bash
# Try oh-my-posh or starship with this theme for stunning results
# The colors blend seamlessly with the editor
```

---

## 🔧 Development

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

---

## 🤝 Contributing

I'd love your feedback! Here's how to contribute:

1. **Report Issues**: Found a color you think doesn't work? [Open an issue](https://github.com/LAZERAI/oslo-dark/issues)
2. **Suggest Improvements**: Have a great idea? [Create a discussion](https://github.com/LAZERAI/oslo-dark/discussions)
3. **Submit PRs**: Want to contribute directly? Fork the repo and submit a pull request

### Guidelines

- Keep color changes harmonious with the existing palette
- Test changes in different file types (JS, Python, Markdown, etc.)
- Update the CHANGELOG with your changes
- Ensure your changes work in both light and dark environments

---

## 📦 Version History

See [CHANGELOG.md](CHANGELOG.md) for detailed release notes.

### Latest (v1.1.0)
- ✨ Enhanced JSON key color differentiation
- 🐛 Improved terminal ANSI colors
- 📝 Better documentation

### v1.0.0
- 🎉 Initial release with complete theme support

---

## 🎓 Resources

- [VS Code Theme Documentation](https://code.visualstudio.com/api/extension-capabilities/theming)
- [Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)
- [TextMate Grammar Scopes](https://macromates.com/manual/en/language_grammars)
- [Monaco Editor Colors](https://microsoft.github.io/monaco-editor/playground.html?source=v0.44.0)

---

## 📄 License

MIT License © 2024 [LazerAI](https://github.com/LAZERAI)

Permission is hereby granted to use, modify, and distribute this theme freely. See [LICENSE](LICENSE) for details.

---

## 👋 Credits

Inspired by:
- The calm aesthetic of Oslo's Nordic design
- The VS Code community's amazing themes
- Accessibility best practices for dark themes

---

**Enjoy coding with Oslo Dark! 🌌**

Have a question? [Open an issue](https://github.com/LAZERAI/oslo-dark/issues) or reach out on [GitHub](https://github.com/LAZERAI).
