import logo from './pfp.jpg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <body>
          <h1>PoC: Hello World - Alternative Assignment</h1>
          <p>Welcome to my <strong>Web</strong> site!
            Since I have not built a website before this is my alternative assignment page.</p>
          <h4>A little about myself: </h4>
          <p>My name is JJ Hartog and I am from Seattle, Washington (more specifically West Seattle).
            I am a CSSE major here at UWB and am currently in my 3rd year attending here with Senior standing.
            Whilst I have programmed a variety of backend and application specific projects, I have not done
            much work with web facing software so my knowledge of how websites work is half baked.
            Below is my profile picture I use for most of my accounts; this image is not unlike red glowing
            eyes, but in reality is a picture I took back in elementary school</p>
            <img src={logo} className="App-logo" alt="logo" />
          <p>Here is an unordered list of things that interest me the most:</p>
        </body>
      </header>
    </div>
  );
}

export default App;
