import profileImg from './img/photo_2020-09-15_17-45-37.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Tatiana Perevozniuk</h2>
      <img src = {profileImg} alt = "profile-img"/>
    </div>
  );
}

export default App;
