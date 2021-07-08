import React from 'react'
import Navbar from '../../components/organisms/Navbar/Navbar'

class Review extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="bg-gray rounded m-3 h-96 py-4">
          <div className="bg-white mx-24 mt-5 shadow-sm rounded-full py-3 px-10 justify-between flex">
            <Navbar />
          </div>
        </header>
      </React.Fragment>
    )
  }
}

export default Review
