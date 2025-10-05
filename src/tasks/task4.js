export function isPalindrome(word) {
  if (word === null) {
    throw new Error("Пользователь отменил ввод");
  }
  if (typeof word !== "string") {
    throw new Error("Некорректные входные данные");
  }
  const trimword = word.trim();
  if (trimword.includes(" ")) {
    throw new Error("Введено несколько слов");
  }

  if (!/^[a-zA-Zа-яА-ЯёЁ]+$/.test(trimword)) {
    throw new Error("Некорректные входные данные");
  }
  let result = "";
  if (word.length === 1) {
    return word + " - не палиндром";
  }

  const lowered = word.toLowerCase();
  const length = lowered.length;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (lowered[i] !== lowered[length - 1 - i]) {
      return (result = word + " - не палиндром");
    }
  }

  return (result = word + " - палиндром");
}
