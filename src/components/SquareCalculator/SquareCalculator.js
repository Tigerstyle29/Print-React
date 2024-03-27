import React, { useState } from 'react'
import './SquareCalculator.css'

function SquareCalculator() {
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [diameter, setDiameter] = useState('')
  const [area, setArea] = useState('')

  const calculateArea = (size) => {
    let calculatedArea;
    switch (size) {
      case 'A1':
          calculatedArea = 594 * 841 / 10000 
          break
      case 'A2':
          calculatedArea = 420 * 594 / 10000
          break
      case 'A3':
          calculatedArea = 297 * 420 / 10000
          break
      case 'A4':
          calculatedArea = 210 * 297 / 10000
          break
      case 'A5':
          calculatedArea = 148 * 210 / 10000
          break
      case 'A6':
          calculatedArea = 105 * 148 / 10000
          break
      default:
          calculatedArea = 0
          break
    }
    setArea(calculatedArea.toFixed(2)) 
  }

  const updateArea = () => {
    let calculatedArea
    if (width && height) {
      calculatedArea = width * height
    } else if (diameter) {
      const radius = diameter / 2
      calculatedArea = Math.PI * Math.pow(radius, 2)
    } else {
      calculatedArea = 0
    }
    setArea(calculatedArea.toFixed(2))
  };

  return (
    <div className="calculator">
      <h2>Площадь</h2>
      <div className="container">
        <div className="input-square">
          <label htmlFor="square-cm">См<sup>2</sup></label>
          <input type="text" id="square-cm" value={area} readOnly />
        </div>
        <div className='bnt-format'>
          <button className='btn-format__item' onClick={() => calculateArea('A1')}>A1</button>
          <button className='btn-format__item' onClick={() => calculateArea('A2')}>A2</button>
          <button className='btn-format__item' onClick={() => calculateArea('A3')}>A3</button>
          <button className='btn-format__item' onClick={() => calculateArea('A4')}>A4</button>
          <button className='btn-format__item' onClick={() => calculateArea('A5')}>A5</button>
          <button className='btn-format__item' onClick={() => calculateArea('A6')}>A6</button>                
        </div>
      </div>

      <div className="input-group">
        <div className="input-container">
          <label htmlFor="width">Ширина</label>
          <input type="number" id="width" value={width} onChange={(e) => setWidth(e.target.value)} />
        </div>
        <div className="input-container">
          <label htmlFor="height">Высота</label>
          <input type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
        <div className="input-container">
          <label htmlFor="diameter">Диаметр</label>
          <input type="number" id="diameter" value={diameter} onChange={(e) => setDiameter(e.target.value)} />
        </div>
      </div>
      <div className='btn'>
        <button className="btn-item" onClick={updateArea}>Рассчитать площадь</button>
      </div>
    </div>
  );
}

export default SquareCalculator