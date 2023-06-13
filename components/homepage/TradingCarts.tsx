import Image from 'next/image'
import React from 'react'
import heroes from "../../public/images/video/heroes.png"
import { TradingBlog, tradingCartData } from '@/public/data/TopSlideData'

function TradingCarts() {
  return (
    <div>
        <div className='tradingcart_container'>

        <div className='trading_heroes'>
            <Image 
            src={heroes}
            alt='background image'
            loading="lazy"
            layout="responsive" 
            />
        </div>

            <div className='tradingcarts_text'>
                <p>Buy 50 Digital Trading Cards</p>
                <p>You are guaranteed to receive an opportunity for a CAMEO ROLE in one of the films as well as an invitation to one of the RED CARPET SCREENINGS!</p>
                <p>PLUS an in person dinner with producers, directors, writers and VFX. PLUS with the investment club, access to information, investments and funds that are not available to the general public.</p>
            </div>
        </div>

        <div className='tradingcart_icons'>
                {tradingCartData?.map((item:TradingBlog) => {
                    return (
                        <div key={item.id}>
                            <Image
                              src={item.url}
                              alt='Icon/Img'
                              width={136}
                              height={140}
                              layout='responsive'
                              loading='lazy'
                            />
                        </div>
                    )
                })}
            </div>
            </div>
  )
}

export default TradingCarts
