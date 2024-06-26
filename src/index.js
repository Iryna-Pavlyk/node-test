// -----Lesson 1-----
// import path from 'node:path';
// import fs from 'node:fs/promises';
// -----Lesson 1-----
// -----Lesson 2-----
// import express from 'express';
// import pino from 'pino-http';
// import cors from 'cors';
import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './server.js';
// -----Lesson 2-----

// -----Lesson 1-----
// const message = 'Hello world!';

// const workDir = path.join(process.cwd());
// const joinSomePath = path.join(workDir, 'folder', 'text.txt');
// const parseSomePath = path.parse(
//   'D:Робочий стілІраНавчання\node-test\folder\text.txt',
// );
// console.log(message);
// console.log(joinSomePath);
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

// const accesPath = async () => {
//   const path = 'src/hello.txt';
//   try {
//     await fs.access(path);
//     console.log(`Файл або каталог '${path}' доступний.`);
//   } catch (error) {
//     if (error.code === 'ENOENT') {
//       console.log(`Файл або каталог '${path}' не існує`);
//     }
//     console.log(
//       `Помилка перевірки доступності файлу або каталогу '${path}':`,
//       error,
//     );
//   }
// };

// accesPath();
// -------Lesson 1-------------

// -------Lesson 2-------------
// const app = express();

// const PORT = 3000;

// app.use(cors());

// app.use(
//   pino({
//     transport: {},
//     target: 'pino-pretty',
//   }),
// );

// app.use((req, res, next) => {
//   console.log(`Time: ${new Date().toLocaleString()}`);
//   next();
// });

// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello world!',
//   });
// });

// app.use('*', (req, res, next) => {
//   res.status(404).json({
//     message: 'Route not found',
//   });
// });

// app.use((err, req, res, next) => {
//   res.status(500).json({
//     message: 'Smth went wrong',
//     error: err.message,
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const bootstrap = async () => {
  await initMongoDB;
  startServer();
};

bootstrap();

// -------Lesson 2-------------
