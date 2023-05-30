import './cardProject.scss';

//{ item }
function CardProject() {
   
    return (<>
<div className='wrapper-card'>
            <img src='./image/main/Latest project-houses.webp' alt="user" className='image-project' />
            <span className='front-title'>Villas</span>
            <div className='back-project'>back-project</div>
            <div className='back-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</div>
            <a href='#' className='a-card'>See project</a>
        </div>
        <div className='wrapper-card'>
            <img src='./image/main/Latest project-houses.webp' alt="user" className='image-project' />
            <span className='front-title'>Villas</span>
            <div className='back-project'>back-project</div>
            <div className='back-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</div>
            <a href='#' className='a-card'>See project</a>
        </div>
    


    
        {/* <div className='wrapper-card'>
            <img src={item.image} alt="user" className='image-card' />
            <span className='title-image'>{item.title}</span>
            <div className='title-card'>{item.title}</div>
            <div className='description-card'>{item.description}</div>
            <a href='#' className='a-card'>See project</a>
        </div> */}
    </>
    )
}

export default CardProject;