import type { Metadata } from "next";
import { ArticleContent } from "@/components/article/article-content";

export const metadata: Metadata = {
  title: "Article",
  description: "Sybil yield distortion in incentive design - Working paper RP-013 by the Economic Systems Group.",
};

export default function ArticlePage() {
  return <ArticleContent />;
}
