import axios from "axios";
import * as cheerio from "cheerio";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { url } = await req.json();

  try {
    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);
    const paragraphs: string[] = [];

    $("p").each((_, el) => {
      paragraphs.push($(el).text());
    });

    const text = paragraphs.join("\n\n").slice(0, 2000);
    return NextResponse.json({ success: true, text });
  } catch (error) {
    console.error("Scrape error:", error);
    return NextResponse.json({ success: false, error: "Failed to scrape" }, { status: 500 });
  }
}
