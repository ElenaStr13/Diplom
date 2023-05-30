import './latestProjects.scss';
//import CardProject from '../cardProject/CardProject';
//import axios from 'axios';
//import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Scrollbar } from 'swiper';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';

function LatestProjects() {
  //   const [data, setData] = useState([]);
  const [t] = useTranslation(["translation"]);

  //   useEffect (() =>{
  //     axios.get('./latestProject.json')
  //     .then(function (response) {
  //       console.log(response);
  //       setData(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  //     .finally(function () {
  //     });
  //   },[]);  


  return (<>
    <div className='menu-latest-projects'>
      <span className='title-latest'>{t('description.latestProjects.titleLatest')}</span>
      <nav>
        <p>{t('description.latestProjects.navAll')}</p>
        <p>{t('description.latestProjects.building')}</p>
        <p>{t('description.latestProjects.interior')}</p>
        <span>{t('description.latestProjects.viewAll')}</span>
      </nav>
    </div>
    <div className='swiper-wrapper'>
      <Swiper
        modules={[Pagination, Scrollbar]}
        style={{ width: '1720px'}}
        spaceBetween={10}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        //onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}>
        <SwiperSlide>
          <div className='wrapper-card'>
            <div className='front-project'>
              <img src='./image/main/Latest project-villas.webp' alt="user" className='image-project' />
              <span className='front-title'>{t('description.latestProject.titleOne')}</span>
            </div>
            <div className='back-project'>
              <p className='back-title-project'>{t('description.latestProject.titleOne')}</p>
              <p className='back-description'>{t('description.latestProject.description')}</p>
              <a href='#' className='a-card'>{t('description.latestProject.seeProject')}</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='wrapper-card'>
            <div className='front-project'>
              <img src='./image/main/Latest project-houses.webp' alt="user" className='image-project' />
              <span className='front-title'>{t('description.latestProject.titleTwo')}</span>
            </div>
            <div className='back-project'>
              <p className='back-title-project'>{t('description.latestProject.titleTwo')}</p>
              <p className='back-description'>{t('description.latestProject.description')}</p>
              <a href='#' className='a-card'>{t('description.latestProject.seeProject')}</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='wrapper-card'>
            <div className='front-project'>
              <img src='./image/main/Latest project-houses.webp' alt="user" className='image-project' />
              <span className='front-title'>{t('description.latestProject.titleThree')}</span>
            </div>
            <div className='back-project'>
              <p className='back-title-project'>{t('description.latestProject.titleThree')}</p>
              <p className='back-description'>{t('description.latestProject.description')}</p>
              <a href='#' className='a-card'>{t('description.latestProject.seeProject')}</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='wrapper-card'>
            <div className='front-project'>
              <img src='./image/main/Latest project-last.webp' alt="user" className='image-project' />
              <span className='front-title'>{t('description.latestProject.titleOne')}</span>
            </div>
            <div className='back-project'>
              <p className='back-title-project'>{t('description.latestProject.titleOne')}</p>
              <p className='back-description'>{t('description.latestProject.description')}</p>
              <a href='#' className='a-card'>{t('description.latestProject.seeProject')}</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='wrapper-card'>
            <div className='front-project'>
              <img src='./image/main/Latest project-villas.webp' alt="user" className='image-project' />
              <span className='front-title'>{t('description.latestProject.titleOne')}</span>
            </div>
            <div className='back-project'>
              <p className='back-title-project'>{t('description.latestProject.titleOne')}</p>
              <p className='back-description'>{t('description.latestProject.description')}</p>
              <a href='#' className='a-card'>{t('description.latestProject.seeProject')}</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='wrapper-card'>
            <div className='front-project'>
              <img src='./image/main/Latest project-last.webp' alt="user" className='image-project' />
              <span className='front-title'>{t('description.latestProject.titleOne')}</span>
            </div>
            <div className='back-project'>
              <p className='back-title-project'>{t('description.latestProject.titleOne')}</p>
              <p className='back-description'>{t('description.latestProject.description')}</p>
              <a href='#' className='a-card'>{t('description.latestProject.seeProject')}</a>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div >
  </>
  );
}

export default LatestProjects;

// {data.map((item, index) =><SwiperSlide><CardProject key={index} item={item}/></SwiperSlide>
// )} 