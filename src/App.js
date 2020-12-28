import './App.css';
import pic from './profilepic.jpg';
import React from 'react';
//import ReactDOM from 'react-dom';

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
      ),
      React.createElement("p", {
        style: {
          textAlign: "justify",
          margin:'5px'
        }
      },"Hey there!, It's Abhishek Kumar. A B.Tech CSE Student of SANSKRITI UNIVERSITY, MATHURA. I'm very fond of creating very different design for web designing. Currently, I'm learning Full Stack Development by upGrad. This is my only a profile card. For better ",
      React.createElement(
          "i",
          {
            style: {color:"blue"}
          },
          "#jaan_pehchaan"
        )," do visit to my profile by clicking the button view profile below.",
        React.createElement(
          "a",
          {
            href: "https://www.linkedin.com/in/abhishek-kumar-94b352188/"
          },
          React.createElement(
            "button",
            {
              className: "btn",
              style: {
                textDecoration: "none"
              }
            },
            "View Profile"
          )
        )
      )
    )
  );
}

export default App;
