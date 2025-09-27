/** @type {import('next').NextConfig} */
const nextConfig = {};


import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';

export async function getMdxSource(source) {
  return await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });
}



export default nextConfig;
