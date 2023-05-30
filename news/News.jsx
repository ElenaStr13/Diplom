import './news.scss'



function News() {

    return (<>
        <span className='title'>Useful articles</span>
        <span className='all-article'>View all articles</span>
        <div className='articles'>
        <div className='article-one'>            
            <div>Discover Architecture</div>
        </div>
        <div className='article-two'>
            <span>Jule 03, 2022</span>
            <p>Discover Architecture</p>
            <div>Projects for many large domestic and foreign corporations, enterprises in many elds such</div>
            <span className='learnMore'>Learn more</span>
        </div>
        <div className='article-three'>            
            <div>Discover Architecture</div>
        </div>
        </div>
    </>
    )
}

export default News;