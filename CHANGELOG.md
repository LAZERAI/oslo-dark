# Changelog

All notable changes to the Oslo Dark theme will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2024-02-17

### Added
- 📚 Comprehensive README with examples and customization guide
- 🎨 Enhanced visual palette documentation
- 🌐 Full ANSI terminal color support with custom palette
- 💡 Tips & tricks section for optimal setup recommendations
- 🔗 Contributing guidelines and development instructions
- 📊 Extended keyword support in package.json for better discoverability

### Improved
- 🎯 Better syntax highlighting for complex nested JSON structures
- 🔧 Refined terminal ANSI colors for improved readability
- 📝 Enhanced documentation and examples
- 🏷️ Clearer categorization of theme features

### Fixed
- 🐛 Fixed inconsistent colors in markdown code blocks
- 🐛 Improved contrast for better accessibility in certain UI elements
- 🐛 Terminal colors now more consistent with editor theme

---

## [1.0.0] - 2024-01-XX

### Added
- 🎉 Initial release of Oslo Dark theme
- 🎨 Complete syntax highlighting for major languages:
  - **JavaScript & TypeScript** – Full JSX/TSX support
  - **HTML, CSS, SCSS, SASS, Less, PostCSS** – Web development ready
  - **JSON** – Multi-level key color differentiation (8 levels)
  - **Markdown** – Clean, readable text formatting
  - **Python** – Comprehensive Python 3 support
  - **Go, Rust, PHP** – Modern language support
  - Plus support for 15+ additional languages
- 🎭 **Complete VS Code UI Theming**:
  - Activity bar with badge highlighting
  - Sidebar with section headers
  - Custom tab styling (active/inactive states)
  - Status bar with debugging support
  - Terminal integration with ANSI colors
  - Editor components (minimap, scrollbar, bracket matching)
  - Git decorations (added, modified, deleted, conflicting)
  - Input fields, dropdowns, and notifications
  - Panels, breadcrumbs, and extensions sidebar
- 🌿 **Git Integration** – Custom colors for version control:
  - Added files (light cyan)
  - Modified files (blue-gray)
  - Deleted files (light blue)
  - Untitled/untracked (muted)
  - Ignored files (dark)
  - Conflicting files (white-blue)
- ⚡ **Terminal Support** – Beautiful ANSI color palette:
  - 8 standard colors
  - 8 bright variant colors
  - Optimized for shell prompts and command output

### Color Palette
- **Background**: `#1a1a1a` - Deep dark, easy on the eyes
- **Surface**: `#141414` - Slightly darker for UI elements
- **Accent**: `#1e3a5f` - Oslo blue, bold and recognizable
- **Primary**: `#82a5b9` - Light cyan for active elements
- **Foreground**: `#c8f0fa` - Soft white-blue for text
- **Keywords**: `#587a92` - Muted teal for language keywords
- **Functions**: `#90b3c6` - Light cyan for function calls
- **Strings**: `#66889f` - Steel blue for string literals
- **Comments**: `#3b5b78` - Dark italic for comments (italic)

---

## [Unreleased] - Future Roadmap

### Planned Features
- [ ] **Oslo Light** – A companion light theme
- [ ] **Oslo Midnight** – An ultra-dark variant
- [ ] **Extended Language Support** – Nix, Elixir, Clojure
- [ ] **Theme Variants** – Color-blind friendly options
- [ ] **Interactive Color Picker** – Web-based customization tool
- [ ] **Theme Configurator** – VS Code command for live tweaking

### Under Consideration
- [ ] Themed icons pack
- [ ] Custom indent guides
- [ ] Activity bar badge color customization
- [ ] Per-file-type color overrides

---

## Version Comparison

| Feature | 1.0.0 | 1.1.0 | Future |
|---------|-------|-------|--------|
| UI Theming | ✅ | ✅ | ✅ |
| Syntax Highlighting | ✅ | ✅ | ✅ |
| Terminal Support | ✅ | ✅ | ✅ |
| Git Integration | ✅ | ✅ | ✅ |
| Documentation | ✅ | ✅✅ | ✅✅✅ |
| Contributing Guide | ❌ | ✅ | ✅ |
| Light Variant | ❌ | ❌ | ⏳ |
| Configurator | ❌ | ❌ | ⏳ |

---

## Upgrade Guide

### From 1.0.0 to 1.1.0

No breaking changes! Simply update the theme:

```bash
# If installed via marketplace
# Just click "Update" in the Extensions panel

# If installed locally
git pull origin main
```

All existing color customizations will continue to work.

---

## Reporting Issues

Found a bug or have a feature idea? [Open an issue](https://github.com/LAZERAI/oslo-dark/issues)!

Please include:
- VS Code version
- Operating system
- Description of the issue
- Screenshot if applicable
- File type if language-specific

---

## Credits

- Inspired by Nord, Dracula, and One Dark Pro
- Uses TextMate grammar scopes for syntax highlighting
- Built with ❤️ by [LazerAI](https://github.com/LAZERAI)

---

[1.1.0]: https://github.com/LAZERAI/oslo-dark/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/LAZERAI/oslo-dark/releases/tag/v1.0.0
