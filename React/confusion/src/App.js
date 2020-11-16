import React ,{ Component }  from 'react';
import Main from './components/MainComponent';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
// you can also use an ES6 class to define a component:

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
class App extends Component {

  render(){
  return (
    <BrowserRouter>
      <div>
         <Main/>
      </div>
    </BrowserRouter>

    );
  }
}
export default App;
