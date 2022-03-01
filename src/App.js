
import './App.css';
import imageInSrc from "./imageInSrc.PNG"
import imageInPublic from "./imageInPublic.PNG";
function App() {
  return (
    <div className="App">
      <div className='Named'>
        <h1>Mohamed Ben Kraiem</h1>
      
      <br />
      
        <img className='imageInSrc' src={imageInSrc} alt="" />
    <br />
     <img className='imageInPublic' src={imageInPublic} alt="" />
    </div>
    <iframe
    width="320" 
    height="240" 
    src="https://www.youtube.com/embed/Oo52vQyAR6w" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>
    </div>
  );
}

export default App;
