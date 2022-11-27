import React from 'react'

const Heading = ({title, desc}) => {
  return (
    <div className='heading'>
        <h3 className='heading__title'>{title}</h3>
        {
            desc && <p className="heading__desc">{desc}</p>
        }
        
    </div>
  )
}

export default Heading