"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function BlogForm({ onSubmit }: { onSubmit: (url: string) => void }) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    onSubmit(url.trim());
    setUrl("");
  };

  return (
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
  );
}
