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
    <div className={cn('flex gap-3 rounded overflow-hidden', className)}>
        <YouTubeEmbed videoid={vidId} height={400} width={720} />
        <div className='p-3 w-[720px] flex flex-col'>
            <p className='font-bold text-2xl'>{title}</p>
            <div className='flex-1 flex items-center'>
                <p className='text-[20px]'>{desc}</p>
            </div>
        </div>
    </div>
  )
}