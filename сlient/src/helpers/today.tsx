const today: Date = new Date(Date.now());
function formatDD(date: number) {
  return date < 10 ? "0" + date : String(date);
}
const month: string = formatDD(today.getMonth() + 1);
const date: string = formatDD(today.getDate());
export const defaultTodayDate = today.getFullYear() + "-" + month + "-" + date;
