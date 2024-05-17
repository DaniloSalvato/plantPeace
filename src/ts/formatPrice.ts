export const formatPrice = (number: number) =>
  `$${number.toFixed(2)}`.padEnd(5, "0")
