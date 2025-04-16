import { expect } from 'chai';
import { readFile } from 'fs/promises';
import vm from 'vm';
import path from 'path';
import { fileURLToPath } from 'url';

// Получаем абсолютный путь до .js файла
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../src/utils/studentKnowledgeCheckerUtil.js');

// Читаем файл как текст
const code = await readFile(filePath, 'utf8');

// Создаём песочницу и исполняем код
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

// Достаём функцию по имени
const checkStudentKnowledge = sandbox.checkStudentKnowledge;

describe('checkStudentKnowledge', () => {
  it('should return true if all answers are correct', () => {
    const student = { q1: 'a', q2: 'b' };
    const correct = { q1: 'a', q2: 'b' };
    expect(checkStudentKnowledge(student, correct)).to.be.true;
  });

  it('should return false if answers are incorrect', () => {
    const student = { q1: 'a', q2: 'x' };
    const correct = { q1: 'a', q2: 'b' };
    expect(checkStudentKnowledge(student, correct)).to.be.false;
  });

  it('should return false if keys are different', () => {
    const student = { q1: 'a', q3: 'b' };
    const correct = { q1: 'a', q2: 'b' };
    expect(checkStudentKnowledge(student, correct)).to.be.false;
  });
});



