import React from 'react';
import './footer.css'
class Footer extends React.Component{
constructor(props){
    super(props);
    this.state={msg:"What made you happy today?",
    dmsg:"",
    i:1

}

}
componentDidMount() {
  
    this.timerID = setInterval(
      () => this.tick(),
      150
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
 if(this.state.i>26){
     this.setState({
    i:1})
 }
 
    this.setState({
      dmsg:this.state.msg.substring(0,this.state.i),
       i:this.state.i+1
    });
  }
render() {
    return (
      <div className='div_footer'>
        <h1>{this.state.dmsg}</h1>
      </div>
    );
  }
}

export default Footer;