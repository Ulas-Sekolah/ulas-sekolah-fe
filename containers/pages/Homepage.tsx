import React from 'react'
import Navbar from '../../components/organisms/Navbar/Navbar'

class Homepage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="bg-gray rounded m-3 h-screen py-4">
          <div className="bg-white mx-20 mt-5 rounded-full py-3 px-10 justify-between flex">
            <Navbar />
          </div>
        </header>
      </React.Fragment>
    )
  }
}

export default Homepage
