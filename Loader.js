import React from "react";
import loader from '../src/Assets/loading.gif'
class Loader extends React.Component {
  render() {
    return (
      <div className="loader-block">
        <img src={loader} alt="Loading ..." className="loader"/>
      </div>
    )
  }
}

export default Loader;