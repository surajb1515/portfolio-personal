import path from "path";
import fs from 'fs'
import matter from "gray-matter";



export type Post = {
  metadata: PostMetadata
  content: string
}

export type PostMetadata = {
  title?: string
  summary?: string
  image?: string
  author?: string
  publishedAt?: string
  slug: string
}



const rootDirectory = path.join(process.cwd(), 'content', 'posts')


export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })


    // for the front matter we will use another npm-package -> gray-matter

    // matter() is from gray-matter package to render front-matter
    const { data, content } = matter(fileContent)


    return { metadata: { ...data, slug }, content }
  } catch (error) {
    return null;
  }
}