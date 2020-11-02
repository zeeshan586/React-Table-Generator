import React ,{Component, Fragment}from 'react'
import './App.css';
class App extends Component{
  constructor(){
    super();
    this.state={
From: 0,
To : 0,
getInput:0
    }
  }

  render(){
    let {From , To}= this.state
    let addOne = parseInt(To)+1
    let val = this.state.getInput
    let finalResp=[]

    for(let i=0; i <addOne; i++){
      if(i !== 0 && i > From){
        finalResp.push(<p 
          style= {{fontSize: '350%' , color: '#8B008B' , backgroundColor: '#fff', display:"flex" , flexDirection:"column"}}>
            {val} x {i} ={val * i}</p>)
      }
    }
    return(
      <Fragment>
      <div 
      style ={{
         height:'100vh' , width:"100%", display: 'flex' , flexDirection: 'column' , alignItems:'center' , backgroundColor: 'grey' }}>
      <h1 
      style = {{
        
        paddingTop : 40 , color :"#8B008B"}}>Table Generator</h1>

   <div 
   style ={{ 
     height:300 , width:"100%", display: 'flex' ,  justifyContent: 'center' , alignItems: 'center' ,flexWrap:'wrap' }}>   
  <div>
      Enter Table
   <input type = "number"  
   style = {{
     height: '30px' , width: '50px', margin:'5px' ,textAlign: 'center'}} onChange={e => this.setState({getInput : e.target.value}) }/>
   </div> ,
   <div>
   From <input type = "number" 
    style = {{
     
     height: '30px' , width: '50px',  margin:'5px' ,textAlign: 'center'}} onChange={e => this.setState({From : e.target.value})} /> 
   </div>
   <div>
   To <input type = "number"  
   style = {{
     height: '30px' , width: '50px', margin:'5px' ,textAlign: 'center'}} onChange={e => this.setState({To : e.target.value})}/>
   </div>
   </div>
   <div 
   style = {{
     display: "flext", alignItems : 'center' }}>
   {finalResp}
   </div>
   </div>
  </Fragment>
    )
  }
}

export default App;
