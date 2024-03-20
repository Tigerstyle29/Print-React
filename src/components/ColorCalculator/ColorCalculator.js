import React, { useState } from 'react'
import './ColorCalculator.css'

function ColorCalculator() {
  const [inputCode, setInputCode] = useState('')
  const [color, setColor] = useState('')
  const [colorType, setColorType] = useState('pantone')

  const pantoneColors = {
    "186": "FF0000", "187": "9E2E2E", "188": "691919", "189": "FFB2B2", "190": "CC7A7A",
    "191": "8A4C4C", "192": "E63900", "193": "991F00", "194": "4C1300", "195": "FFA8A8",
    "196": "E67575", "197": "B24C4C", "198": "660000", "199": "FF7272", "200": "E63939",
    "201": "990000", "202": "4C0000", "203": "FF4A4A", "204": "E62626", "205": "990000",
  };

  const cmykColors = {
    "0,100,100,0": "FF0000", "10,100,100,0": "990000", "10,100,100,20": "800000", "20,100,100,0": "CC0000",
    "30,100,100,0": "FF1919", "40,100,100,0": "FF4D4D", "50,100,100,0": "FF6666", "60,100,100,0": "FF9999",
    "70,100,100,0": "FFB2B2", "80,100,100,0": "FFCCCC", "90,100,100,0": "FFE6E6", "100,90,0,0": "660000",
    "100,80,0,0": "800000", "100,70,0,0": "990000", "100,60,0,0": "B20000", "100,50,0,0": "CC0000",
    "100,40,0,0": "E60000", "100,30,0,0": "FF0000", "100,20,0,0": "FF1919", "100,10,0,0": "FF6666",
  };

  const updateColor = () => {
    if (colorType === 'pantone') {
      if (pantoneColors.hasOwnProperty(inputCode)) {
        setColor(pantoneColors[inputCode])
      } else {
        alert("Цвет не найден!")
      }
    } else if (colorType === 'cmyk') {
      if (cmykColors.hasOwnProperty(inputCode)) {
        setColor(cmykColors[inputCode])
      } else {
        alert("Цвет не найден!")
      }
    }
  };

  return (
    <div className="PrintColor">
      <div className="container">
        <h1>Система цвета</h1>
        <p>Выберите тип цвета и введите его значение (например, Pantone: 186 или CMYK: 0,100,100,0) и нажмите кнопку "Ввод":</p>
        <select
          value={colorType}
          onChange={(e) => setColorType(e.target.value)}
          className="select"
        >
          <option value="pantone">Pantone</option>
          <option value="cmyk">CMYK</option>
        </select>
        <input
          type="text"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          placeholder={`Введите значение ${colorType}`}
          className="input"
        />
        <button onClick={updateColor} className="button">Ввод</button>
        <div
          className="colorDisplay"
          style={{ backgroundColor: `#${color}` }}
        ></div>
      </div>
    </div>
  );
}

export default ColorCalculator
