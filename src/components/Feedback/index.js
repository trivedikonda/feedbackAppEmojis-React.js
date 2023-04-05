// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: true}

  onClickEmoji = () => {
    this.setState({isEmojiClicked: false})
  }

  renderEmojiContainer = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emojis-container">
            {emojis.map(eachEmoji => (
              <li
                className="each-emoji-container"
                key={eachEmoji.id}
                onClick={this.onClickEmoji}
              >
                <img
                  className="image"
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                />
                <p className="para">{eachEmoji.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderFeedbackContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="app-container">
        <div className="container">
          <img src={loveEmojiUrl} alt="love emoji" className="image" />
          <h1 className="heading">Thank You</h1>
          <p className="para">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state

    return (
      <div>
        {isEmojiClicked
          ? this.renderEmojiContainer()
          : this.renderFeedbackContainer()}
      </div>
    )
  }
}

export default Feedback
