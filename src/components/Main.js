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
       
        <h1><b> Tokenomics </b></h1>
        <ul>
          <li>Initial supply of 21,000,000 EFGC</li>
          <li>%1 Burn on transactions</li>
          <li>Burns until 100,000 EFGC remain</li>
          <li>10,000,000 EFGC to be sold on public exchanges</li>
          <li>10,000,000 EFGC allocated to private sale at fixed rate of 0.0002 ETH </li>
               
        </ul>

        
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        

        <h1><b> DEFLATIONARY! </b></h1>

        <img src = {EfgGif} />

        <br></br><br></br><br></br>

        <h3><b> Buy EFGC Direct Below!</b></h3>
        <br></br>

    <div className="card mb-4" >
      <div className="card-body">

        <div className="d-flex justify-content-between mb-3"> 
          <span className="text-muted"> Connect MetaMask Wallet to Buy EFGC &gt; &gt; &gt;</span>     
            <button className="btn btn-light"
              onClick={(event) => {

              this.setState({ currentForm: 'buy' })
              
              }}
            >
            Connect MetaMask
          </button>
        </div>

        {content}
        
        
      </div>
        
    </div>

</div>

    );
  }
}

export default Main;