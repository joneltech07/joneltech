import { icons } from '@/constants/techMaps'
import Image from 'next/image'
import React from 'react'

export default function TechLogo() {
  return (
    <div className="flex flex-wrap gap-10 item-center justify-center mt-[50px]">
      {icons.map((item, idx) => (
        <Image
          key={idx}
          src={`/images/${item}`}
          alt="images"
          width={50}
          height={50}
          className="object-contain"
        />
      ))}
    </div>
  )
}