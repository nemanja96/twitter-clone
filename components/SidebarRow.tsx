import React, { SVGProps } from 'react'

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
}

function SidebarRow({Icon, title}: Props) {
  return (
    <div className='flex items-center max-w-fit space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer transition-all duration-200 group'>
        <Icon className='w-6 h-6' />
        <p className='hidden md:inline-flex group-hover:text-twitter font-medium text-base lg:text-xl'>{title}</p>
    </div>
  )
}

export default SidebarRow