import React, { useState } from 'react'
import { faqData } from '@/public/data/accordion/data'

function Accordion() {

    const[accordion, setAccordion] = useState(0)

  return (
    <div className='Accordion_wrapper'>
        {faqData?.map((item) => {
            return (
                <div onClick={() => {
                   setAccordion(accordion === item.id ? -1 : item.id) 
                }}  key={item.id}>
                    <div  className='accordion_title'>
                        <h1>{item.title}</h1>
                        {accordion === item.id ? "Close" : "Open"}
                    </div>
                    <div style={{
                        maxHeight: accordion === item.id ? "300px" : "0", 
                        padding: accordion === item.id ? "10px" : "0",
                        // borderBottom: accordion === item.id ? "2px solid white" : "0",
                       }}  className="accordion_text">
                        {item.text[0]}
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Accordion
