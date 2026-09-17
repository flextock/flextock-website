import type { Metadata } from "next";

import { QuotePageContent } from "@/components/QuotePageContent";
import { quotePage } from "@/constants";

export const metadata: Metadata = {
  title: "Request a quote — Flextock",
  description:
    quotePage.description ||
    "Request a quote or demo from Flextock. Increase sales, improve delivery, and expand across MENA.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return <QuotePageContent />;
}
