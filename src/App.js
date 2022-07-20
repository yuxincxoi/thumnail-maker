import icon_blackwhite from "./blackwhite.png";
import icon_color from "./color2.png";
import { useState } from "react";
import "./App.css";

function App() {
  const back = document.querySelector(".thumbnail");
  const [gradient, setGradient] = useState("");
  const [color, setColor] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeSubtitle = (e) => setSubtitle(e.target.value);
  const randomRgb = () => {
    let rgb = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;

    return rgb;
  };
  const changeColor = () => {
    const randomColor = randomRgb();

    setColor(randomColor);
    back.style.background = color;
  };
  const changeGradient = () => {
    const firstColor = randomRgb();
    const secondColor = randomRgb();
    const gradientColor = `linear-gradient(45deg, ${firstColor}, ${secondColor})`;

    setGradient(gradientColor);
    back.style.background = gradient;
  };
  return (
    <div>
      <h1 className="title">Thumbnail Maker</h1>
      <div className="thumbnail">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
      <div className="input-title">
        <input onChange={onChangeTitle} placeholder="제목을 입력하세요 !" value={title} type="text"></input>
        <input onChange={onChangeSubtitle} placeholder="내용을 입력하세요 !" value={subtitle} type="text"></input>
      </div>
      <div className="buttons">
        <button onClick={changeGradient}><img src={icon_color} alt="" /></button>
        <button onClick={changeColor}>only ONE Color</button>
        <button><img src={icon_blackwhite} alt=""/></button>
      </div>
    </div>
  );
}

export default App;
