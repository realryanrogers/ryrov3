import matter from 'gray-matter';
import { NoteMetaData } from '@/components/NoteMetaData';

import fs from 'fs';

const getPostMetaData = (): NoteMetaData[] => {
    const folder = "src/notes/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"))
    // Get front matter

    const posts = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`${folder}${fileName}`, "utf8");
      const matterResult = matter(fileContents);
      console.log(matterResult.data["Type"]);
      const firstConsumed = matterResult.data["Type"] == "Movie" ? matterResult.data["First Watched"] :  matterResult.data["FirstPlayed"]
        return {
          title: matterResult.data.Title,
          firstConsumed: firstConsumed,
          released: matterResult.data.Released,
          tags: matterResult.data.tags,
          slug: fileName.replace(".md", ""),
          type: matterResult.data.Type,
          coverURL: matterResult.data.CoverURL,
          rating: matterResult.data.Rating,
          noteSummary: matterResult.data.NoteSummary,
          director: matterResult.data.Director,
          cinematography: matterResult.data.Cinematography,
          starring: matterResult.data.Starring,
          developer: matterResult.data.Developer,
          publisher: matterResult.data.Publisher,
          platform: matterResult.data.Platform,
        }     
    })
    
    return posts;
  }

  export default getPostMetaData;