import matter from 'gray-matter';
import { PostMetaData } from '@/components/PostMetaData';

import fs from 'fs';

const getPostMetaData = (): PostMetaData[] => {
    const folder = "src/posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"))
    // Get front matter

    const posts = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`src/posts/${fileName}`, "utf8");
      const matterResult = matter(fileContents);
        return {
          title: matterResult.data.title,
          date: matterResult.data.date,
          subtitle: matterResult.data.subtitle,
          tags: matterResult.data.tags,
          slug: fileName.replace(".md", ""),
          type: matterResult.data.type,
          category: matterResult.data.category,
          published: matterResult.data.published,
          standFirst: matterResult.data.standFirst,
        }     
    })
    
    return posts;
  }

  export default getPostMetaData;