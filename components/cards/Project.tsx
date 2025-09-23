import { ytCardDetails } from '@/constants/socialLinks'
import React from 'react'
import ProjectItem from './ProjectItem'

export default function Project() {
  return (
    <div className='mt-[50px] w-auto flex justify-center'>
        {ytCardDetails.map(({id, title, desc}) => (
            <ProjectItem 
                key={id} 
                vidId={id} 
                title={title} 
                desc={desc} 
            />
        ))}
    </div>
  )
}
