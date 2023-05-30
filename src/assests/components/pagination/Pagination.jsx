import React, { useState } from 'react';
import './pagination.scss';
import ReactPaginate from 'react-paginate';


function Items() {
    const [currentPage, setCurrentPage] = useState(1);  

    return (
        <>
            <ul className='pagination'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=" >"
                    onPageChange={() => changeCPage()}
                    pageRangeDisplayed={3}
                    pageCount="96"
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    pageLinkClassName="page-item"
                    containerClassName="pagination"
                    activeClassName="page-link"
                    previousLinkClassName="page-link"
                    nextLinkClassName="page-link"
                />
            </ul>
        </>
    );

    function changeCPage(id) {
        setCurrentPage(id)
    }
}

export default Items;

//const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  // const recordsPerPage = 2;
    // const lastIndex = currentPage * recordsPerPage;
    // const firstIndex = lastIndex - recordsPerPage;
    //const records = items.slice(firstIndex, lastIndex);
    //const npage = Math.ceil(items.length / recordsPerPage);
    //const numbers = [...Array(npage + 1).keys()].slice(1)

// {
//     numbers.map((n, i) => (
//         <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
//             <a href="#" className='page-link' onClick={() => changeCPage(n)}>{n}</a>
//         </li>
//     ))
// }
// <li className="page-item">
//     <a href="#" className='page-link' onClick={nextPage}>›</a>
// </li>

// function nextPage() {
//     if (currentPage !== npage)
//         setCurrentPage(currentPage + 1)
// }