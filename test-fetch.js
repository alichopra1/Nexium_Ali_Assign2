import axios from "axios";

const url = "https://dev.to/ruppysuppy/a-guide-to-the-fetch-api-4co"; // You can change this

try {
  const res = await axios.get(url);
  console.log("✅ HTML fetched:");
  console.log(res.data.slice(0, 500)); // Just print first 500 chars
} catch (err) {
  console.error("❌ Failed to fetch:", err.message);
}
