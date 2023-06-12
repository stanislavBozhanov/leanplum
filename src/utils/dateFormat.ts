const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const dateFormat = (dateMs: number) => {
  const date = new Date(dateMs);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();

  const time = date.toLocaleTimeString('en-US', { timeStyle: 'short', hour12: true });

  return `${month} ${day}, ${year}, ${time}`;
};
