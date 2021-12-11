import React, { Component } from 'react'
import Web3 from 'web3'
import Token from '../abis/EpicFailGuyCoin.json'
import EthSwap from '../abis/DirectSale.json'
import tokenLogo from '../efgclogo.png'
import ethLogo from '../eth-logo.png'


class BuyForm extends Component {
  
        async componentWillMount() {
          await this.loadWeb3()
          await this.loadBlockchainData()
          
          }
      
          async loadBlockchainData() {
            const web3 = window.web3

            const accounts = await web3.eth.getAccounts()
            this.setState({ account: accounts[0] })

            const ethBalance = await web3.eth.getBalance(this.state.account)
            this.setState({ ethBalance })


            // Load Token
            const networkId =  await web3.eth.net.getId()
            const tokenData = Token.networks[networkId]
            if(tokenData) {
              const token = new web3.eth.Contract(Token.abi, tokenData.address)
              this.setState({ token })
              let tokenBalance = await token.methods.balanceOf("0xdaC69EE509436308ac1E6C18565C9ff88a297252").call()
              this.setState({ tokenBalance: tokenBalance.toString() })
            } else {
              window.alert('Token contract not deployed to detected network.')
            }

            // Load EthSwap
            const ethSwapData = EthSwap.networks[networkId]
           
            if(ethSwapData) {
              const ethSwap = new web3.eth.Contract(EthSwap.abi, ethSwapData.address)
              this.setState({ ethSwap })
                      
            } else {
              window.alert('EthSwap contract not deployed to detected network.')
            }

            this.setState({ loading: false })
          }

          async loadWeb3() {
            
            if (window.ethereum) {
              window.web3 = new Web3(window.ethereum)
              await window.ethereum.enable()
            }
            else if (window.web3) {
              window.web3 = new Web3(window.web3.currentProvider)
            }
            else {
              window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
            }
         
        }



  buyTokens = (etherAmount) => {
    this.setState({ loading: true })
    this.state.ethSwap.methods.buyTokens().send({ value: etherAmount, from: this.state.account }).on('transactionHash', (hash) => {
    this.setState({ loading: false })
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      token: {},
      ethSwap: {},
      ethBalance: '0',
      tokenBalance: '0',
      output: '0',
      loading: false
    }

  }

  render() {
    return (

          <form className="mb-3" onSubmit={(event) => {
              event.preventDefault()
              
                let etherAmount
                etherAmount = this.input.value.toString()
                etherAmount = window.web3.utils.toWei(etherAmount, 'Ether')
                this.buyTokens(etherAmount)
                
              }
            }>
            

            <div>
              <label className="float-left"><b>ETH</b></label>
              <span className="float-right text-muted">
                User Balance: {window.web3.utils.fromWei(this.state.ethBalance, 'Ether')}
              </span>
            </div>
            <div className="input-group mb-4">
              <input
                type="text"
                onChange={(event) => {
                  const etherAmount = this.input.value.toString()
                  this.setState({
                    output: etherAmount * 5000 - etherAmount *5000 /100
                     })
                  
                }}
                ref={(input) => { this.input = input }}
                className="form-control form-control-lg"
                placeholder="0"
                required />
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
                Remaining Supply: {window.web3.utils.fromWei(this.state.tokenBalance, 'Ether')}
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
          </form>

    );
  }
}

export default BuyForm;
