"use client";

import { ytCardDetails } from '@/constants/socialLinks'
import React, { useEffect } from 'react'
import ProjectItem from './ProjectItem'
import { cn } from '@/lib/utils'

export default function Project() {

  return (
    <div className='my-[10px] md:my-[50px] w-auto flex flex-col justify-center items-center'>
        {ytCardDetails.map(({id, title, desc}, idx) => (
            <ProjectItem 
                key={idx} 
                vidId={id} 
                title={title} 
                desc={desc} 
                className={cn("flex flex-col justify-evenly w-full my-[10px] md:my-[50px]", idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row")}
            />
        ))}
    </div>
  )
}
