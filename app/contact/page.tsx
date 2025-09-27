import { Spinner } from "@/components/Spinner";
import { Suspense } from "react";




const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));



export default async function ContactPage({ }) {

  // await wait(4000)





  return (
    // <Suspense fallback={<div className="font-bold text-4xl">Loadinggggggg...</div>}>
    <Suspense fallback={<Spinner />}>
      <section className='pb-24 pt-20'>
        <div className='container max-w-3xl'>
          <h2 className='title'>Let&apos;s talk about your project</h2>
          This is a contact form
        </div>
      </section>
    </Suspense>
  );
}
