/* eslint-disable no-unused-vars */
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useNavigate } from 'react-router-dom'


const LandingPage = () => {
  const [longUrl, setLongUrl] = useState()
  const navigate = useNavigate()
  const handleShorten = (e) => {
    e.preventDefault()
    if (longUrl) {
      navigate(`/auth?createNew=${longUrl}`)
    }
  }
  return (
    <div className='flex flex-col items-center'>
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">

        the only URL Shortener YOu ever nEEd
      </h2>
      <form className='sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2' onSubmit={handleShorten}>
        <Input type="url " value={longUrl} onChange={(e) => setLongUrl(e.target.value)} placeholder="Enter URL" className="h-full flex-1 py-4 px-4 text-black" />
        <Button className="h-full " variant="destructive" type="submit" >Shorten!</Button>
      </form>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnGWEwXpRS7z7rVaGrjIWWTdE8_TiYTGiYjA&s" alt="" className='w-full my-11 md:px-11' />
      <Accordion type="multiple" collapsible className='w-full md:px-11'>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  )
}

export default LandingPage
