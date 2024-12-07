import { createContext, useState } from "react";
import "./App.css";
import Alert from "./components/alert/Alert";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import LearnState from "./components/state/LearnState";
import Test from "./components/test/Test";
import LearnUseCallback from "./components/useCallback/LearnUseCallback";
import LearnEffect from "./components/useEffect/LearnEffect";
import LearnUseMemo from "./components/useMemo/LearnUseMemo";
import LearnUseReducer from "./components/useReducer/LearnUseReducer";
import LearnUseRef from "./components/useRef/LearnUseRef";
import AlertProvider from "./components/alert/AlertContext";
import CustomHook from "./components/customHook/CustomHook";

// export const AlertContext = createContext();

function App() {
  const getAge = (tariq) => {
    //  console.log(tariq);
  };
  // const [alert, setAlert] = useState(false);

  // const changeAlert = () => {
  //   setAlert((prev) => !prev );
  // }

  return (
    <div className="App">
      {/* <AlertContext.Provider value={alert}> */}
      {/* <AlertProvider> */}
        {/* <Header /> */}
        {/* <Test name={'Ani'} age={23} surname='Zakaryan' address='somewhere' callbackForAge={getAge}/> */}
        {/* <LearnState/> 
      <LearnEffect/> */}
        {/* <LearnUseRef/>  */}
        {/* {<LearnUseCallback/>} */}
        {/* <LearnUseMemo/> */}
        {/* <LearnUseReducer/> */}
        {/* <Alert /> */}
        {/* <Main toggle={changeAlert} /> */}
        {/* <Main />
      </AlertProvider> */}
      {/* </AlertContext.Provider> */}
      {/* <CustomHook /> */}
    </div>
  );
}

export default App;
