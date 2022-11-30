import React from 'react'

const Pagination = ({ currentPage, setCurrentPage, totalPage }) => {

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const nextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div className='pagination'>
            <button className='prev' onClick={prevPage}>Previous Page</button>
            {
                currentPage > 1 &&
                <button onClick={prevPage}>{currentPage - 1}</button>

            }
            <button className='active'>{currentPage}</button>
            {
                totalPage > 1 &&
                <button onClick={nextPage}>{currentPage + 1}</button>

            }
            <button className='next' onClick={nextPage}>Next Page</button>
        </div>
    )
}

export default Pagination