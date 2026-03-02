# Changelog

## [1.4.0] - 2026-02-19

### Added
- Chat / AI panel colors (request border, background, slash commands, avatars, edited file indicator)
- Inline Chat colors (background, border, input styling, diff inserted/removed)
- Inline Edit / Copilot suggestion colors (gutter indicators, modified/original backgrounds)
- SCM Graph colors (5 branch foregrounds, history item ref/remote/base)
- Testing colors (passed, failed, errored, skipped, queued, coverage backgrounds, gutter indicators)
- Bracket match foreground color (new VS Code 1.109 token)
- Agent Session colors (read indicator, selected badge border)
- Markdown Alert colors (note, tip, important, warning, caution)

### Changed
- Minimum VS Code engine raised to 1.100 for new token support

## [1.3.0] - 2026-02-18

### Changed
- Functions now use warm amber (#dab485) instead of blue
- Types and classes use teal frost (#8fbcbb) instead of blue
- HTML tags use dusty rose (#d4879c) instead of blue
- Attributes use teal to match types
- Decorators use aurora orange (#d08770)
- Regex and escape characters use frost cyan (#89b8c2)
- Language keywords (this/self) use dusty rose italic
- JSON key levels cycle through all palette colors instead of blue shades
- Markdown headings use amber, links use teal
- Markup bold/italic use neutral ice instead of blue

### Added
- Semantic token colors for TypeScript/JavaScript (functions, types, parameters)
- Bracket pair colorization using full palette

## [1.2.0] - 2026-02-18

### Changed
- Keywords now use muted lavender instead of blue-gray
- Strings use a warm sand tone for better contrast against blue
- Constants and numbers use sage green
- Invalid/illegal code uses muted rose (actually stands out now)
- Git decorations use semantic colors (green/amber/red) instead of all-blue
- Comments brightened slightly for readability
- Markup inserted/deleted/changed use appropriate colors

### Added
- Dedicated operator scope (stays blue, distinct from lavender keywords)
- Semantic highlighting enabled

## [1.1.1] - 2026-02-17

### Fixed
- Removed emoji from display name

## [1.1.0] - 2026-02-17

### Added
- Full ANSI terminal color palette
- Contributing guidelines
- Extended marketplace keywords

### Changed
- Better syntax highlighting for nested JSON
- Improved documentation

## [1.0.0] - 2026-01-01

- Initial release

[1.4.0]: https://github.com/LAZERAI/oslo-dark/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/LAZERAI/oslo-dark/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/LAZERAI/oslo-dark/compare/v1.1.1...v1.2.0
[1.1.1]: https://github.com/LAZERAI/oslo-dark/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/LAZERAI/oslo-dark/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/LAZERAI/oslo-dark/releases/tag/v1.0.0
