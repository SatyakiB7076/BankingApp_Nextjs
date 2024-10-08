'use client';
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = ({user}:SiderbarProps) => {
    const pathName=usePathname();
  return (
    <section className='sidebar'>
      <nav className="flex flex-col gap-4">
        <Link href={"/"} className='mb-12 cursor-pointer items-center gap-2 flex'>
        <Image src='/icons/logo.svg' width={34} height={34} alt='Infinity logo' className='size-[24px] max-xl:size-14'/>
        <h1 className='sidebar-logo'>Infinity</h1>
        </Link>
        {sidebarLinks.map((item)=>{
            const isActive =pathName===item.route || pathName.startsWith(`${item.route}/`)
            return (
                <Link key={item.label} href={item.route} className={cn('sidebar-link',{'bg-bank-gradient' :isActive})} >
                    <div className="relative size-6">
                        {/* using same gradient image icon and changing css to fit for active class */}
                        <Image src={item.imgURL} alt={item.label} fill className={cn({'brightness-[3] invert-0:isA':isActive})}/>
                    </div>
                    {/* normally sidebar-label but if is active then text-white */}
                    <p className={cn('sidebar-label',{'!text-white':isActive})}>{item.label}</p>
                    </Link>
            )}
        )}
        USER
      </nav>
      FOOTER
    </section>
  )
}

export default Sidebar
Sidebar