import React from 'react';
import { Link } from 'react-router';

import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu';

const style = {
  marginRight: 32,
  marginBottom: 32,
  float: 'left',
  width: '200px',
  position: 'relative',
  zIndex: 0,
};

export default class App extends React.Component{
    constructor(){
        super();
        this.state = {open: false};
        this.handleTouchTapLeftIconButton = this.handleTouchTapLeftIconButton.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleTouchTapLeftIconButton(){
        this.setState({
            open: !this.state.open
        })
    }

    handleClose(){
        this.setState({
            open: false
        })
    }

    render(){

        return(
            <div className="wrap">
                <AppBar
                    title="Material UI"
                    showMenuIconButton={true}
                    iconElementLeft={<IconButton onClick={this.handleTouchTapLeftIconButton}><NavigationMenu className="nav_menu" /></IconButton>}
                    onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton} />
                <LeftNav 
                    docked={false}
                    open={this.state.open}
                    onRequestChange={open => this.setState({open})}>
                    <Link to="/autocomplete">
                        <MenuItem onTouchTap={this.handleClose}>AutoComplete</MenuItem>
                    </Link>
                </LeftNav>
                <Menu
                    className="menu" 
                    style={style}>
                    <Link to="/autocomplete">
                        <MenuItem onTouchTap={this.handleClose}>AutoComplete</MenuItem>
                    </Link>
                </Menu>
                <div className="content">
                    {this.props.children}
                </div>

            </div>
        )
    }    
}
