"use client";

import BlogForm from "@/components/BlogForm.tsx";
import axios from "axios";
import * as cheerio from "cheerio";
import { useState } from "react";

export default function Home() {
  const [blogText, setBlogText] = useState("");

const handleBlogSubmit = async (url: string) => {
  try {
    const res = await fetch("/api/scrape", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }), // correct: send url to your API
    });

    const data = await res.json();

    if (data.success) {
      setBlogText(data.text);
    } else {
      setBlogText("❌ Failed to fetch blog content.");
    }
  } catch (error) {
    console.error("Fetch failed:", error);
    setBlogText("❌ Fetch error.");
  }
};


  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl w-full border border-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">📰 Blog Summariser</h1>
        <BlogForm onSubmit={handleBlogSubmit} />
        {blogText && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">📄 Extracted Blog Text</h2>
            <div className="p-4 bg-gray-50 rounded max-h-96 overflow-auto whitespace-pre-wrap text-sm">
              {blogText}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
