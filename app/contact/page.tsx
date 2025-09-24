import { Suspense } from "react";







export default function ContactPage({ }) {





  return (
    <Suspense fallback={<div className="font-bold text-4xl">Loadinggggggg...</div>}>
      <section className='pb-24 pt-40'>
        <div className='container max-w-3xl'>
          <h2 className='title'>Let&apos;s talk about your project</h2>
          This is a contact form
        </div>
      </section>
    </Suspense>
  );
}
