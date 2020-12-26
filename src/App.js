import './App.css';
import pic from './profilepic.jpg'
// import React from 'react';
// import ReactDOM from 'react-dom';
// const element = <img src="/src/profilepic.jpg" alt="ProfilePic" />;
// ReactDOM.render(element,document.getElementById('photo'));
function App() {
  return (
    <>
      <div className="prof">
        <h1 style={{color: 'white'}}>Profile Card</h1>
      </div>
        {/* <h1 className="txt">Hello, It's Abhishek Kumar.</h1> */}
      <div className="profilediv">
        <div className="pic">
        <img src={pic} alt="profilepic" />
        </div>

        <div style={{textAlign: 'center'}}>
          <span>P</span> 
          <span>R</span> 
          <span>O</span> 
          <span>G</span> 
          <span>R</span>
          <span>A</span>
          <span>M</span>
          <span>M</span>
          <span>E</span>
          <span>R</span> 
        </div>
        <a href="https://github.com/abkumar9677">
        <i className="fa fa-github-alt fa-5x" style={{textAlign:'center'}}></i>
        </a>



      </div>  
           
    </>
  );
}

export default App;
