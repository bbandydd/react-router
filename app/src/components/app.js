import React from 'react';
import '../../assets/styles/index';

export default class app extends React.Component{
    constructor() {
        super();
        this.state = {toggle: false};
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
      this.setState({toggle: !this.state.toggle});
    }

    render() {

        var navClass = this.state.toggle ? 'navbar-menu active' : 'navbar-menu';

        return (
          <div>
            <div className="navbar">
                <div className="container">
                  <a className="brand" href="#">
                    React
                  </a>
                  <a className='button-toggle' onClick={this.handleToggle}>
                    三
                  </a>
                </div>
                <ul className={navClass}>
                  <li><a href="#">選單1</a></li>
                  <li><a href="#">選單2</a></li>
                  <li><a href="#">選單3</a></li>
                  <li><a href="#">選單4</a></li>
                  <li><a href="#">選單5</a></li>
                </ul>
            </div>
            <div className="row">
              <div className="container">
                {this.props.children}
              </div>
            </div>
            <div className="footer">
              <div className="container">
                Copyright
              </div>
            </div>
          </div>
        )
    }
}