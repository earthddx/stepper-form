import CTA from "@/features/home/components/CTA";
import Hero from "@/features/home/components/Hero";
import StackCards from "@/features/home/components/StackCards";
import Steps from "@/features/home/components/Steps";
import Submissions from "@/features/home/components/Submissions";
import Why from "@/features/home/components/Why";

function Home() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-5xl mx-auto flex gap-10 items-start">
        {/* Main content */}
        <div className="flex-1 flex flex-col space-y-10">
          <Hero />
          <Why />
          <Steps />
          <StackCards />
          <CTA />
        </div>

        {/* Sidebar */}
        <aside className="w-80 shrink-0 sticky top-6 pt-10">
          <Submissions />
        </aside>
      </div>
    </div>
  );
}

export default Home;
