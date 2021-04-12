// import profileImg from './img/photo_2020-09-15_17-45-37.jpg';
import CardInfo from './components/CardInfo.js';
import './App.css';
import './assets/css/style.css';

const ANAKIN_IMAGE =
    "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE =
    "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const commentCards = [
    {
        id: 1345,
        nameUser: "Anakin skywalker",
        pseudonymUser: "@dart_vader",
        photoUser: ANAKIN_IMAGE,
        dateComment: "26 feb.",
        textComment: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
        imgComment: RAY_IMAGE
    }
]

function App() {
  return (
    <div className="App">
        {commentCards.map( card => <CardInfo {...card} key = {card.id}/>)}
    </div>
  );
}

export default App;
