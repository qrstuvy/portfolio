// import Sparkle from 'react-sparkle'

export default function Home({ isNightMode }){
    return(
        <>
        <div className='banner-title'>
        {/* <Sparkle
  color={'#FFFFFF'}
  className="sparkle"
  fadeOutSpeed={0}
  newSparkleOnFadeOut={false}
  count={50}
  minSize={5}
  maxSize={8}
  flicker={true}
  flickerSpeed={'slowest'}
/> */}
        <h1 className=
        {
        isNightMode ? 
        "banner-h1-darkmode"
        :
        "banner-h1"
        }>
        Vy Nguyen</h1>
        <h2 className='banner-h2'>Full-Stack Developer</h2>
        <h3 className="banner-h3">"Dream higher than the <span className="sky">sky</span> and deeper than the <span className="ocean">ocean</span>."</h3>
        </div>
        </>
    )
}