import React, { useState, useEffect } from 'react';
import Items from '../../pagination/Pagination';
import { useTranslation } from 'react-i18next';
import Blog from '../blog/Blog';
import './blogs.scss';


function Blogs() {

  const [t] = useTranslation(["translation"]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);


  const renderSearch = () => {
   
      return (<section className="blogs">
        {searchResult.map((el, index) => (
          <div className="blog" key={index}>
            <img src={el.image} alt="photo" />
            <div className='textBlog'>
              <p className='titleBlog'>{el.title}</p>    
              <a href="#">{el.learn}</a>
            </div>
          </div>
        ))}
      </section>)
  }

  useEffect(() => {
    setSearchResult((t("descriptionBlog.blog", { returnObjects: true })).filter(blog => blog.title.includes(search)))
    //console.log(searchResult)
  }, [search, t])

  return (< >
    <div className='title-blog'>
      <span className='title-text'>{t('descriptionBlog.blogTitle', { returnObjects: true })}</span>
      <form className='search' onSubmit={(event) => event.preventDefault()}
        onChange={(e) => { setSearch(e.target.value) }}
      >
        <input type="search"
          className='search-input'
          id="search"
          placeholder='Search'                                        
        />
        <img className="search-icon" src="./image/blog/magnifier-glass.webp" alt="search" />
      </form>
    </div>
    {renderSearch()}    
    <Items />
  </>                                                                
  );
}

export default Blogs;