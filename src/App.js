import icon_blackwhite from './blackwhite.png'
import icon_color from './color2.png'
import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState("");
  const [back, setBack] = useState("black");
  const onChange = (e) => setTitle(e.target.value);
  const changeColor = () => {
    const firstColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    const secondColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`

    setBack(`linear-gradient(45deg, ${firstColor}, ${secondColor})`)
  };
  console.log(title);
  return (
    <div className="App">
      <h1>Thumbnail Maker</h1>
      <div>
        <img alt="" style={{backgroundImage: `${back}`}} />
        <h1 className="title">{title}</h1>
      </div>
      <div>
        <input onChange={onChange} placeholder="제목을 입력하세요 !" value={title} type="text"></input>
      </div>
      <div>
        <button onClick={changeColor}><img src={icon_color} alt="" /></button>
        <button><img src={icon_blackwhite} alt=""/></button>
      </div>
    </div>
  );
}

export default App;
