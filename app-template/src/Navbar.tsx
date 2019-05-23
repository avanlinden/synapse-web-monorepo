import { Link } from 'react-router-dom'
import * as React from 'react'
import routesConfig from './config/routesConfig'
import { GenericRoute, SynapseObject } from './types/portal-config'
import logoHeaderConfig from './config/logoHeaderConfig'
import Modal from '@material-ui/core/Modal'
import { SynapseComponents, SynapseClient, SynapseConstants } from 'synapse-react-client'
import UserCard from 'synapse-react-client/dist/containers/UserCard'
import * as AppInitializer from './AppInitializer'
import SvgIcon from '@material-ui/core/SvgIcon'
import { signOut } from 'synapse-react-client/dist/utils/SynapseClient'

export type NavbarState = {
  token: string | undefined,
  userprofile: any,
  [index:string]: any
}
export class Navbar extends React.Component<{}, NavbarState> {

  constructor(props: any) {
    super(props)
    const numNestedRoutes = routesConfig.filter(el => el.isNested).length
    const state: NavbarState = {
      numNestedRoutes,
      userprofile: undefined,
      token: undefined,
      showLoginDialog: false
    }
    for (let i = 0; i < numNestedRoutes; i += 1) {
      state[`dropdown${i}`] = false
    }
    state['usermenu'] = false
    this.state = state
  }

  // Toggle the dropdown menu, if index === -1 all the dropdown menus will close
  toggleDropdown = (index: number) => (_event: any) => {
    for (let i = 0; i < this.state.numNestedRoutes; i += 1) {
      const key = `dropdown${i}`
      if (index === -1) {
        this.setState({
          [key]: false,
          hasDropdownOpen: false,
        })
      } else if (index === i) {
        this.setState({
          hasDropdownOpen: !this.state[key],
          [key]: !this.state[key]
        })
      }
    }
    // special case.  if -1 then we want to close all dropdown menus (including the usermenu)
    if (index === -1) {
      this.setState({
        ['usermenu']: false,
        hasDropdownOpen: false,
      })
    }
  }

  toggleUserMenu = () => (_event: any) => {
    this.setState({
      hasDropdownOpen: !this.state['usermenu'],
      ['usermenu']: !this.state['usermenu']
    })
  }

  onSignIn = (event: any) => {
    this.setState({
      showLoginDialog: true
    })
  }
  // given the hash, decide if the link should have a bottom border
  getBorder = (name: string) => {
    if (name === '') {
      // special case the home page
      return
    }
    const hash = window.location.hash.substring(2)
    return hash.includes(name) ? 'bottom-border' : ''
  }
  componentDidMount() {
    this.getUserProfile()
  }
  componentDidUpdate() {
    this.getUserProfile()
  }
  getUserProfile = () => {
    const newToken = this.context
    if (newToken && (!this.state.userprofile || this.state.token !== newToken)) {
      SynapseClient.getUserProfile(newToken, 'https://repo-prod.prod.sagebase.org').then((profile: any) => {
        if (profile.profilePicureFileHandleId) {
          profile.preSignedURL = `https://www.synapse.org/Portal/filehandleassociation?associatedObjectId=${profile.ownerId}&associatedObjectType=UserProfileAttachment&fileHandleId=${profile.profilePicureFileHandleId}`
        }
        this.setState({
          userprofile: profile,
          token: newToken
        })
      }).catch((_err) => {
        console.log('user profile could not be fetched ', _err)
      })
    }
  }

