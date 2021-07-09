import './App.sass';
import 'antd/dist/antd.css';
import RouterURL from './router/router';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //     <h1>antd version</h1>
  //     <Button type="primary">PRESS ME</Button>
  //     <DatePicker placeholder="select date" />
  //     </header>
  //   </div>
  // );

  return (
    <Router>
      <div className="App">
        <RouterURL></RouterURL>
      </div>
    </Router>
  )
}

export default App;
