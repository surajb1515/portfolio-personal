import Projects from '@/components/projects'
import { Spinner } from "@/components/Spinner"
import { getProjects } from '@/lib/projects'
import { Suspense } from "react"






export default async function ProjectsPage() {


  const projects = await getProjects()

  return (
    <Suspense fallback={<Spinner />}>
      <section className='pb-24 pt-20'>
        <div className='container max-w-3xl'>
          <h1 className='title mb-12'>Projects</h1>

          <Projects projects={projects} />
        </div>
      </section>
    </Suspense>
  )
}