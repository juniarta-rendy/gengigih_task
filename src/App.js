import logo from './logo.svg';
import './App.css';
import {HomeworkThree} from './pages/homework-3';

function App() {
  const secret_api_key=process.env.SPOTIFY_API_KEY;
  console.log(secret_api_key);
  return (
    <div className="App">
      <HomeworkThree />
    </div>
  );
}

export default App;
