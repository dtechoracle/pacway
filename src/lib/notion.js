import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: import.meta.env.VITE_notion_token,
});

export const fetchPages = async () => {
  try {
    const response = await notion.databases.query({
      database_id: import.meta.env.VITE_notion_database_id,
      filter: {
        property: "Status",
        select: {
          equals: "Live",
        },
      },
    });
    return response.results;
  } catch (error) {
    console.error("Error fetching pages:", error);
  }
};

export const fetchBySlug = async (slug) => {
  try {
    const response = await notion.databases.query({
      database_id: import.meta.env.VITE_notion_database_id,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    });
    return response.results[0];
  } catch (error) {
    console.error("Error fetching page by slug:", error);
  }
};

export const fetchPageBlocks = async (pageId) => {
  try {
    const response = await notion.blocks.children.list({
      block_id: pageId,
    });
    return response.results;
  } catch (error) {
    console.error("Error fetching page blocks:", error);
  }
};
