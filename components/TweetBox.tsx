import React, { useState } from 'react'
import Image from 'next/image'
import { CalendarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon, SearchCircleIcon } from '@heroicons/react/outline'

function TweetBox() {

    const [input, setInput] = useState('');

  return (
    <div className='flex space-x-2 p-5'>
        <img src="https://avatars.githubusercontent.com/u/23063029?v=4" className='w-14 h-14 rounded-full object-cover mt-4' />
    
        <div className='flex flex-1 items-center pl-2'>
            <form className='flex flex-1 flex-col'>
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="What's Happening?" className='outline-none h-24 w-full text-xl placeholder:text-xl' />
                <div className='flex items-center'>
                    <div className='flex space-x-2 flex-1 text-twitter'>
                        <PhotographIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
                        <SearchCircleIcon className='h-5 w-5' />
                        <EmojiHappyIcon className='h-5 w-5' />
                        <CalendarIcon className='h-5 w-5' />
                        <LocationMarkerIcon className='h-5 w-5' />
                    </div>

                    <button disabled={!input} className='bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40'>Tweet</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TweetBox