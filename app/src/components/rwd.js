import React from 'react';
import '../../assets/styles/rwd';

export default class Rwd extends React.Component{
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

        var content = [],
            imgList = [
              'https://images.unsplash.com/photo-1458724338480-79bc7a8352e4?crop=entropy&dpr=2&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1200',
              'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?crop=entropy&dpr=2&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1200',
              'https://images.unsplash.com/photo-1456318019777-ccdc4d5b2396?crop=entropy&dpr=2&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1200',
              'https://images.unsplash.com/photo-1455098934982-64c622c5e066?crop=entropy&dpr=2&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1200',
              'https://images.unsplash.com/photo-1454047637795-79e3325dfa0e?crop=entropy&dpr=2&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1200',
              'https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?crop=entropy&dpr=2&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1200',
              'https://images.unsplash.com/photo-1451906278231-17b8ff0a8880?crop=entropy&dpr=2&fit=crop&fm=jpg&h=900&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1200',
              'https://images.unsplash.com/photo-1458640904116-093b74971de9?crop=entropy&dpr=2&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1200',
              'https://images.unsplash.com/photo-1458324124043-7803d4fec380?crop=entropy&dpr=2&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1200'
            ];

        imgList.map(function(img){
          content.push(
            <div className="col-onethird">
              <div className="box">
                <img src={img} /> 
              </div>
            </div>
          )
        })

        return (
          <div>
            <div className="navbar">
                <div className="container">
                  <a className="brand" href="#">
                    RWD
                  </a>
                  <a className='button-toggle' onClick={this.handleToggle}>
                    三
                  </a>
                  <ul className={navClass}>
                    <li><a href="#">選單1</a></li>
                    <li><a href="#">選單2</a></li>
                    <li><a href="#">選單3</a></li>
                    <li><a href="#">選單4</a></li>
                    <li><a href="#">選單5</a></li>
                  </ul>
                </div>
            </div>
            <div className="row">
              <div className="container">
                {content}
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