import './App.css';
import { HomeworkOne } from './pages/homework-1';

function App() {
  const secret_api_key=process.env.SPOTIFY_API_KEY;
  console.log(secret_api_key);
  return (
    <div className="App">
      <HomeworkOne />
    </div>
  );
}

export default App;
