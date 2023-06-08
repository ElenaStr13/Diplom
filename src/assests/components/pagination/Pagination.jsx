import React, { useEffect, useState } from 'react';
import './pagination.scss';
import ReactPaginate from 'react-paginate';

function Items(props) {
    const { data } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 3;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            {/* <div>{currentItems.map(blog => {
            return (
                <div>{blog}</div>
            )
        })}</div> */}
            <ul className='pagination'>
                {/* <Items currentItems={currentItems} /> */}
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=" >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="< "
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
}

export default Items;

// function Items({renderSearch}) {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(0);
//     const itemsPerPage = 12;
//     console.log(renderSearch);
//     //setTotalPages(Math.ceil(renderSearch.length / itemsPerPage));

//     return (
//         <>
//             <ul className='pagination'>
//                 <ReactPaginate
//                     breakLabel="..."
//                     nextLabel=" >"
//                     onPageChange={() => changeCPage()}
//                     pageRangeDisplayed={3}
//                     pageCount="96"
//                     previousLabel="<"
//                     renderOnZeroPageCount={null}
//                     pageLinkClassName="page-item"
//                     containerClassName="pagination"
//                     activeClassName="page-link"
//                     previousLinkClassName="page-link"
//                     nextLinkClassName="page-link"
//                 />
//             </ul>
//         </>
//     );

//     function changeCPage(id) {
//         setCurrentPage(id)
//     }
// }

// export default Items;