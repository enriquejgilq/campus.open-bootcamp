import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactContainer from './components/container/contact_details'; 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/** <Greeting name="Enrique"></Greeting>
        <GreetingF name="Enrique"></GreetingF>
        <TaskListComponent></TaskListComponent>*/}
        <ContactContainer></ContactContainer>
      </header>
    </div>
  );
}

export default App;
