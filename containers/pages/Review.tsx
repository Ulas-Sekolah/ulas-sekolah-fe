import React from 'react'
import Navbar from '../../components/organisms/Navbar/Navbar'

class Review extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="bg-gray rounded m-3 h-96 py-4">
          <Navbar />
        </header>
      </React.Fragment>
    )
  }
}

export default Review
