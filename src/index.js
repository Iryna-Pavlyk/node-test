import path from 'node:path';
import fs from 'node:fs/promises';

const message = 'Hello world!';

const workDir = path.join(process.cwd());
const joinSomePath = path.join(workDir, 'folder', 'text.txt');
const parseSomePath = path.parse(
  'D:Робочий стілІраНавчання\node-test\folder\text.txt',
);
console.log(message);
console.log(joinSomePath);
console.log(parseSomePath);

const fileContent = await fs.readFile('src/hello.txt');
console.log(fileContent);

const buffer = await fs.readFile('src/hello.txt', 'utf-8');
console.log(buffer);
