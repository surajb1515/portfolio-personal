import MDXContent from "@/components/mdx-content";
import { getProjectBySlug } from "@/lib/projects";
import { formatDate } from "@/lib/utils";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";




export default async function ProjectWithSlug({
  params
}: {
  params: {
    slug: string;
  }
}) {


  const { slug } = params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const { content, metadata } = project
  const { author, image, publishedAt, summary, title } = metadata


  return (
    <section className="pb-24 pt-32">
      <div className="container max-w-3xl">
        <Link
          href='/projects'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </Link>

        {image && (
          <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className="prose mt-16 dark:prose-invert">
          <MDXContent source={content} />
        </main>
      </div>

    </section>
  )
}