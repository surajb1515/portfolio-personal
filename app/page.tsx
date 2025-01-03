import Intro from "@/components/intro";
import RecentPosts from "@/components/recent-posts";
import RecentProjects from "@/components/recent-projects";
import { MDXRemote } from "next-mdx-remote/rsc";




export default function Home() {



  return (
    <>
      <section className="pb-24 pt-40">
        <div className="container max-w-3xl">
          <Intro />


          <RecentPosts />
          <RecentProjects />
        </div>
      </section>
    </>
  );
}
