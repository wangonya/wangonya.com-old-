import React, { Component } from "react"
import { postClaps } from "../utils"

class Claps extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    postClaps()
  }
  render() {
    return (
      <div className="claps-container">
        <button id="clap" className="clap">
          <span id="clapIcon" className="clap-icon">
            👏
          </span>
          <span id="clapCount" className="clap--count" />
          <span id="clapCountTotal" className="clap--count-total" />
        </button>
      </div>
    )
  }
}
export default Claps
