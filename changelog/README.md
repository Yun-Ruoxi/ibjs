# @ibjs/changelog

generate changelog by git tags and commits

## Install

```bash
pnpm i -D @ibjs/changelog
```

## Usage

```ts
import {
  getChangelogMarkdown,
  getTotalChangelogMarkdown,
  generateChangelog,
  generateTotalChangelog,
} from "@ibjs/changelog";

// get the changelog markdown by two git tags
getChangelogMarkdown();

// get the changelog markdown by the total git tags
getTotalChangelogMarkdown();

// generate the changelog markdown by two git tags
generateChangelog();

// generate the changelog markdown by the total git tags
generateTotalChangelog();
```
