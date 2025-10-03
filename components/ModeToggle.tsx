'use client'
import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import ThemeToggleButton from "./ui/theme-toggle-button"




export function ModeToggle() {


  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)


  // What is this for ????
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <div className="fixed bottom-5 right-5"> <ThemeToggleButton /></div>

      {/* <Button
        className="fixed bottom-5 right-5 bg-[#f5f4f3]"
        size='sm'
        variant='ghost'
        onClick={() => {
          setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
        }}
      >
        {resolvedTheme === 'dark' ? (
          <SunIcon className='size-4 text-orange-300 ' />
        ) : (
          <MoonIcon className='size-4 text-sky-950 ' />
        )}

        <span className='sr-only'>Toggle theme</span>
      </Button> */}
    </>
  )
}