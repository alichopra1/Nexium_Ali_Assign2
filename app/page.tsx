"use client";

import BlogForm from "@/components/BlogForm.tsx";

export default function Home() {
  const handleBlogSubmit = (url: string) => {
    console.log("Submitted blog URL:", url);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl w-full border border-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">📰 Blog Summariser</h1>
        <p className="text-gray-600 text-center mb-6">
          Enter a blog URL below and get a summary with Urdu translation.
        </p>
        <BlogForm onSubmit={handleBlogSubmit} />
      </div>
    </main>
  );
}
