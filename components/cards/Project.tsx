import { ytCardDetails } from '@/constants/socialLinks'
import React from 'react'
import ProjectItem from './ProjectItem'
import { cn } from '@/lib/utils'

export default function Project() {
  return (
    <div className='mt-[50px] mb-[50px] w-auto flex flex-col gap-5 justify-center items-center'>
        {ytCardDetails.map(({id, title, desc}, idx) => (
            <ProjectItem 
                key={idx} 
                vidId={id} 
                title={title} 
                desc={desc} 
                className={cn(idx % 2 === 0 ? "flex-row-reverse" : "flex-row")}
            />
        ))}
    </div>
  )
}
