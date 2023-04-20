// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isModeDark: false}

  onChangeMode = () => {
    this.setState(prevState => ({isModeDark: !prevState.isModeDark}))
  }

  render() {
    const {isModeDark} = this.state
    const theme = isModeDark ? 'darkTheme' : 'lightTheme'
    const buttonText = isModeDark ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="container">
        <div className={theme}>
          <h1>Click to Change Mode</h1>
          <button className="button" type="button" onClick={this.onChangeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
