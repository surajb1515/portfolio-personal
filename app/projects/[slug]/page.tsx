





type ProjectPropsSlug = {
  params: {
    slug: string
  }
}



export default function ProjectPageWithSlug({ params }: ProjectPropsSlug) {

  const { slug } = params




  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Project Slug: {slug}</h1>


      </div>
    </section>
  );
}
