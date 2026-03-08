import type { Post } from "../types";

function PostItem({ post }: { post: Post }) {
  return (
    <li
      key={post.id}
      className="flex items-start justify-between gap-3 p-3 bg-muted rounded-md"
    >
      <div className="min-w-0">
        <p className="flex items-start text-sm  font-medium text-foreground truncate">
          {post.pinned && <span className="mr-1">📌</span>}
          {post.title}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
          {post.body}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">
          <span className="text-foreground/40">by</span>{" "}
          <span className="font-medium text-foreground/70">{post.author}</span>
        </p>
      </div>
      <span className="shrink-0 text-xs px-2 py-0.5 bg-background border border-border rounded-full text-muted-foreground">
        {post.category}
      </span>
    </li>
  );
}

export default PostItem;
