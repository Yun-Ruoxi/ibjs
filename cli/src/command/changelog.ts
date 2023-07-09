import { generateChangelog, generateTotalChangelog } from '@ibjs/changelog';
import type { ChangelogOption } from '@ibjs/changelog';

export async function genChangelog(options?: Partial<ChangelogOption>, total = false) {
  if (total) {
    generateTotalChangelog(options);
  } else {
    generateChangelog(options);
  }
}
