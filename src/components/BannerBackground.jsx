import React, { useEffect, useState } from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import sun from '../images/sun.png'
import moon from '../images/moon.png'
import layer1 from '../images/1.png'
import layer3 from '../images/3.png'
import Sparkle from 'react-sparkle'
import Home from './Home'


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
        <Home isNightMode={isNightMode}/>
        <ParallaxBanner className='banner'>
        {
          isNightMode ? 
            <ParallaxBannerLayer
              image={moon}
              className="moon-banner"
              translateY={[30, 300]}
              translateX={[10, 10]}
              expanded={false}
              shouldAlwaysCompleteAnimation={true}
            />
            :
            <ParallaxBannerLayer
              image={sun}
              className="sun-banner"
              translateY={[0, 330]}
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
          translateY={[50, 50]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
        />

}
          <ParallaxBannerLayer
          className='cloud medium'
          translateX={[255, 335]}
          translateY={[50, 50]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
        />
          <ParallaxBannerLayer
          className='cloud medium'
          translateX={[655, 735]}
          translateY={[150, 150]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
        />
          <ParallaxBannerLayer
          className='cloud large'
          translateX={[600, 680]}
          translateY={[20, 20]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
        />
          <ParallaxBannerLayer
          className='cloud medium mobile-hide'
          translateX={[75, 155]}
          translateY={[230, 230]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
        />

<Sparkle
  color={'#FFFFFF'}
  className="sparkle"
  fadeOutSpeed={0}
  newSparkleOnFadeOut={false}
  count={100}
  minSize={5}
  maxSize={8}
  flicker={true}
  flickerSpeed={'slowest'}
/>
          <ParallaxBannerLayer
          className="main-parallax"
          image={layer1}
          translateY={[2, -15]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
        />

<ParallaxBannerLayer
          image={layer3}
          translateY={[100, 85]}
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
