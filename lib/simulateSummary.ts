// lib/simulateSummary.ts

export function simulateSummary(text: string): string {
  // Take the first 2–3 sentences as a basic summary
  const sentences = text
    .replace(/\n/g, " ") // remove newlines
    .split(/(?<=[.?!])\s+/); // split on punctuation
  
  const summary = sentences.slice(0, 2).join(" ");
  return `This is a blog about ${summary}`;
}
