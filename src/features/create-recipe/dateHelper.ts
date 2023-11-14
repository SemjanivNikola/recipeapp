const LOCAL_DATE_STRING = "hr-HR";
/**
 * Store format: YYYY-MM-DD
 */
export function formatDateForStore(date: Date) {
  return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();
}

/**
 * Display format: DD.MM.YYYY
 */
export function formatDateForDisplay(date: Date) {
  return date.toLocaleDateString(LOCAL_DATE_STRING);
}
