import React from 'react';
import Nemo from './Nemo';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      count: 3,
    }

    this.div = React.createRef();
  }

  hoverEvent = (e) => {
    console.log(e);
    console.log(e.target);

    e.target.style.background = '#eee'
  }

  addNemo = () => {
    this.setState({count: this.state.count+1})
    console.log('add')
  }

  removeNemo = () => {
    if(this.state.count>0){
      this.setState({count: this.state.count-1});
    } else {
      window.alert('네모가 없어요!')
    }
  }

  componentDidMount() {
    this.div.current.addEventListener('mouseover',this.hoverEvent)
  }

  componentWillUnmount() {
    this.div.current.removeEventListener('mouseover', this.hoverEvent)
  }

    render() {
      const nemo_count = Array.from({length:this.state.count},(v,i)=>(i));
      console.log(nemo_count)
      return (
        <div className='App' ref={this.div}>
          <Nemo/>
        </div>
      );
    }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;