# Contributing to SquadMaps

Thank you for helping improve SquadMaps. This repository is the public home for **community translations**, bug reports, and feature requests for [squadmaps.com](https://squadmaps.com).

## Translations

This is the most valuable way to contribute today. SquadMaps uses nested JSON locale files under [`locale/`](locale/). Each file mirrors the structure of [`locale/en.json`](locale/en.json).

### What to translate

| Section | Keys | Notes |
|---------|------|-------|
| `ui.*` | Interface labels, buttons, tooltips, errors | Translate naturally. Keep placeholders like `{name}` exactly as they appear. |
| `game.*` | Map names, gamemodes, factions, vehicles, weapons | Requires Squad domain knowledge. Prefer names the community already uses in-game or on wikis. |

Some keys at the root level (outside `ui` and `game`) hold pipeline data labels. Match the same structure as `en.json` and translate the string values only.

### Rules

1. **Do not edit `en.json`.** English is the reference language and is maintained in the private app repository.
2. **Edit only your target locale file** — for example `de.json`, `fr.json`, `zh-CN.json`, or `ua.json`.
3. **Preserve JSON structure.** Do not add, remove, or rename keys. Every key in your file must exist in `en.json`.
4. **Use valid JSON.** Trailing commas and comments are not allowed.
5. **Avoid machine translation.** Automated translations often miss Squad-specific terms. A partial, accurate PR is better than a complete but wrong one.
6. **Explain game terms in your PR** when the correct translation is ambiguous (e.g. gamemode names, faction abbreviations, vehicle roles).

### Supported locales

| File | Language |
|------|----------|
| `locale/de.json` | Deutsch |
| `locale/fr.json` | Français |
| `locale/zh-CN.json` | 中文 (Simplified) |
| `locale/ua.json` | Українська |

Want to add a new language? [Open a translation issue](https://github.com/mahtoid/SquadMaps/issues/new?template=translation.yml) first so we can agree on the locale code and scope.

### How to submit a translation

1. Fork this repository.
2. Edit the locale file for your language.
3. Open a pull request using the [PR checklist](.github/pull_request_template.md).
4. Describe any non-obvious terminology choices in the PR body.

After your PR is merged, a maintainer copies the updated locale file into the live app before the next release. You do not need access to the private application repository.

### Review criteria

Maintainers look for:

- Correct JSON structure (keys match `en.json`)
- Accurate Squad terminology
- Natural phrasing for UI strings
- Preserved placeholders and formatting

## Bug reports and feature requests

Use the GitHub issue templates rather than opening a blank issue:

- [Bug report](https://github.com/mahtoid/SquadMaps/issues/new?template=bug-report.yml)
- [Feature request](https://github.com/mahtoid/SquadMaps/issues/new?template=feature-request.yml)

Include as much context as possible — especially the URL, browser, and language you were using on [squadmaps.com](https://squadmaps.com).

## Code of conduct

Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). Be respectful, especially when discussing translations or game terminology across languages.

## Security

To report a security vulnerability in squadmaps.com, see [SECURITY.md](SECURITY.md).

## Questions

Join [Discord](https://discord.mahto.id/) for general discussion, or open a [translation issue](https://github.com/mahtoid/SquadMaps/issues/new?template=translation.yml) for translation-specific questions.
