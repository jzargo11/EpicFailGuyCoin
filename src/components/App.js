import React, { Component } from 'react'
import Main from './Main'
import './App.css'

class App extends Component {

    constructor(props) {
    super(props)
    this.state = {

      loading: false
    }

  }
  
    render() {
    let content
    if(this.state.loading) {
      content = <p id="loader" className="text-center">Loading...</p>
    } else {
      content = <Main/>
    }

    return (
      <div>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '600px' }}>
              <div className="content mr-auto ml-auto">

                {content}

              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }

}

export default App;

