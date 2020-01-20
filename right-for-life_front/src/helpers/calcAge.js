function calcAge(ms) {
  let months = Math.ceil((Date.now() - new Date(ms)) / 2592000000);

  if (months < 12) {
    return `${months} месяцев`;
  }
  else {
    let years = Math.floor(months / 12);
    months = months % 12;

    return `${years} лет ${months} месяцев`;
  }
}

export default calcAge;