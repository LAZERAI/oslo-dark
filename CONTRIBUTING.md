# Contributing to Oslo Dark

Thank you for considering contributing to Oslo Dark! This document will help you understand how to contribute effectively.

## Code of Conduct

Be respectful, inclusive, and constructive. We're all here to make a better theme.

## Issues and Bug Reports

Found a bug or color that doesn't work? Help us fix it!

### Before Creating an Issue

1. Check if the issue already exists on [GitHub Issues](https://github.com/LAZERAI/oslo-dark/issues)
2. Search for similar issues with different keywords
3. Check the [FAQ section](#faq) below

### Creating an Issue

When reporting an issue, please include:

```markdown
## Description
Brief description of the issue or color problem.

## Steps to Reproduce
1. Open a file with [language/file-type]
2. Look at [element/keyword type]
3. Notice [the problem]

## Expected Behavior
What should happen instead?

## Actual Behavior
What actually happened?

## Environment
- VS Code Version: 1.XX.X
- Operating System: macOS / Windows / Linux
- Theme Version: 1.X.X
- Extension Version: 1.X.X

## Screenshots
If applicable, add screenshots showing the issue.

## Additional Context
Any other information that might be helpful.
```

## Suggesting Improvements

Have an idea for a new feature or improvement? Share it!

### Feature Request Template

```markdown
## Feature/Improvement
Title of your suggestion

## Description
What would you like to see added or changed?

## Use Case
Why is this important? When would you use this?

## Suggested Implementation
If you have ideas on how to implement this, share them!

## Alternatives Considered
Are there other ways to achieve this goal?
```

## Development Setup

### Prerequisites

- VS Code (latest version)
- Git
- Node.js (optional, only if running tasks)

### Local Setup

```bash
# Clone the repository
git clone https://github.com/LAZERAI/oslo-dark.git
cd oslo-dark

# Open in VS Code
code .
```

### Testing the Theme

1. Press **F5** to open Extension Development Host
2. Your modified theme will be applied automatically
3. Make changes to `themes/oslo-dark-color-theme.json`
4. Press **Reload** (Ctrl+R) to see changes instantly

### Project Structure

```
oslo-dark/
├── themes/
│   └── oslo-dark-color-theme.json     # Main theme file
├── package.json                        # Extension metadata
├── README.md                          # User documentation
├── CHANGELOG.md                       # Version history
├── LICENSE                            # MIT License
├── CONTRIBUTING.md                    # This file
├── icon.png                          # Theme icon (128x128)
└── .vscodeignore                      # Files excluded from package
```

## Color Guidelines

When making color changes or improvements, follow these guidelines:

### Color Palette Rules

1. **Keep it Cohesive** – All colors should work together harmoniously
2. **Maintain Contrast** – Ensure WCAG AA compliance (4.5:1 minimum for text)
3. **Test Multiple Languages** – Check your changes across different file types:
   - JavaScript/TypeScript
   - Python
   - JSON
   - Markdown
   - HTML/CSS
4. **Test UI Elements** – Ensure the color works in:
   - Editor (main code area)
   - Activity bar
   - Sidebar
   - Tabs
   - Terminal
   - Status bar

### Adding Token Colors

When adding or modifying syntax highlighting:

1. Identify the TextMate scope
2. Research how other themes handle it
3. Choose a color from the existing palette or propose a new one
4. Test in multiple file types
5. Document the change in your PR

### Color Naming

Use descriptive names and maintain consistency:

```json
{
  "name": "Comment Variable",
  "scope": ["comment variable"],
  "settings": {
    "foreground": "#587a92",
    "fontStyle": "italic"
  }
}
```

## Making Changes

### Before You Start

1. Create a new branch: `git checkout -b fix/issue-name` or `git checkout -b feature/new-feature`
2. Keep changes focused and atomic
3. Reference relevant issues if applicable

### Making Edits

1. Edit `themes/oslo-dark-color-theme.json`
2. Test thoroughly in Extension Development Host
3. Test at least 3 different file types
4. Verify no regressions in existing colors

### Commit Message Guidelines

```
[type]: Brief description (50 chars or less)

Longer explanation if needed, wrapping at 72 characters.

- Additional context
- More details
- Related issues #123

Types: [fix], [feat], [docs], [style], [refactor], [test]
```

Examples:
- `[fix]: improve contrast on markdown italics`
- `[feat]: add python f-string highlighting`
- `[docs]: update color palette documentation`

## Submitting a Pull Request

### Checklist

Before submitting, ensure:

- [ ] Changes are focused and atomic
- [ ] Colors are tested in multiple file types
- [ ] No breaking changes introduced
- [ ] CHANGELOG.md is updated
- [ ] Commit messages are clear and descriptive
- [ ] PR description explains the "why" and "what"
- [ ] No merge conflicts

### PR Description Template

```markdown
## Description
Brief description of what this PR does.

## Motivation
Why is this change needed?

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Enhancement
- [ ] Documentation
- [ ] Other (please describe)

## Testing
How to test these changes?

## Affected Languages/FileTypes
Which languages/file types are affected?

## Screenshots (if applicable)
Before/after comparisons are helpful!

## Related Issues
Closes #123

## Checklist
- [ ] Tested in Extension Development Host
- [ ] Tested multiple file types
- [ ] Updated CHANGELOG.md
- [ ] No breaking changes
```

## Icon Contribution

If you're interested in creating or improving the theme icon:

1. Icon should be **128x128 pixels** (or larger, will be scaled down)
2. Should represent the Oslo Dark theme (cool blues, Nordic aesthetic)
3. Needs to be clearly visible at small sizes (48x48)
4. Consider visibility on both light and dark marketplace backgrounds
5. PNG format with transparency

**Current Icon Vision:**
- Circle or modern geometric shape
- Cool blue gradient (`#1e3a5f` to `#82a5b9`)
- Optional: subtle light blue accent (`#c8f0fa`)
- Minimalist, elegant design
- Should look good as a small icon

### Icon Design Recommendations

- Use your favorite design tool:
  - Figma (free web-based)
  - Affinity Designer
  - Adobe Illustrator
  - Sketch
  - Even Photoshop or GIMP
- Export as PNG with transparency
- Test at different sizes
- Submit as a PR or open an issue with the design

## Resources

- [VS Code Theme Documentation](https://code.visualstudio.com/api/extension-capabilities/theming)
- [Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)
- [TextMate Grammar Scopes](https://macromates.com/manual/en/language_grammars)
- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)

## FAQ

### Q: How do I test my changes?
A: Press F5 in the Extension Development Host to reload and see your changes immediately.

### Q: Can I change the theme name?
A: No, changing the theme name is a breaking change. We keep the name consistent.

### Q: What if I want to add a new color?
A: First, create an issue explaining why it's needed. We prefer to keep the palette minimal and cohesive.

### Q: How often are new versions released?
A: When there are meaningful improvements or bug fixes (typically monthly or bi-monthly).

### Q: Can I use Oslo Dark as a base for my own theme?
A: Absolutely! It's MIT licensed. Fork away! We just ask that you give proper attribution.

## Recognition

Contributors will be recognized in README.md, GitHub contributors list, and CHANGELOG.md for significant contributions.

## Questions?

Start a Discussion or create an Issue on GitHub.
