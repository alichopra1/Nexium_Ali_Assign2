import { saveToMongo } from "@/lib/saveToMongo";
import { NextResponse } from "next/server";
import axios from "axios";
import * as cheerio from "cheerio";

export async function POST(req: Request) {
  const { url } = await req.json();

  try {
    console.log("Fetching URL:", url);
    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);
    const paragraphs = $("p").map((_, el) => $(el).text()).get();
    const text = paragraphs.join("\n\n").slice(0, 3000);

    //Simulate saving full blog content to MongoDB
    saveToMongo(text);

    return NextResponse.json({ text }, { status: 200 });

  } catch (error) {
    console.error("Scrape error:", error);
    return NextResponse.json(
      { error: "❌ Failed to fetch blog content. Please check the URL." },
      { status: 500 }
    );
  }
}
