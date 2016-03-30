import React from 'react';
import '../../assets/styles/rwd';

export default class Rwd extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <div className="container">
                    <div className="col-quarter box bg-gray"></div>
                    <div className="col-three-quarter box bg-orange"></div>
                </div>

                <div className="container">
                      <div className="row">
                        <div className="col-onethird">
                          <div className="box bg-gray">
                            12312321
                          </div>
                        </div>
                        <div className="col-onethird">
                          <div className="box bg-gray">
                            12312321
                          </div>
                        </div>
                        <div className="col-onethird">
                          <div className="box bg-gray">
                            12312321
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}