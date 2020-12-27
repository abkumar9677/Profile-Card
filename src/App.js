import './App.css';
import pic from './profilepic.jpg';
import React from 'react';
//import ReactDOM from 'react-dom';
// const element = <img src="/src/profilepic.jpg" alt="ProfilePic" />;
// ReactDOM.render(element,document.getElementById('photo'));
function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      {
        className: "prof"
      },
       React.createElement(
        "h1",
        {
          style: {
            color: "white"
          }
        },
        "Profile Card"
      )
    ),
    React.createElement(
      "div",
      {
        className: "profilediv"
      },
      React.createElement(
        "div",
        {
          className: "pic"
        },
        React.createElement("img", {
          src: pic,
          alt: "profilepic"
        })
      ),
      React.createElement(
        "div",
        {
          style: {
            textAlign: "center",
            marginTop: "50px"
          }
        },
        React.createElement("span", null, "P"),
        React.createElement("span", null, "R"),
        React.createElement("span", null, "O"),
        React.createElement("span", null, "G"),
        React.createElement("span", null, "R"),
        React.createElement("span", null, "A"),
        React.createElement("span", null, "M"),
        React.createElement("span", null, "M"),
        React.createElement("span", null, "E"),
        React.createElement("span", null, "R")
      )
    )
  );

}

export default App;
