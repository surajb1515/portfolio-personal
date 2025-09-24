import Intro from "@/components/intro";
import RecentPosts from "@/components/recent-posts";
import RecentProjects from "@/components/recent-projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Suspense } from "react";
import loading from "./loading";
import LoadingChat from "./loading";
import Education from "./education/page";
import ContactPage from "./contact/page";
import EducationComponent from "@/components/Education-Component";


const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


export default async function Home() {

  // await wait(4000)


  return (
    <Suspense fallback={<LoadingChat />}>
      <section className="pb-24 pt-40 container max-w-3xl">
        <div className=" max-w-3xl">
          <Intro />
          {/* <ContactPage /> */}
          <EducationComponent />
          <RecentProjects />
          <RecentPosts />
        </div>
      </section>
    </Suspense>
  );
}
