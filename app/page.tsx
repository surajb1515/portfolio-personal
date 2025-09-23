import Intro from "@/components/intro";
import RecentPosts from "@/components/recent-posts";
import RecentProjects from "@/components/recent-projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Suspense } from "react";
import loading from "./loading";
import LoadingChat from "./loading";


const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


export default async function Home() {

  // await wait(4000)


  return (
    <Suspense fallback={<LoadingChat />}>
      <section className="pb-24 pt-40">
        <div className="container max-w-3xl">
          <Intro />


          <RecentProjects />
          <RecentPosts />
        </div>
      </section>
    </Suspense>
  );
}
