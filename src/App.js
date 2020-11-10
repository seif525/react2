import './App.css';

function App() {
  return (
    <div>
    <div Style ={{border="solid 1px black"}}  maxWidth ={"100vw"}>
    <h1 className={{title= Red}}>yor name here </h1>
    <br></br>
    <img src="/imageInSrc.jpg" alt="src"></img>
    <br></br>
    <img src ="/imageInPublic.jpg" alt="public"></img>
    </div> 
    <video width={320} height={240} controls>
     <source src="myVideo.mp4" type={"video/mp4"}></source>
    </video>
  
</div>
);}
export default App;
