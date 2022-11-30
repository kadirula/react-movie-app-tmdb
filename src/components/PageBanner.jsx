import React from 'react'

const PageBanner = ({ title }) => {
    return (
        <div className='page-banner'>
            <div className="page-banner__info">
                <div className="page-banner__title">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default PageBanner