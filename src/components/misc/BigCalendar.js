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
                    {b.property.city}
                    {/* {Object.keys(b.property).map((p, i) => {
                      debugger
                      console.log('p --->', p)
                      return(
                        <div key={i}>
                          <img src={b.property[p].title} alt="" />
                        </div>
                      )
                    })} */}
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