import logo from './logo.svg';
import './App.css';
import ListItems  from './Component/ListItems';
import ConstComponent  from './Component/ConstComponent';
import PropValidator from './Component/PropValidatorEg';
import Person from './Component/Person';
import ControlledComponent from './Component/ControlledComponent';
import UnControlledComp from './Component/UnControlledComp';
import Timer from './Component/Timer ';
import ParentChildComp from './Component/ParentChildComp';
import ParentChildComp1 from './Component/ParentChildComp1';
import ParentChildComp2 from './Component/ParentChildComp2';
import ParentChildComp3 from './Component/ParentChildComp3';
import DisplayDataComp from './Component/DisplayDataComp';
import FormControlledComp from './Component/Forms/FormControlledComp';
import FormDropDownComp from './Component/Forms/FormDropDownComp';
import FormControllChkBox from './Component/Forms/FormControllChkBox';
import MultipleFormDataComp from './Component/Forms/MultipleFormDataComp';
import EventHandling from './Component/EventHandling';
function App() {
  return (
    <div>
       {/* <ListItems /> */}
      {/* <ConstComponent /> */}
      {/* <PropValidator /> */}
      {/*<Person name="John" age="68.89"/>  */}
      {/* <ControlledComponent />   */}
      {/* <Timer /> */}
      {/* <ParentChildComp /> */}
      {/* <ParentChildComp1 /> */}
      {/* <ParentChildComp2 /> */}
      {/* <ParentChildComp3 /> */}
      {/* <DisplayDataComp />   */}
      <FormControlledComp />
      <FormDropDownComp />
      <FormControllChkBox />
      <MultipleFormDataComp />
      <EventHandling/>
    </div>
  );
}
/*
class App extends Component {
  
  constructor(props) {
  
    // Calling super class constructor
    super(props);
      
    // Creating state
    this.state = {
      data: 'My name is User'
    }
      
    // Binding event handler
    this.handleEvent = this.handleEvent.bind(this);
  }
  
  handleEvent() {
    
    console.log(this.props);
    console.log("Hi");
  }
  /*
  handleEvent = () => {  
    console.log(this.props);  
  } */
 /* render() {
    return (
      <div >
        <input type="text" value={this.state.data} />
        <br></br> <br></br>
        <button onClick={this.handleEvent}>Please Click</button>
      </div>
    );
  }
}
  */
export default App;
