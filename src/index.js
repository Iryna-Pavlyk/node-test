import path from 'node:path';
import fs from 'node:fs/promises';

// const message = 'Hello world!';

const workDir = path.join(process.cwd());
const joinSomePath = path.join(workDir, 'folder', 'text.txt');
// const parseSomePath = path.parse(
//   'D:Робочий стілІраНавчання\node-test\folder\text.txt',
// );
// console.log(message);
console.log(joinSomePath);
// console.log(parseSomePath);

// const readContent = async () => {
//   try {
//     const data = await fs.readFile('src/hello.txt', 'utf-8');
//     console.log('Вміст файлу:', data);
//   } catch (err) {
//     console.error('Помилка читання файлу:', err);
//   }
// };

// readContent();

// const writeContent = async () => {
//   const data = 'Hello world';
//   try {
//     await fs.writeFile('src/hello.txt', data, 'utf-8');
//     console.log('Дані успішно записані у файл');
//   } catch (error) {
//     console.log('Помилка додавання даних до файлу:', error);
//   }
// };
// writeContent();

// const appendContent = async () => {
//   const data = '!';
//   try {
//     await fs.appendFile('src/hello.txt', data, 'utf-8');
//     console.log('Дані успішно записані у файл');
//   } catch (error) {
//     console.log('Помилка додавання даних до файлу:', error);
//   }
// };

// appendContent();

// const renameFolder = async () => {
//   try {
//     await fs.rename('src/hi.txt', 'src/hello.txt');
//     console.log('Файл або каталог успішно перейменовано або переміщено');
//   } catch (error) {
//     console.log('Помилка перейменування або переміщення:', error);
//   }
// };

// renameFolder();

// const deleteFile = async () => {
//   try {
//     await fs.unlink('src/d.txt');
//     console.log('Файл успішно видалено');
//   } catch (error) {
//     console.log('Помилка видалення файлу:', error);
//   }
// };

// deleteFile();

// const readDir = async () => {
//   try {
//     const files = await fs.readdir('.');
//     console.log('Список файлів і каталогів:', files);
//   } catch (error) {
//     console.log('Помилка отримання списку файлів і каталогів:', error);
//   }
// };

// readDir();

const accesPath = async () => {
  const path = 'src/hello.txt';
  try {
    await fs.access(path);
    console.log(`Файл або каталог '${path}' доступний.`);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log(`Файл або каталог '${path}' не існує`);
    }
    console.log(
      `Помилка перевірки доступності файлу або каталогу '${path}':`,
      error,
    );
  }
};

accesPath();
