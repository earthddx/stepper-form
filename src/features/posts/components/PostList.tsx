import { useQuery } from "@tanstack/react-query";
import { api } from "../api";
import PostItem from "./PostItem";

function PostList() {
  const {
    data: posts = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: api.getPosts,
    staleTime: 0,
  });

  return (
    <div className="bg-card border border-border rounded-lg p-5 flex flex-col max-h-130">
      <h2 className="text-sm font-semibold text-foreground">
        Posts{" "}
        <span className="font-normal text-muted-foreground">(useQuery)</span>
        {isLoading && (
          <span className="ml-2 text-xs text-muted-foreground animate-pulse">
            fetching...
          </span>
        )}
      </h2>

      {isError && (
        <p className="text-xs text-destructive">Failed to load posts.</p>
      )}

      {!isLoading && posts.length === 0 && (
        <p className="text-sm text-muted-foreground">No posts yet. Add one →</p>
      )}

      <ul className="space-y-2 overflow-y-auto flex-1 mt-3">
        {posts.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </ul>
    </div>
  );
}

export default PostList;
