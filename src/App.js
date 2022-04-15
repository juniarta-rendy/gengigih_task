import logo from './logo.svg';
import './App.css';
import {HomeworkTwo} from './pages/homework-2';

function App() {
  const secret_api_key=process.env.SPOTIFY_API_KEY;
  console.log(secret_api_key);
  return (
    <div className="App">
      <HomeworkTwo />
    </div>
  );
}

export default App;
