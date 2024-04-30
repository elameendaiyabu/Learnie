import { HoverEffect } from "@/components/ui/card-hover-effect"

export default function RecommendationCard({ generatedText }: { generatedText: any }) {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={generatedText} />
    </div>
  )
}
