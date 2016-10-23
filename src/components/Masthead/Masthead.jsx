/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* Internal Dependencies */
import styles from './Masthead.scss'
import * as FooActionCreator from '../../actionCreators/FooActionCreator'

class Masthead extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    console.log('Masthead mount')
  }

  handleClick(event) {
    console.log('clicked')
    fetch('http://172.16.101.150:8081/lectures', {
      method: 'GET',
      headers: {
        'temp': '1',
        'bar': '2',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zd21hZXN0cm8ubmV0IiwiZXhwIjoxNDgxNDU4NzMzLCJ1c2VyX2lkIjo0LCJpYXQiOjE0NzYyNzQ3MzN9.95sFi_ICx57Jh2tHeycmxusZg_-luWkQf5AF2Y8p9qY'

      }
    }).then(function(response) {
      console.log(2, response)
    })

    // this.props.dispatch(FooActionCreator.getTime(100))

  }

  render() {
    console.log(1, this.props.foo)
    return (
      <div className={styles.wrapper}>
        Masthead
        <button onClick={this.handleClick}>
          123
        </button>
        <span></span>
      </div>
    )
  }

}

const mapStateToProps = (state/*, props*/) => {
  return {
    foo: state.foo,
    reduxState: state
  }
}

const ConnectedMasthead = connect(mapStateToProps)(Masthead)

export default ConnectedMasthead
