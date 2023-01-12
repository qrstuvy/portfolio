import React, { useEffect, useState } from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import sun from '../images/sun.png'
import moon from '../images/moon.png'
import layer1 from '../images/1.png'
import Sparkle from 'react-sparkle'


export default function BannerBackground ({ isNightMode }) {
  const [showIcon, setShowIcon] = useState(true)

  const handleScroll = () => {
    if (window.pageYOffset >= 100) {
      setShowIcon(false)
    } else {
      setShowIcon(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


    return (
      <header>
        <ParallaxBanner className='banner'>
        {
          isNightMode ? 
            <ParallaxBannerLayer
              image={moon}
              className="moon-banner"
              translateY={[10, -100]}
              translateX={[30, 30]}
              expanded={false}
              shouldAlwaysCompleteAnimation={true}
            />
            :
            <ParallaxBannerLayer
              image={sun}
              className="sun-banner"
              translateY={[0, -100]}
              expanded={false}
              shouldAlwaysCompleteAnimation={true}
            />
        }
{
          isNightMode ? 
          ""
          :
          <ParallaxBannerLayer
          className='cloud small'
          translateX={[70, 150]}
          translateY={[50, -100]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
        />

}
          <ParallaxBannerLayer
          className='cloud medium'
          translateX={[255, 300]}
          translateY={[50, -100]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
        />
          <ParallaxBannerLayer
          className='cloud medium'
          translateX={[655, 700]}
          translateY={[150, -100]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
        />
          <ParallaxBannerLayer
          className='cloud large'
          translateX={[655, 700]}
          translateY={[20, -50]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
        />
          <ParallaxBannerLayer
          className='cloud medium'
          translateX={[75, 150]}
          translateY={[230, -100]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
        />

<Sparkle
  color={'#FFFFFF'}
  className="sparkle"
  fadeOutSpeed={0}
  newSparkleOnFadeOut={false}
  count={50}
  minSize={5}
  maxSize={8}
  flicker={true}
  flickerSpeed={'slowest'}
/>
          <ParallaxBannerLayer
          class="main-parallax"
          image={layer1}
          translateY={[2, -100]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
        />
          {
            showIcon ?
              <FontAwesomeIcon icon={faAnglesDown} className='scroll-down-icon' bounce />
              :
              null
          }
      </ParallaxBanner>
    </header>
  )
}
