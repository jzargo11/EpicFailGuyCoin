import React, { Component } from 'react'
import BuyForm from './BuyForm'
import LoadForm from './LoadForm'
import EfgPic from '../EFG.jpg'
import EfgGif from '../EFGBURN.gif'


class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      output: '0',
      currentForm: 'load'
    }
  }

  render() {
    
    
    let content
    let button
    if(this.state.currentForm === 'buy') {
      content = <BuyForm/>
    
    } else {
      content = <LoadForm/>
    }
            
    

return (

    <div id="content">


        <h1><b> Epic Fail Guy Coin </b></h1>
        <br></br>
        <h2> This coin is going to zero. Buy Now! </h2>
        
        <img src = {EfgPic} />
        
        <br></br> <br></br> <br></br>

        <p>  </p>
        
        <br></br><br></br>
       
        <h1><b> Tokenomics </b></h1>
        <ul>
          <li>Initial supply of 21,000,000 EFGC</li>
          <li>%1 Burn on transactions</li>
          <li>Burns until 100,000 EFGC remain</li>
          
              
        </ul>

        
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br>


        <h1><b> DEFLATIONARY! </b></h1>



        <img src = {EfgGif} />

        <br></br><br></br><br></br>

    
               



</div>

    );
  }
}

export default Main;