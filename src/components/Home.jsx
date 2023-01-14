export default function Home({ isNightMode }){
    return(
        <>
        <div className='banner-title'>
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