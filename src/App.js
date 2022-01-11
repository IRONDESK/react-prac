import Button from "./Button";
import Home from "./Home";
import HelloMsg from "./HelloMsg";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState("");

  const onClick = () => { setValue((prev) => prev + 1) };
  const onChange = (e) => { setKeyword(e.target.value) };
  const onClick2 = () => { setShowing((prev) => !prev) };

  // console.log("여러번 실행됨");

  useEffect(() => {
    console.log("한번만 실행됨. 여기에 API 넣으면 딱 좋음");
    // 코드가 한 번만 실행되도록 보호해줌
  }, []); // 빈칸이면 한 번만 실행함

  useEffect(() => {
    if (keyword !== "" && keyword.length >3 ) {
      console.log("검색어는", keyword);
      // 코드가 한 번만 실행되도록 보호해줌
    }
  }, [keyword]); // 'keyword'가 변화할 때만 실행

  useEffect(() => {
    console.log("counter가 변했어요");
  }, [counter]); // 'counter'가 변화할 때만 실행


  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search Here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button onClick={onClick} text={"click!"}/>
      <Button text={"Continue"}/>
      <p>
        {showing ? <Hello /> : null}
        <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
      </p>

      <Home />
      <HelloMsg name="필승"/>
    </div>
  );
}

function Hello () {
  useEffect( () => {
    console.log("created :)")
  }, []);

  return <h1>Hello</h1>;
}

export default App;
