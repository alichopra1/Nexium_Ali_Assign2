"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import SummaryCard from "./SummaryCard.tsx";

export default function BlogForm() {
  const [url, setUrl] = useState("");
  const [blogText, setBlogText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    try {
      setError("");
      setBlogText("");

      const response = await fetch("/api/scrape", {
        method: "POST",
        body: JSON.stringify({ url }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error("Failed to fetch blog content");

      const data = await response.json();
      setBlogText(data.text);
    } catch (err) {
      setError("❌ Failed to fetch blog content.");
    }

    setUrl("");
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="url" className="text-lg text-gray-700">
            Blog URL:
          </Label>
          <Input
            id="url"
            placeholder="https://example.com/blog-post"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="bg-blue-50 focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <Button
          type="submit"
          disabled={!url.trim()}
          className="w-full"
        >
          🔍 Summarise Blog
        </Button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      {blogText && (
        <>
          <div className="mt-6 p-4 bg-gray-100 rounded-xl">
            <h2 className="text-lg font-bold mb-2">📄 Extracted Blog Text</h2>
            <p className="text-gray-700 whitespace-pre-line">{blogText}</p>
          </div>

          <SummaryCard text={blogText} />
        </>
      )}
    </div>
  );
}
