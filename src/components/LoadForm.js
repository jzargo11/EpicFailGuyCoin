import React, { Component } from 'react'
import Main from './Main'
import tokenLogo from '../efgclogo.png'
import ethLogo from '../eth-logo.png'



class LoadForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      output: '0',
      
    }
  }

  render() {
    return (
                

          <form className="mb-3" onSubmit={(event) => {
              event.preventDefault() 
              }
            }>
            
            <div>
              <label className="float-left"><b>ETH</b></label>
              <span className="float-right text-muted">
                User Balance: 
              </span>
            </div>
            <div className="input-group mb-4">
              <input
                type="text"
                onChange={(event) => {

                }}
                ref={(input) => { this.input = input }}
                className="form-control form-control-lg"
                placeholder="0"
                required
                disabled
                        />

              <div className="input-group-append">
                <div className="input-group-text">
                  <img src={ethLogo} height='32' alt=""/>
                  &nbsp;&nbsp;&nbsp; ETH
                </div>
              </div>
            </div>
            <div>
              <label className="float-left"><b>EFGC</b></label>
              <span className="float-right text-muted">
                Remaining Supply:
              </span>
            </div>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="0"
                value={this.state.output}
                disabled
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <img src={tokenLogo} height='32' alt=""/>
                  &nbsp; EFGC
                </div>
              </div>
            </div>
            <div className="mb-5">
              <span className="float-left text-muted">Exchange Rate</span>
              <span className="float-right text-muted"> 1 EFGC - %1 Burn Fee  = 0.0002 ETH </span>
            </div>
            <button type="submit" className="btn btn-primary btn-block btn-lg">BUY!</button>
            <br></br><br></br>
            <p2><b>Total EFGC Burned:</b> Connect MetaMask to Show Data</p2>

          </form>  

            
          
    );
  }
}

export default LoadForm;