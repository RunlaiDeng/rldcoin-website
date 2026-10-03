import { Button, PageHero } from "@/components/ui";
export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404 / Off course"
        title="Let’s find your way back."
        description="This page is outside our known orbit. Explore Rldcoin from the beginning."
      >
        <div className="hero-actions">
          <Button href="/">Back to Earth</Button>
          <Button href="/resources" secondary>
            Browse resources
          </Button>
        </div>
      </PageHero>
    </>
  );
}
