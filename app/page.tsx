import Intro from "@/components/intro";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";




export default function Home() {

  const content = `
  # This is a markdown heading
  ## This is a markdown heading
  `



  return (
    <>
      <section className="pb-24 pt-40">
        <div className="container max-w-3xl">
          <Intro />


          <MDXRemote source={content} />
        </div>
      </section>
    </>
  );
}
