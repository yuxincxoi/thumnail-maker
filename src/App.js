import icon_blackwhite from "./blackwhite.png";
import icon_color from "./color2.png";
import { useState } from "react";
import "./App.css";

function App() {
  // background
  const back = document.querySelector(".thumbnail");
  const [gradient, setGradient] = useState("");
  const [color, setColor] = useState("");
  const [img, setImg] = useState("");
  const randomRgb = () => {
    let rgb = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    return rgb;
  };
  const changeImg = () => {
    let imgUrl = prompt("이미지 URL을 입력해주세요 !");
    setImg(imgUrl);
    back.style.background = `url(${img})`;
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

  // title
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeSubtitle = (e) => setSubtitle(e.target.value);

  // font-color
  const [isBlack, setIsBlack] = useState(false);
  const handleFontColor = () => setIsBlack((prev) => !prev);

  // shadow
  const [shadow, setShadow] = useState(false);
  const handleShadow = () => setShadow((prev) => !prev);
  
  return (
    <div>
      <h1 className="title">Thumbnail Maker</h1>
      <div className="thumbnail">
        <h1 className={(isBlack ? 'font-black' : 'font-white') + (shadow ? ' shadow' : '')}>{title}</h1>
        <h3 className={(isBlack ? 'font-black' : 'font-white') + (shadow ? ' shadow' : '')}>{subtitle}</h3>
      </div>
      <div className="input-title">
        <input onChange={onChangeTitle} placeholder="제목을 입력하세요 !" value={title} type="text"></input>
        <input onChange={onChangeSubtitle} placeholder="내용을 입력하세요 !" value={subtitle} type="text"></input>
      </div>
      <div className="buttons">
        <button onClick={changeGradient}><img src={icon_color} alt="" /></button>
        <button onClick={changeColor}>Solid Color</button>
        <button onClick={changeImg}>Image URL</button>
        <button onClick={handleFontColor}><img src={icon_blackwhite} alt=""/></button>
        <button onClick={handleShadow}>Shadow</button>
      </div>
    </div>
  );
}

export default App;
