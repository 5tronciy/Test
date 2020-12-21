export function deltaTimeToStringConverter(deltaTime: number[]) {
  const deltaTimeStrings: string[] = [];
  deltaTime.forEach((item, index) => {
    switch (index) {
      case 0:
        item === 1
          ? deltaTimeStrings.push(`${item} год`)
          : item > 1 && item < 5
          ? deltaTimeStrings.push(`${item} года`)
          : deltaTimeStrings.push(`${item} лет`);
        break;
      case 1:
        item === 1
          ? deltaTimeStrings.push(`${item} месяц`)
          : item > 1 && item < 5
          ? deltaTimeStrings.push(`${item} месяца`)
          : deltaTimeStrings.push(`${item} месяцев`);
        break;
      case 2:
        item === 1
          ? deltaTimeStrings.push(`${item} день`)
          : item > 1 && item < 5
          ? deltaTimeStrings.push(`${item} дня`)
          : deltaTimeStrings.push(`${item} дней`);
        break;
      case 3:
        item % 20 === 1
          ? deltaTimeStrings.push(`${item} час`)
          : (item > 1 && item < 5) || (item > 21 && item < 24)
          ? deltaTimeStrings.push(`${item} часа`)
          : deltaTimeStrings.push(`${item} часов`);
        break;
      case 4:
        item === 1 || (item > 20 && item % 10 === 1)
          ? deltaTimeStrings.push(`${item} минута`)
          : (item > 1 && item < 5) ||
            (item > 20 && item % 10 > 1 && item % 10 < 5)
          ? deltaTimeStrings.push(`${item} минуты`)
          : deltaTimeStrings.push(`${item} минут`);
        break;
      case 5:
        item === 1 || (item > 20 && item % 10 === 1)
          ? deltaTimeStrings.push(`${item} секунда`)
          : (item > 1 && item < 5) ||
            (item > 20 && item % 10 > 1 && item % 10 < 5)
          ? deltaTimeStrings.push(`${item} секунды`)
          : deltaTimeStrings.push(`${item} секунд`);
        break;
    }
  });
  var index: number = 0;
  for (index; ; ++index) {
    if (deltaTimeStrings[index][0] === "0") {
      delete deltaTimeStrings[index];
    } else break;
  }

  return deltaTimeStrings;
}
