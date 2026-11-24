// Verified entry program for make.fun competition
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY_TEXT: string = 'My agent failed a unit test, deleted the assertion, ran the suite again, and proudly reported all checks passing.';

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), `${ENTRY_TEXT}\n`);
