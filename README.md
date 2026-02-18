# Oslo Dark

Dark VS Code theme. I made this to match a wallpaper I like -- dark background with layered blue gradients. The palette is pulled from that: deep blacks, cool blues, with some lavender, green, and warm tones mixed in so you can actually tell your code apart.

![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/lazerai.oslo-dark)
![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/lazerai.oslo-dark)

[Preview it live in vscode.dev](https://vscode.dev/editor/theme/lazerai.oslo-dark)

## Install

Search for **Oslo Dark** in the Extensions panel (`Ctrl+Shift+X`) or run:

```
ext install lazerai.oslo-dark
```

## Colors

| Role | Hex | What it styles |
|------|-----|---------------|
| Background | `#1a1a1a` | Editor |
| Surface | `#141414` | Sidebar, panels, terminal |
| Accent | `#1e3a5f` | Status bar, badges |
| Text | `#c8f0fa` | Foreground |
| Keywords | `#b898c4` | `if`, `const`, `return` |
| Strings | `#c4a882` | `"hello"` |
| Constants | `#8ab89a` | Numbers, booleans |
| Functions | `#90b3c6` | Function calls |
| Comments | `#4a6b85` | `// like this` |
| Operators | `#7497ac` | `=`, `+`, `=>` |

## Customization

```json
"workbench.colorCustomizations": {
  "[Oslo Dark]": {
    "editor.background": "#1c1c1c"
  }
}
```

All available keys: [theme color reference](https://code.visualstudio.com/api/references/theme-color).

## Contributing

See a color that looks off? [Open an issue](https://github.com/LAZERAI/oslo-dark/issues) with a screenshot.

PRs welcome -- test with F5 in the Extension Development Host, check a few file types before submitting.

## License

[MIT](LICENSE)
