import Header from "@/features/posts/components/Header";
import PostForm from "@/features/posts/components/PostForm";
import PostList from "@/features/posts/components/PostList";
import CheatSheet from "@/features/posts/components/CheatSheet";

function Playground() {
  return (
    <div className="min-h-screen bg-background p-6 flex flex-col">
      <div className="max-w-4xl mx-auto space-y-6 flex flex-col flex-1 w-full">
        {/* Header */}
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT: FORM (RHF + Zod + useMutation) */}
          <PostForm />
          {/* RIGHT: LIST (TanStack Query) */}
          <PostList />
        </div>
        {/* Cheat-sheet */}
        <div className="mt-auto">
          <CheatSheet />
        </div>
      </div>
    </div>
  );
}

export default Playground;
