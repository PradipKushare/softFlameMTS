import React, { Component } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

class CustomLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: false
      };
    }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loading) {
    this.setState({ loading:nextProps.loading });
    }
  }

  componentDidMount() {
    this.setState({ loading:this.props.loading });
  }

render() {   
   
    return(  
        <div className='custom_loading'>
            <ClipLoader
              sizeUnit={"px"}
              size={50}
              color={'#ef100f'}
              loading={this.state.loading}/>
            </div>
          );
        }
    }

export default CustomLoader;