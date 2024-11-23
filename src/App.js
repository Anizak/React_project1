import "./App.css";
import Header from "./components/header/Header";
import Test from "./components/test/Test";


function App() {
  const getAge = (tariq)=>{
     console.log(tariq);

  }
  return (
    <div className="App">
      <Header />
      <Test name={'Ani'} age={25} surname='Zakaryan' address='masiv' callbackForAge={getAge}/>
      
    </div>
  );
}

export default App;
