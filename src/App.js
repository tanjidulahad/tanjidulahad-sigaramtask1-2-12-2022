import logo from './logo.svg';
import './App.css';

function App() {
  const matrixStyle={
    minHeight:'50px',
    minWidth:'1px',
    backgroundColor:'blue',
    border:'1px solid black'
  }
  var clicked=0;
  var flag=[]
  const changeColor=(e)=>{
    flag.push(e.target);
    if(clicked<2){
      e.target.style.background='red'
      clicked =clicked+1;
    }
    else{
      e.target.style.background='red'
      flag.shift().style.background='blue'
    }
  }
  return (
    <div className="App">
      <h1>Matrix Game</h1>
      <div className="container">
        <div className="row">
          <div onClick={changeColor} className="col-3" style={matrixStyle}></div>
          <div onClick={changeColor} className="col-3" style={matrixStyle}></div>
          <div onClick={changeColor} className="col-3" style={matrixStyle}></div>
          <div onClick={changeColor} className="col-3" style={matrixStyle}></div>
          <div onClick={changeColor} className="col-3" style={matrixStyle}></div>
          <div onClick={changeColor} className="col-3" style={matrixStyle}></div>
          <div onClick={changeColor} className="col-3" style={matrixStyle}></div>
          <div onClick={changeColor} className="col-3" style={matrixStyle}></div>
          <div onClick={changeColor} className="col-3" style={matrixStyle}></div>
          <div onClick={changeColor} className="col-3" style={matrixStyle}></div>
          <div onClick={changeColor} className="col-3" style={matrixStyle}></div>
          <div onClick={changeColor} className="col-3" style={matrixStyle}></div>
          <div onClick={changeColor} className="col-3" style={matrixStyle}></div>
          <div onClick={changeColor} className="col-3" style={matrixStyle}></div>
          <div onClick={changeColor} className="col-3" style={matrixStyle}></div>
          <div onClick={changeColor} className="col-3" style={matrixStyle}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
