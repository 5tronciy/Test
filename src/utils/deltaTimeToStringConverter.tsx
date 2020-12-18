export function deltaTimeToStringConverter(deltaTime: number[]) {
  const deltaTimeStrings: string[] = [];
  deltaTime.forEach((item, index) => {
    switch (index) {
      case 0:
        if (item < 0) {
          item = -item;
        }
        item === 1
          ? deltaTimeStrings.push(`${item} год`)
          : item > 1 && item < 5
          ? deltaTimeStrings.push(`${item} года`)
          : deltaTimeStrings.push(`${item} лет`);
        break;
      case 1:
        if (item < 0) {
          item = -item;
        }
        item === 1
          ? deltaTimeStrings.push(`${item} месяц`)
          : item > 1 && item < 5
          ? deltaTimeStrings.push(`${item} месяца`)
          : deltaTimeStrings.push(`${item} месяцев`);
        break;
      case 2:
        if (item < 0) {
          item = -item;
        }
        item === 1
          ? deltaTimeStrings.push(`${item} день`)
          : item > 1 && item < 5
          ? deltaTimeStrings.push(`${item} дня`)
          : deltaTimeStrings.push(`${item} дней`);
        break;
      case 3:
        if (item < 0) {
          item += 24;
        }
        item % 20 === 1
          ? deltaTimeStrings.push(`${item} час`)
          : (item > 1 && item < 5) || (item > 21 && item < 24)
          ? deltaTimeStrings.push(`${item} часа`)
          : deltaTimeStrings.push(`${item} часов`);
        break;
      case 4:
        if (item < 0) {
          item += 60;
        }
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

  deltaTimeStrings.forEach((item: string, index: number) => {
    item[0] === "0" ? delete deltaTimeStrings[index] : console.log(item);
  });

  return deltaTimeStrings;
}
