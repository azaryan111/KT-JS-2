/**
 * @param {string} word - Исходное слово
 * @param {string} ignoredCharacted - Игнорируемый символ
 * @returns {string} Новая строка без указанного символа
 * @description Формирование новой строки без указанного символа
 */
export function processWord(word, ignoredCharacted) {
  let result = "";

  if (!/^[а-яА-Яa-zA-Z]*$/.test(word)) {
    throw new Error("Слово содержит небуквенные символы");
  }

  if (word === null) {
    throw new Error("Некорректное слово");
  }

  if (ignoredCharacted === null) {
    throw new Error("Не указан игнорируемый символ");
  }

  // TODO

  if (!word.includes(ignoredCharacted)) {
    return word;
  }

  // TODO
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === ignoredCharacted.toUpperCase()) {
      continue;
    }
    result += word[i];
  }

  return result;
}
