const urduDictionary: Record<string, string> = {
  // Basic grammar
  this: "یہ",
  is: "ہے",
  a: "ایک",
  an: "ایک",
  the: "دی",
  of: "کا",
  in: "میں",
  and: "اور",
  for: "کے لیے",
  to: "کو",
  with: "کے ساتھ",
  that: "کہ",
  it: "یہ",
  as: "بطور",
  on: "پر",
  at: "پر",
  by: "کے ذریعے",
  from: "سے",
  about: "کے بارے میں",
  into: "میں",
  are: "ہیں",
  be: "ہونا",
  was: "تھا",
  were: "تھے",
  has: "ہے",
  have: "ہیں",

  // Blog-related
  blog: "بلاگ",
  post: "تحریر",
  article: "مضمون",
  content: "مواد",
  topic: "موضوع",
  platform: "پلیٹ فارم",
  native: "مقامی",
  modern: "جدید",
  simple: "سادہ",
  advanced: "اعلی",
  useful: "مفید",

  // Tech-related
  next: "اگلا",
  js: "جے ایس",
  javascript: "جاوا اسکرپٹ",
  react: "ری ایکٹ",
  node: "نوڈ",
  api: "اے پی آئی",
  framework: "فریم ورک",
  application: "ایپلیکیشن",
  web: "ویب",
  server: "سرور",
  client: "کلائنٹ",
  component: "اجزاء",

  // Verbs and actions
  build: "تعمیر کریں",
  create: "بنائیں",
  fetch: "حاصل کریں",
  use: "استعمال کریں",
  learn: "سیکھیں",
  implement: "عمل درآمد کریں",
  start: "شروع کریں",
  run: "چلائیں",
  write: "لکھیں",
  deploy: "شائع کریں",

  // Other common words
  how: "کیسے",
  what: "کیا",
  why: "کیوں",
  you: "آپ",
  your: "آپ کا",
  we: "ہم",
  our: "ہمارا",
  users: "صارفین",
  beginners: "نوآموز",
  step: "قدم",
  guide: "رہنمائی",
  tutorial: "سبق",
  example: "مثال",
  explanation: "وضاحت",

  // Fallbacks
  nextjs: "نیکسٹ جے ایس",
  blogpost: "بلاگ پوسٹ",
};

export function translateToUrdu(text: string): string {
  return text
    .split(" ")
    .map((word) => {
      const cleanWord = word.toLowerCase().replace(/[^a-z]/gi, "");
      return urduDictionary[cleanWord] || word;
    })
    .join(" ");
}