  render() {
    const goToTop = (_event:any) => { window.scroll({ top: 0 }) }
    const { hasDropdownOpen } = this.state
    const toggleOff = this.toggleDropdown(-1)
    let currentNestedRouteCount = 0
    const { name, icon } = logoHeaderConfig
    const logo = name ? name : <img className="nav-logo" src={icon} />
    const { userprofile } = this.state
    const isUserMenuOpen = this.state['usermenu']
    const toggleUserMenu = this.toggleUserMenu()
    return (
      <React.Fragment>
        <nav className="flex-display nav">
          {
            hasDropdownOpen
            &&
            <span onClick={toggleOff} className="menu-wall hand-cursor"/>
          }
          <div className="center-content nav-logo-container">
            {/* TODO - this may be an img tag which will require a change */}
            <Link onClick={goToTop} to="/" id="home-link"> {logo} </Link>
          </div>
          <div className="nav-link-container">
            {
              !userprofile &&
              <div className="center-content nav-button">
                  <button
                    id="signin-button"
                    className="SRC-primary-text-color-background"
                    onClick={this.onSignIn}
                  >
                    SIGN&nbsp;IN
                  </button>
                  <Modal open={this.state.showLoginDialog}>
                    <SynapseComponents.Login
                        token={this.state.token}
                        theme={'light'}
                        icon={true}
                    />
                  </Modal>
                </div>
            }
            {
                userprofile &&
                <div className="center-content nav-button">
                    <div id="user-menu-button" className="center-content hand-cursor" onClick={toggleUserMenu}>
                      <UserCard
                        userProfile={userprofile}
                        size={SynapseConstants.SMALL_USER_CARD}
                        preSignedURL={userprofile.preSignedURL}
                        hideText={true}
                        link="javascript:void(0)"
                      />
                      <SvgIcon>
                        {
                          // Material expand more svg https://material.io/tools/icons/?icon=expand_more&style=baseline
                        }
                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                      </SvgIcon>
                    </div>
                </div>
            }
            {
                userprofile &&
                <div className={`dropdown ${isUserMenuOpen ? 'open' : ''}`}>
                    {
                      isUserMenuOpen &&
                      <div className="user-menu-dropdown dropdown-menu">
                        <p className="dropdown-inactive-item center-content border-bottom-1">
                          Signed in as&nbsp;<strong>{userprofile.userName}</strong>
                        </p>
                        <a
                          href={`https://www.synapse.org/#!Profile:${userprofile.ownerId}`}
                          onClick={toggleUserMenu}
                          className="dropdown-item SRC-primary-background-color-hover SRC-nested-color center-content"
                        >
                          Profile
                        </a>
                        <a
                          href={`https://www.synapse.org/#!Profile:${userprofile.ownerId}/projects`}
                          onClick={toggleUserMenu}
                          className="dropdown-item SRC-primary-background-color-hover SRC-nested-color center-content"
                        >
                          Projects
                        </a>
                        <a
                          href={`https://www.synapse.org/#!Profile:${userprofile.ownerId}/teams`}
                          onClick={toggleUserMenu}
                          className="dropdown-item SRC-primary-background-color-hover SRC-nested-color center-content"
                        >
                          Teams
                        </a>
                        <a
                          href={`https://www.synapse.org/#!Profile:${userprofile.ownerId}/challenges`}
                          onClick={toggleUserMenu}
                          className="dropdown-item SRC-primary-background-color-hover SRC-nested-color center-content"
                        >
                          Challenges
                        </a>
                        <a
                          href={`https://www.synapse.org/#!Profile:${userprofile.ownerId}/downloads`}
                          onClick={toggleUserMenu}
                          className="dropdown-item SRC-primary-background-color-hover SRC-nested-color center-content border-bottom-1"
                        >
                          Downloads
                        </a>
                        <a
                          href={`https://www.synapse.org/#!Profile:${userprofile.ownerId}/settings`}
                          onClick={toggleUserMenu}
                          className="dropdown-item SRC-primary-background-color-hover SRC-nested-color center-content border-bottom-1"
                        >
                          Settings
                        </a>
                        <a
                          onClick={signOut}
                          className="dropdown-item SRC-primary-background-color-hover SRC-nested-color center-content border-bottom-1"
                        >
                          Sign Out
                        </a>
                      </div>
                    }
                    </div>
            }
            {
              // we have to loop backwards due to css rendering of flex-direction: row-reverse
              routesConfig.slice().reverse().map(
                (el) => {
                  const displayName = el.displayName ? el.displayName : el.name
                  if (el.isNested) {
                    // handle the case when the menu has sub options
                    const plainRoutes = el.routes as GenericRoute []
                    const key = `dropdown${currentNestedRouteCount}`
                    const isCurrentDropdownOpen = this.state[key]
                    const toggleDropdown = this.toggleDropdown(currentNestedRouteCount)
                    currentNestedRouteCount += 1
                    return (
                      <div key={el.name} className={`dropdown nav-button-container ${isCurrentDropdownOpen ? 'open' : ''} ${this.getBorder(el.name)}`}>
                        <div onClick={toggleDropdown} className="center-content nav-button hand-cursor"> {displayName} </div>
                        {
                          isCurrentDropdownOpen &&
                            <div className="dropdown-menu">
                              {
                                plainRoutes.map(
                                  (route) => {
                                    const routeDisplayName = route.displayName ? route.displayName : route.name
                                    return (<Link
                                      key={route.name}
                                      onClick={toggleDropdown}
                                      className="dropdown-item SRC-primary-background-color-hover SRC-nested-color center-content"
                                      to={route.to!}
                                    >
                                      {routeDisplayName}
                                    </Link>)
                                  }
                                )
                              }
                            </div>
                        }
                      </div>
                    )
                  }
                  return (
                    <Link key={el.name} className={`center-content nav-button nav-button-container ${this.getBorder(el.name)}`} to={el.to}> {displayName} </Link>
                  )
                }
              )
            }
          </div>
        </nav>
        <div className="spacer"/>
      </React.Fragment>
    )
  }
}
Navbar.contextType = AppInitializer.TokenContext
