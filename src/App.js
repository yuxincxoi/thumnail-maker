import icon_blackwhite from "./blackwhite.png";
import icon_color from "./color2.png";
import { useState } from "react";
import "./App.css";

function App() {
  const [back, setBack] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeSubtitle = (e) => setSubtitle(e.target.value);
  const changeColor = () => {
    const firstColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    const secondColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`

    setBack(`linear-gradient(45deg, ${firstColor}, ${secondColor})`)
  };
  return (
    <div>
      <h1 className="title">Thumbnail Maker</h1>
      <div className="thumbnail" style={{backgroundImage: `${back}`}}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
      <div className="input-title">
        <input onChange={onChangeTitle} placeholder="제목을 입력하세요 !" value={title} type="text"></input>
        <input onChange={onChangeSubtitle} placeholder="내용을 입력하세요 !" value={subtitle} type="text"></input>
      </div>
      <div className="buttons">
        <button onClick={changeColor}><img src={icon_color} alt="" /></button>
        <button><img src={icon_blackwhite} alt=""/></button>
      </div>
    </div>
  );
}

export default App;
