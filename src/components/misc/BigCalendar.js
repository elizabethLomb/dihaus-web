import React from 'react'

const BigCalendar = (user) => {
  return(
    <div className="row row-cols-1 row-cols-md-3">
      {user.properties.map(p => {
        return p.bookings.map((b, i) => {
          console.log('b -->', b)
          return(
            <div key={i} className="col mb-4">
              <span>{b.status}</span>
                <div className="card">
                  <img src={b.property.featuredImage} alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{b.property.title}</h5>
                    <small>{b.property.city}</small>
                    <hr/>
                    <div>
                      <h6>{b.date}</h6>
                      
                    </div>
                  </div>

                </div>
            </div>
          )
        })
      })}
    </div>
  )
}

export default BigCalendar