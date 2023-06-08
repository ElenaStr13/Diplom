import React, { useState, useEffect } from 'react';
//import Items from '../../pagination/Pagination';
import { useTranslation } from 'react-i18next';
import './blogs.scss';
import '../../pagination/pagination.scss';
import ReactPaginate from 'react-paginate';
import Blog from '../blog/Blog';


function Blogs() {

  const [t] = useTranslation(["translation"]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

//Search
  const renderSearch = () => {   
      return (<section className="blogs">
        {searchResult.map((el, index) => (
          <div className="blog" key={index}>
            <img src={el.image} alt="photo" />
            <div className='textBlog'>
              <p className='titleBlog'>{el.title}</p> 
              <p className='blog-text'>{el.text}</p>   
              <a href="#">{el.learn}</a>
            </div>
          </div>
        ))}
      </section>)
  }

// search for title
  useEffect(() => {
    setSearchResult((t("descriptionBlog.blog", { returnObjects: true })).filter(blog => blog.title.includes(search)));    
  }, [search, t])
 
// pagination
  //const {data} = searchResult;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      // setSearchResult(searchResult.slice(itemOffset, endOffset));
      // setPageCount(Math.ceil(searchResult.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, searchResult])

  const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % searchResult.length;
      setItemOffset(newOffset);
  };

  return (< >
    <div className='title-blog'>
      <span className='title-text'>{t('descriptionBlog.blogTitle', { returnObjects: true })}</span>
      <form className='search' onSubmit={(event) => event.preventDefault()}
        onChange={(e) => { setSearch(e.target.value) }}>
        <input type="search"
          className='search-input'
          id="search"
          placeholder='Search'/>
        <img className="search-icon" src="./image/blog/magnifier-glass.webp" alt="search" />
      </form>
    </div>
    {renderSearch()}   
    <ul className='pagination'>               
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            </ul>
  </>                                                                
  );
}

export default Blogs;