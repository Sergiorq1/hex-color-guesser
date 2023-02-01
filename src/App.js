import './App.css';
import { useState } from 'react';

function App() {
  const [box1, setBox1] = useState('')
  const [box2, setBox2] = useState('')  
  const [box3, setBox3] = useState('')
  const [isClicked, setClicked] = useState(false)
  const [current, setCurrent] = useState('')
  
  const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
  const randomHex1 = "#" + randomColor1

  const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
  const randomHex2 = "#" + randomColor2

  const randomColor3 = Math.floor(Math.random()*16777215).toString(16);
  const randomHex3 = "#" + randomColor3



  function PickBox(box1, box2, box3){
    const arr = [box1, box2, box3]
    const randBox = arr[Math.floor(Math.random() * arr.length)]
    setCurrent(randBox)
  }

  function RandomizeBoxes(box1, box2, box3) {
    box1 = randomHex1
    setBox1(box1)
    box2 = randomHex2
    setBox2(box2)
    box3 = randomHex3
    setBox3(box3)
    PickBox(box1,box2,box3)
    setClicked(false)
  }

  if (box1 === '') {
    RandomizeBoxes(box1, box2, box3)
    setBox1(randomHex1)
    setBox2(randomHex2)
    setBox3(randomHex3)
  }
  return (
    <div className="App">
      <div className='boxes'>
        <div 
          style={{ backgroundColor: box1 }} 
          className='left box'
          onClick={() => setClicked(box1)}
        />
        <div 
          style={{ backgroundColor: box2 }} 
          className='center box'
          onClick={() => setClicked(box2)}
        />
        <div 
          style={{ backgroundColor: box3 }} 
          className='right box'
          onClick={() => setClicked(box3)}
        />
      </div>
      <div className='words'>
        <p>Click the swatch that matches: {current}</p>
        <div>
          <p>{isClicked === current ? 'Correct' : isClicked === false ? '' : "Incorrect"}</p>
        </div>
        
        <button
          //change all three box colors
          onClick={() => RandomizeBoxes(box1, box2, box3)}
        >
        Play again
        </button>
      </div>
    </div>
  );
}

export default App;
