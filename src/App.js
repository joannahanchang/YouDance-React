// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

// import Header from './components/HeaderComponent.js';
// import Welcome from './components/WelcomeComponent.js';
// import Carousel from './components/CarouselComponent.js';
// import Footer from './components/FooterComponent.js';
// import Profile from './components/ProfileComponent';
// import { BrowserRouter } from 'react-router-dom';
// import { Switch, Route, Redirect } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;

// class App extends Component {
//   render() {
//       return (
//           <BrowserRouter>
//           <div className="App">
//               <Main />
//           </div>
//           </BrowserRouter>
//       );
//   };
// }

// export default App;


// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Header />
//         <Welcome />
//         <Carousel />
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;