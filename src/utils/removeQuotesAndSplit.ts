export function removeQuotesAndSplit(text: string) {
  const cleanedText = text.replace(/"/g, "").replace(/\n/g, "");
  return cleanedText.split(", ");
}
