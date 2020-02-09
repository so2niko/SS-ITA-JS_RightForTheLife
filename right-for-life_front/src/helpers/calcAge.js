function calcAge(ms) {
  let months = Math.ceil((Date.now() - new Date(ms)) / 2592000000);

  if (months < 12) {
    let weeks = Math.ceil(months/2);
    weeks = weeks < 4 ? weeks : 2;

    return `${months} ${formatAge('months', months)} ${weeks} ${formatAge('weeks', weeks)}`;
  }
  else {
    let years = Math.floor(months / 12);
    months = months % 12;

    return `${years} ${formatAge('years', years)} ${months} ${formatAge('months', months)}`;
  }
}

function formatAge(type, count) {
  const allTypes = {
    years: (n) => formatCounter(n, 'лет', 'год', 'года'),
    months: (n) => formatCounter(n, 'месяцев', 'месяц', 'месяца'),
    weeks: (n) => formatCounter(n, 'недель', 'неделя', 'недели'),
    days: (n) => formatCounter(n, 'дней', 'день', 'дня'),
  };

  return allTypes[type](count);

}

function formatCounter(n, first, second, third) {
  // slice is needed if n is more than 99
  n = String(n).slice(-2);

  if (n.length === 2 && n[0] === '1') {
    return first;
  }

  n = n.slice(-1);
  if (n === '1') {
    return second;
  }
  if (n === '2' || n === '3' || n === '4') {
    return third;
  }
  return first
}

export default calcAge;