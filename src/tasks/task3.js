/**
 * @param {string} height - Высота лесенки
 * @returns {string} Строка с отображением лесенки
 * @description Формирование строки с лесенкой заданной длины
 */
export function renderLadder(height) {
  const heg = Number(height);

  if (height === null) {
    throw new Error("Пользователь отменил ввод");
  }

  if (isNaN(height)) {
    throw new Error("Некорректные входные данные");
  }

  if (heg < 0) {
    throw new Error("Некорректные входные данные");
  }

  if (heg === 0) {
    return "";
  }

  if (heg !== Math.round(heg)) {
    throw new Error("Некорректные входные данные");
  }

  if (heg === 1) {
    return "1";
  }

  let result = "";

  for (let i = 1; i <= heg; i++) {
    for (let j = 1; j <= i; j++) {
      result += j;
    }
    result += "\n";
  }
  let n = 0;
  let m = "";

  while (n < result.length - 1) {
    m += result[n];
    n++;
  }

  result = m;

  return result;
}
