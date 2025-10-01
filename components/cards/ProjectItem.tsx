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
    <div className={cn('flex gap-10 overflow-hidden', className)}>
      <div className='rounded-2xl overflow-hidden w-auto'>
        <YouTubeEmbed videoid={vidId} height={200} width={360} />
      </div>
        <div className='p-3 flex flex-col w-[460px] text-start'>
            <p className='font-bold text-2xl'>{title}</p>
            <div className='flex-1 flex items-center'>
                <p className='text-[15px]'>{desc}</p>
            </div>
        </div>
    </div>
  )
}