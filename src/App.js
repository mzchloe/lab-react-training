import './App.css';
import { IdCard } from './components/IdCard/IdCard';
import { Greetings } from './components/Greetings/Greetings';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard
        firstName="John"
        lastName="Doe"
        gender="male"
        height={178}
        birth={new Date('1992-07-14').toDateString()}
        img="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        firstName="Obrien"
        lastName="Delores"
        gender="female"
        height={172}
        birth={new Date('1988-05-11').toDateString()}
        img="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h1>Greetings</h1>
      <Greetings lang="de" children="Ludwig" />
      <br></br>
      <Greetings lang="fr" children="François" />
    </div>
  );
}

export default App;
