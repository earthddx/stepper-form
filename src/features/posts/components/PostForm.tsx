import type { Post, PostFormData } from "../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CATEGORIES, postSchema } from "../schema";
import { cn } from "@/lib/utils";

const inputCls =
  "w-full px-3 py-2 text-sm border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

function PostForm() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: api.createPost,
    onSuccess: (newPost) => {
      queryClient.setQueryData<Post[]>(["posts"], (old = []) => [
        ...old,
        newPost,
      ]);
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: { title: "", body: "", category: undefined, author: "", pinned: false },
  });

  const onSubmit = (data: PostFormData) => {
    mutate(data, {
      onSuccess: () => reset(),
    });
  };

  return (
    <div className="bg-card border border-border rounded-lg p-5 space-y-4">
      <h2 className="text-sm font-semibold text-foreground">
        New Post{" "}
        <span className="font-normal text-muted-foreground">
          (RHF + Zod + useMutation)
        </span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
        {/* Title */}
        <div className="space-y-1">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-foreground"
          >
            Title
          </label>
          <input
            id="title"
            placeholder="My awesome post"
            className={cn(inputCls, errors.title && "border-destructive")}
            {...register("title")}
          />
          {errors.title && (
            <p className="text-xs text-destructive">{errors.title.message}</p>
          )}
        </div>

        {/* Body */}
        <div className="space-y-1">
          <label
            htmlFor="body"
            className="block text-sm font-medium text-foreground"
          >
            Body
          </label>
          <textarea
            id="body"
            rows={3}
            placeholder="Write something interesting..."
            className={cn(inputCls, errors.body && "border-destructive")}
            {...register("body")}
          />
          {errors.body && (
            <p className="text-xs text-destructive">{errors.body.message}</p>
          )}
        </div>

        {/* Category — z.enum() */}
        <div className="space-y-1">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-foreground"
          >
            Category
          </label>
          <select
            id="category"
            className={cn(inputCls, errors.category && "border-destructive")}
            {...register("category")}
          >
            <option value="">Select one...</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-xs text-destructive">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Pinned — z.boolean() */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 accent-primary"
            {...register("pinned")}
          />
          <span className="text-sm text-foreground">Pin this post</span>
        </label>

        {/* Author */}
        <div className="space-y-1">
          <label
            htmlFor="author"
            className="block text-sm font-medium text-foreground"
          >
            Author
          </label>
          <input
            id="author"
            placeholder="John Doe"
            className={cn(inputCls, errors.author && "border-destructive")}
            {...register("author")}
          />
          {errors.author && (
            <p className="text-xs text-destructive">{errors.author.message}</p>
          )}
        </div>


        <button
          type="submit"
          disabled={isSubmitting || isPending}
          className="w-full py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:opacity-90 disabled:opacity-50 transition-opacity"
        >
          {isPending ? "Saving..." : "Add Post"}
        </button>
      </form>
    </div>
  );
}

export default PostForm;
