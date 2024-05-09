import { fetchMetadata } from "frames.js/next";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Slot Machine",
    other: {
      ...(await fetchMetadata(
        new URL("/frames", process.env.VERCEL_URL || "http://localhost:3000")
      )),
    },
  };
}

export default async function Home() {
  return <div>Slot Machine</div>;
}
