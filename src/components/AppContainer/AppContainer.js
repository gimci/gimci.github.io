/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'

/* Internal Dependencies */
import styles from './AppContainer.scss'
import Masthead from '../Masthead'
import Intro from '../Intro'
import HomeContainer from '../HomeContainer'
import DocsContainer from '../DocsContainer'

class AppContainer extends React.Component {

  constructor() {
    super()
    this.handleClickDocs = this.handleClickDocs.bind(this)
    this.handleClickGithub = this.handleClickGithub.bind(this)
    this.handleClickLogo = this.handleClickLogo.bind(this)
  }

  renderContent() {
    if (this.props.location.pathname.length > 1) {
      return (
        <DocsContainer/>
      )
    } else {
      return (
        <HomeContainer/>
      )
    }
  }

  handleClickDocs() {
    this.props.router.push('/docs')
  }

  handleClickGithub() {
    window.location.href = 'https://github.com/gimci/gimci'
  }

  handleClickLogo() {
    this.props.router.push('/')
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Masthead
          handleClickDocs={this.handleClickDocs}
          handleClickGithub={this.handleClickGithub}
          handleClickLogo={this.handleClickLogo}/>
        <Intro/>
        {this.renderContent()}
      </div>
    )
  }

}


AppContainer = withRouter(AppContainer)
export default AppContainer
