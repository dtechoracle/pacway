import React from "react";
import { fetchBySlug, fetchPageBlocks, notion } from "../lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";

export default async function BlogView({ params }) {
  const post = await fetchBySlug(params.slug);
  if (!post) {
    return <div>Post not found</div>;
  }

  const blocks = await fetchPageBlocks(post.id);
  if (!blocks || blocks.length === 0) {
    return <div>Content not found</div>;
  }

  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const html = await renderer.render(blocks as any); // Cast blocks to any to bypass the type error

  return (
    <div className="prose" dangerouslySetInnerHTML={{ __html: html }}></div>
  );
}
