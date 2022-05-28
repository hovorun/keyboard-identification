export function createUserPayload(firstName: string, lastname: string, ) {
  const currentDate = new Date();
  const expirationDate = currentDate;
  expirationDate.setMonth(currentDate.getMonth() + 12);
  const user = { firstName, lastname, createdAt: formatDate(currentDate), validUntil: formatDate(expirationDate)};
  // TODO implement BE POST request

  return user;
}

export const formatDate = (date: Date) => (date.toISOString().slice(0, 10));
