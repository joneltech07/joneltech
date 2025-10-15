import { cn } from '@/lib/utils';
import { YouTubeEmbed } from '@next/third-parties/google'
import React from 'react'

interface ProjectItemProps {
    vidId: string;
    title: string;
    desc: string;
    className?: string;
}

export default function ProjectItem({ vidId, title, desc, className=""}: ProjectItemProps) {
  return (
    <div className={cn('overflow-hidden', className)}>
      <div className='hidden md:block w-full md:w-[360px] overflow-hidden rounded-none md:rounded-2xl'>
        <YouTubeEmbed videoid={vidId} height={200} width={360} />
      </div>
      <div className='p-3 md:w-[500px] flex flex-col gap-3 text-start'>
        <p className='font-bold text-1xl'>{title}</p>
        <div className='flex-1 flex'>
          <p className='text-xs'>{desc}</p>
        </div>
      </div>
    </div>
  )
}