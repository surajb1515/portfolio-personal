// import Counter from '@/components/counter'
// import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
// import { JSX } from 'react'
// import { highlight } from 'sugar-high'


// function Code({ children, ...props }: any) {
//   let codeHTML = highlight(children)
//   return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
// }


// const components = {
//   code: Code,
//   Counter
// }


// export default function MDXContent(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
//   return (
//     <MDXRemote
//       {...props}
//       components={{ ...components, ...(props.components || {}) }}
//     />
//   )
// }

import Counter from '@/components/counter'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import { JSX } from 'react'
import { highlight } from 'sugar-high'

function Code({ children, ...props }: any) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components = {
  code: Code,
  Counter,
  table: (props: any) => (
    <table {...props} className="table-auto w-full border border-gray-300">
      {props.children}
    </table>
  ),
  th: (props: any) => (
    <th {...props} className="border px-4 py-2 bg-gray-100 text-left" />
  ),
  td: (props: any) => (
    <td {...props} className="border px-4 py-2" />
  ),
}

export default function MDXContent(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
