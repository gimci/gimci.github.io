/* External Dependencies */
import React from 'react'
/*이메일,비밀번호,비밀번호확(Re-enter),성명,전화번호,성별,기수,타입*/
/* Internal Dependencies */
import styles from './Signup.scss'

class Signup extends React.Component {

  constructor() {
    super()
    this.nodes = {}
    this.radio_values = {}
  }


  componentWillMount() {
    console.log('Signup mount')
  }

  handleClickSignup(event) {
    const username = this.nodes.username.value
    const password = this.nodes.password.value
    const re_password = this.nodes.repassword.value
    const name = this.nodes.name.value
    const tel = this.nodes.tel.value
    const generation = this.nodes.generation.value
    if (this.nodes.radio_male.checked) {
      this.radio_values.gender = 'male'
    } else if(this.nodes.radio_female.checked) {
      this.radio_values.gender = 'female'
    } else {
      this.radio_values.gender = 'unknown'
    }

    if (this.nodes.radio_mentor.checked) {
      this.radio_values.grade = 'mentor'
    } else if(this.nodes.radio_mentee.checked) {
      this.radio_values.grade = 'mentee'
    } else {
      this.radio_values.grade = 'unknown'
    }

    console.log(3, username, password, re_password, name, tel, generation, this.radio_values.gender,
        this.radio_values.grade)
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
            <div>
              <label htmlFor="">re-enter password</label>
              <input
                  type="password"
                  ref={(elem)=>{this.nodes.repassword = elem}}/>
            </div>
            <div>
              <label htmlFor="">name</label>
              <input
                  type="text"
                  ref={(elem)=>{this.nodes.name = elem}}/>
            </div>
            <div>
              <label htmlFor="">tel</label>
              <input
                  type="tel"
                  ref={(elem)=>{this.nodes.tel = elem}}/>
            </div>
            <div>
              <label htmlFor="">generation</label>
              <select ref={(elem)=>{this.nodes.generation = elem}}>
                <option value="7">7기</option>
              </select>
              <label htmlFor="">멘토</label>
              <input type="radio" name="grade" ref={(elem)=>{this.nodes.radio_mentor = elem}}/>
              <label htmlFor="">멘티</label>
              <input type="radio" name="grade" ref={(elem)=>{this.nodes.radio_mentee = elem}}/>
            </div>
            <div>
              <label htmlFor="">남</label>
              <input type="radio" name="gender" ref={(elem)=>{this.nodes.radio_male = elem}}/>
              <label htmlFor="">여</label>
              <input type="radio" name="gender" ref={(elem)=>{this.nodes.radio_female = elem}}/>
            </div>
          </div>
          <div className={styles.buttonStand}>
            <button onClick={this.handleClickSignup.bind(this)}>Sign Up</button>
          </div>
        </div>
      </div>
    )
  }

}

export default Signup