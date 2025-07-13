import { saveToMongo } from "@/lib/saveToMongo";
import { NextResponse } from "next/server";
import axios from "axios";
import * as cheerio from "cheerio";

export async function POST(req: Request) {
  const { url } = await req.json();

  try {
    console.log("🔍 Fetching URL:", url);

    // Make the request
    const response = await axios.get(url);

    // Check for non-HTML content type
    const contentType = response.headers["content-type"];
    if (!contentType || !contentType.includes("text/html")) {
      throw new Error("URL does not return HTML content.");
    }

    // Load HTML and extract paragraphs
    const html = response.data;
    const $ = cheerio.load(html);
    const paragraphs = $("p").map((_, el) => $(el).text()).get();

    if (paragraphs.length === 0) {
      throw new Error("No readable content found on the page.");
    }

    const text = paragraphs.join("\n\n").slice(0, 3000);

    // Save to Mongo
    await saveToMongo(text);

    return NextResponse.json({ text }, { status: 200 });

  } catch (error: any) {
    console.error("❌ Scrape error:", error.message || error);

    // Custom user-friendly error response
    return NextResponse.json(
      {
        error:
          "❌ Failed to fetch blog content. This URL may not exist, return readable content, or block scraping.",
      },
      { status: 500 }
    );
  }
}
