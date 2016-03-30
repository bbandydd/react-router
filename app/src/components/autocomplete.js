import React from 'react';
import AutoComplete from 'material-ui/lib/auto-complete';

export default class autocomplete extends React.Component{
    constructor(){
        super();
        this.state = {
          dataSource: [],
        };
        this.handleUpdateInput = this.handleUpdateInput.bind(this);
    }

    handleUpdateInput(t){
        this.setState({
          dataSource: [t, t + t, t + t + t],
        });
    };

    render(){

        return(
            <div>
                <div className="panel">
                    <div className="panel_title">
                        <span>Simple Example</span>
                    </div>
                    <div className="panel_component">
                        <AutoComplete
                            hintText="Type c"
                            dataSource={this.state.dataSource}
                            onUpdateInput={this.handleUpdateInput}
                        />
                    </div>
                </div>
            </div>
        )
    }
}