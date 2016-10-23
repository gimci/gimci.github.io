/* External Dependencies */
import React from 'react'

/* Internal Dependencies */
import styles from './Signin.scss'

class Signin extends React.Component {

  constructor() {
    super()
    this.nodes = {}
  }

  componentWillMount() {
    console.log('Signin mount')
  }

  handleClickSignin(event) {
    const username = this.nodes.username.value
    const password = this.nodes.password.value
    console.log(3, username, password)
    // apicall post => request username, password
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.inputContainer}>
            <div>
              <label htmlFor="">email</label>
              <input
                type="text"
                ref={(elem)=>{this.nodes.username = elem}}/>
            </div>
            <div>
              <label htmlFor="">password</label>
              <input
                type="password"
                ref={(elem)=>{this.nodes.password = elem}}/>
            </div>
          </div>
          <div className={styles.buttonStand}>
            <button onClick={this.handleClickSignin.bind(this)}>Sign In</button>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    )
  }

}

export default Signin
