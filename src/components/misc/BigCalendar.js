import React from 'react'

const BigCalendar = (user) => {
  const bookings = user.properties.map(p => p.bookings)
  //console.log('user de calendar  _>' , user)
  console.log(bookings)
  debugger
  return(
    <div className="row row-cols-1 row-cols-md-3">
      {bookings.map((e, i) => {
        return(
          <div key={i} className="col mb-4">
            <div className="card">
              <div className="card-body">
                {e.status}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default BigCalendar