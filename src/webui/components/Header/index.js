import React, { Component } from 'react';
import styled from 'react-emotion';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Logo from './Logo';
import Link from '../Link';
import Modal from '../Modal';
import API from '../../utils/api';

const Wrapper = styled(Toolbar)`
  background-color: #4b5e40;
`;

const NormalNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const EndWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      username: '',
      password: '',
      logo: '',
      loginError: null,
    };
  }

  componentDidMount() {
    this.loadLogo();
  }

  async loadLogo() {
    try {
      const logo = await API.request('logo');
      this.setState({ logo });
    } catch (error) {
      throw new Error(error);
    }
  }

  handleToggleLoginModal() {
    this.setState((prevState) => ({
      showLogin: !prevState.showLogin,
      loginError: null
    }));
  }


  render() {
    return (
      <div>
        <AppBar position="static">
          <Wrapper>
            <NormalNavbar>
              <StartWrapper>
                <Link to="/">
                  <Logo src={this.state.logo} />
                </Link>
              </StartWrapper>
              <EndWrapper>
                <Button
                  color="inherit"
                  onClick={this.handleToggleLoginModal}
                >
                  Login
                </Button>
              </EndWrapper>
            </NormalNavbar>
          </Wrapper>
        </AppBar>
        <Modal />
      </div>
    );
  }
}

export default Header;
