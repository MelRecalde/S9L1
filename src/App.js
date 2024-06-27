import './App.css';
import ImageComponent from './components/ImageComponent';
import ButtonComponents from './components/ButtonComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ButtonComponents btn="CLICK HERE"/>
      <ImageComponent
      imgSrc="https://images.unsplash.com/photo-1593763803214-d8dd436d9717?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      imgAlt="Random Pic"
      imgWidth="300px" />
      </header>
      
      
    </div>
  );
}

export default App;
