import { useState } from "react";
const Logo = () => {
  const [list, setList] = useState([
    {
      name: "xiaomi",
      options: [
        "i",
        "r",
        "i",
        "e",
        "a",
        "o",
        "w",
        "c",
        "m",
        "o",
        "x",
        "l",
        "u",
        "h",
      ],
      answer: [".", ".", ".", ".", ".", "."],
    },
    {
      name: "amazon",
      options: [
        "b",
        "p",
        "m",
        "a",
        "z",
        "v",
        "e",
        "a",
        "i",
        "o",
        "o",
        "n",
        "n",
        "a",
      ],
      answer: [".", ".", ".", ".", ".", "."],
    },
    {
      name: "apple",
      options: [
        "l",
        "a",
        "e",
        "c",
        "p",
        "p",
        "h",
        "v",
        "o",
        "w",
        "i",
        "q",
        "z",
        "e",
      ],
      answer: [".", ".", ".", ".", "."],
    },
    {
      name: "atari",
      options: [
        "a",
        "u",
        "w",
        "i",
        "r",
        "y",
        "t",
        "e",
        "i",
        "n",
        "q",
        "a",
        "e",
        "i",
      ],
      answer: [".", ".", ".", ".", "."],
    },
    {
      name: "avast",
      options: [
        "u",
        "b",
        "x",
        "t",
        "z",
        "i",
        "s",
        "s",
        "a",
        "d",
        "w",
        "e",
        "v",
        "a",
      ],
      answer: [".", ".", ".", ".", "."],
    },
    {
      name: "beats",
      options: [
        "e",
        "p",
        "y",
        "k",
        "t",
        "a",
        "y",
        "n",
        "q",
        "w",
        "b",
        "b",
        "e",
        "s",
      ],
      answer: [".", ".", ".", ".", "."],
    },
    {
      name: "cisco",
      options: [
        "x",
        "t",
        "o",
        "y",
        "e",
        "b",
        "n",
        "w",
        "c",
        "q",
        "i",
        "c",
        "c",
        "s",
      ],
      answer: [".", ".", ".", ".", "."],
    },
    {
      name: "discord",
      options: [
        "o",
        "s",
        "a",
        "d",
        "r",
        "i",
        "w",
        "y",
        "c",
        "d",
        "e",
        "i",
        "n",
        "v",
      ],
      answer: [".", ".", ".", ".", ".", ".", "."],
    },
    {
      name: "facebook",
      options: [
        "a",
        "u",
        "e",
        "k",
        "o",
        "c",
        "f",
        "b",
        "e",
        "o",
        "n",
        "i",
        "o",
        "c",
      ],
      answer: [".", ".", ".", ".", ".", ".", ".", "."],
    },
    {
      name: "firefox",
      options: [
        "c",
        "r",
        "x",
        "r",
        "v",
        "o",
        "e",
        "f",
        "e",
        "i",
        "o",
        "u",
        "f",
        "i",
      ],
      answer: [".", ".", ".", ".", ".", ".", "."],
    },
    {
      name: "google",
      options: [
        "l",
        "p",
        "h",
        "b",
        "i",
        "n",
        "o",
        "o",
        "g",
        "e",
        "g",
        "o",
        "a",
        "p",
      ],
      answer: [".", ".", ".", ".", ".", "."],
    },
    {
      name: "instagram",
      options: [
        "r",
        "o",
        "n",
        "m",
        "a",
        "a",
        "g",
        "i",
        "t",
        "a",
        "c",
        "n",
        "s",
        "p",
      ],
      answer: [".", ".", ".", ".", ".", ".", ".", ".", "."],
    },
    {
      name: "logitech",
      options: [
        "l",
        "u",
        "g",
        "n",
        "o",
        "t",
        "o",
        "a",
        "i",
        "e",
        "c",
        "h",
        "c",
        "i",
      ],
      answer: [".", ".", ".", ".", ".", ".", ".", "."],
    },
    {
      name: "microsoft",
      options: [
        "r",
        "i",
        "s",
        "c",
        "c",
        "o",
        "a",
        "t",
        "i",
        "f",
        "o",
        "o",
        "u",
        "m",
      ],
      answer: [".", ".", ".", ".", ".", ".", ".", ".", "."],
    },
    {
      name: "playstation",
      options: [
        "i",
        "a",
        "a",
        "o",
        "o",
        "n",
        "y",
        "t",
        "t",
        "p",
        "a",
        "s",
        "l",
        "u",
      ],
      answer: [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    },
    {
      name: "reddit",
      options: [
        "p",
        "i",
        "a",
        "d",
        "d",
        "c",
        "e",
        "o",
        "n",
        "y",
        "d",
        "r",
        "i",
        "t",
      ],
      answer: [".", ".", ".", ".", ".", "."],
    },
    {
      name: "spotify",
      options: [
        "y",
        "u",
        "p",
        "n",
        "i",
        "f",
        "c",
        "o",
        "a",
        "t",
        "s",
        "i",
        "p",
        "o",
      ],
      answer: [".", ".", ".", ".", ".", ".", "."],
    },
    {
      name: "target",
      options: [
        "a",
        "v",
        "c",
        "r",
        "e",
        "i",
        "t",
        "a",
        "b",
        "g",
        "n",
        "u",
        "o",
        "t",
      ],
      answer: [".", ".", ".", ".", ".", "."],
    },
    {
      name: "tesla",
      options: [
        "j",
        "s",
        "r",
        "l",
        "e",
        "t",
        "a",
        "v",
        "e",
        "v",
        "o",
        "a",
        "c",
        "n",
      ],
      answer: [".", ".", ".", ".", "."],
    },
    {
      name: "twitter",
      options: [
        "r",
        "e",
        "y",
        "b",
        "t",
        "o",
        "e",
        "t",
        "r",
        "w",
        "w",
        "i",
        "i",
        "t",
      ],
      answer: [".", ".", ".", ".", ".", ".", "."],
    },
    {
      name: "ubisoft",
      options: [
        "n",
        "b",
        "o",
        "u",
        "s",
        "z",
        "u",
        "t",
        "b",
        "x",
        "c",
        "o",
        "i",
        "f",
      ],
      answer: [".", ".", ".", ".", ".", ".", "."],
    },
    {
      name: "vemio",
      options: [
        "v",
        "u",
        "o",
        "q",
        "m",
        "e",
        "w",
        "n",
        "p",
        "v",
        "i",
        "o",
        "r",
        "i",
      ],
      answer: [".", ".", ".", ".", "."],
    },
    {
      name: "whatsapp",
      options: [
        "p",
        "n",
        "t",
        "a",
        "a",
        "w",
        "u",
        "c",
        "p",
        "o",
        "s",
        "h",
        "a",
        "p",
      ],
      answer: [".", ".", ".", ".", ".", ".", ".", "."],
    },
  ]);

  const [popup, setPopup] = useState(false);
  const [done, setDone] = useState(false);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);

  function clicked(e) {
    setPopup(true);
    setIndex(e.target.attributes.alt.value);

    // setAnswer(e.target.attributes.alt.value.split("").map((x) => "."));
  }

  function close() {
    setPopup(false);
  }

  function select(e) {
    if (e.target.innerText === ".") {
      return;
    }

    let arr = [...list];
    for (let i = 0; i < arr[index].answer.length; i++) {
      if (arr[index].answer[i] === ".") {
        arr[index].answer[i] = e.target.attributes.alt.value;
        break;
      }
    }

    arr[index].options[e.target.id] = ".";

    if (arr[index].answer.join("") === arr[index].name) {
      arr[index].solved = true;
      const newScore = score + 1;
      setScore(newScore);
      close();

      if (score == list.length) {
        setDone(true);
      }
    }

    setList(arr);
    arr = [];
  }

  function remove(e) {
    if (e.target.innerText === ".") {
      return;
    }
    let arr = [...list];
    arr[index].answer[e.target.attributes.index.value] = ".";

    arr[index].options[arr[index].options.indexOf(".")] =
      e.target.attributes.alt.value;

    setList(arr);
    arr = [];
  }

  return (
    <div>
      <h3>your score is : {score}</h3>
      <div className="list">
        {list.map((l, i) => {
          return l.solved ? (
            <div className="solvLogo" key={l.name}>
              <img
                src={require(`./logos/${l.name}.png`).default}
                alt={l.name}
              />
              <p>{l.name}</p>
            </div>
          ) : (
            <div className="logo" key={l.name} alt={i} onClick={clicked}>
              <img src={require(`./logos/${l.name}.png`).default} alt={i} />
            </div>
          );
        })}
      </div>
      {popup && (
        <div className="modal">
          <div className="modalContent">
            <p onClick={close}>X</p>
            <img
              src={require(`./logos/${list[index].name}.png`).default}
              alt=""
            />
            <div className="name">
              {list[index].answer.map((x, i) => (
                <div
                  className="input"
                  key={i}
                  alt={x}
                  index={i}
                  onClick={remove}
                >
                  {x}
                </div>
              ))}
            </div>
            <div className="options">
              {list[index].options.map((x, i) => (
                <div className="op" key={i} alt={x} id={i} onClick={select}>
                  {x}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {done && (
        <div className="modal">
          <div className="modalContent">
            <div className="gif">
              <iframe src="https://giphy.com/embed/fWBiMUGXGHBECOJ50Q/video" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
