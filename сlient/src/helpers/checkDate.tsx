export function checkDate(dateOfBorn: string) {
  if (dateOfBorn.includes("-")) {
    return (
      dateOfBorn.slice(5, 7) +
      "." +
      dateOfBorn.slice(8, 10) +
      "." +
      dateOfBorn.slice(0, 4)
    );
  } else {
    return (
      dateOfBorn.slice(6, 10) +
      "-" +
      dateOfBorn.slice(0, 2) +
      "-" +
      dateOfBorn.slice(3, 5)
    );
  }
}
