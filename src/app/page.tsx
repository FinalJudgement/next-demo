import Hero from "@/components/Hero";
import Bounded from "@/lib/Bounded";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      
      <Bounded className="content-section bg-slate-100 dark:bg-slate-900">
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <h2>About Me</h2>
          <p>
            This is where you can add more content that users can scroll to.
            The Hero section will remain at the top, and users can scroll down
            to see more information.
          </p>
          <p>
            You can add as many sections as you need, and each can have its own
            animations triggered by scrolling.
          </p>
        </div>
      </Bounded>
      
      <Bounded className="content-section bg-slate-200 dark:bg-slate-800">
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <h2>Projects</h2>
          <p>
            This is another section that demonstrates the scrollable layout.
            You can add more sections like this as needed.
          </p>
        </div>
      </Bounded>
    </main>
  );
}
