import Link from "next/link";
import { ModeToggle } from "./ModeToggle";






export default function Navbar({ }) {





  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center sm:justify-between'>
        <div>
          <Link href='/' className='font-serif text-base sm:text-2xl font-bold'>
            SB
          </Link>
        </div>

        <ul className='flex ml-8 items-center gap-4 text-xs sm:text-sm font-light text-muted-foreground sm:gap-10 font-inter'>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/education'>Education</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        {/* <div className="scale-75 sm:scale-100">
          <ModeToggle />
        </div> */}
      </nav>
    </header>
  );
}


// import Link from "next/link";
// import { ModeToggle } from "./ModeToggle";

// export default function Navbar() {
//   return (
//     <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-4 backdrop-blur-sm">
//       <nav className="container mx-auto max-w-3xl px-4 flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">

//         {/* Logo */}
//         <Link href="/" className="font-serif text-base sm:text-2xl font-bold whitespace-nowrap">
//           SB
//         </Link>

//         {/* Nav links */}
//         <ul className="flex flex-wrap items-center justify-center gap-2 text-[0.65rem] sm:text-sm font-light text-muted-foreground font-inter whitespace-nowrap">
//           <li>
//             <Link href="/education" className="hover:text-foreground">Education</Link>
//           </li>
//           <li>
//             <Link href="/posts" className="hover:text-foreground">Posts</Link>
//           </li>
//           <li>
//             <Link href="/projects" className="hover:text-foreground">Projects</Link>
//           </li>
//           <li>
//             <Link href="/contact" className="hover:text-foreground">Contact</Link>
//           </li>
//         </ul>

//         {/* ModeToggle */}
//         {/* <div className="scale-75 sm:scale-100">
//           <ModeToggle />
//         </div> */}
//       </nav>
//     </header>
//   );
// }
