import authorImage from '@/public/images/authors/suraj-new.jpg'
import Image from 'next/image'


// ⬇️ Helper function to simulate server-side delay
// const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


export default function Intro() {

  // await wait(5000)


  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Suraj.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a software engineer based in India. Certified AWS Solutions Architect Associate (AWS-SAA 03).  I&#39;m
          passionate about learning new technologies and sharing knowledge with
          others.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Suraj Bhardwaj'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}