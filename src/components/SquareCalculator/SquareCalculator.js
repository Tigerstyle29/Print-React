import React, { useState } from 'react'
import styled from 'styled-components'

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

  const handleWidthChange = e => setWidth(e.target.value)
  const handleHeightChange = e => setHeight(e.target.value)
  const handleDiameterChange = e => setDiameter(e.target.value)

  return (
    <CalculatorContainer>
      <Heading>Площадь</Heading>
      <Container>
      <Heading>Выберите формат</Heading>
        <ButtonGroup>
          <Button onClick={() => calculateArea('A1')}>A1</Button>
          <Button onClick={() => calculateArea('A2')}>A2</Button>
          <Button onClick={() => calculateArea('A3')}>A3</Button>
          <Button onClick={() => calculateArea('A4')}>A4</Button>
          <Button onClick={() => calculateArea('A5')}>A5</Button>
          <Button onClick={() => calculateArea('A6')}>A6</Button>                
        </ButtonGroup>
      </Container>
  
      <InputGroup>
      <Heading>Или укажите размер</Heading>
        <ContainerWrapper>
          <InputContainer>
            <label htmlFor="width">Ширина</label>
            <InputField type="number" id="width" value={width} onChange={handleWidthChange} />
          </InputContainer>
          <InputContainer>
            <label htmlFor="height">Высота</label>
            <InputField type="number" id="height" value={height} onChange={handleHeightChange} />
          </InputContainer>
          <InputContainer>
            <label htmlFor="diameter">Диаметр</label>
            <InputField type="number" id="diameter" value={diameter} onChange={handleDiameterChange} />
          </InputContainer>
        </ContainerWrapper>
      </InputGroup>
      <InputSquare>
          <InputField type="text" id="square-cm" value={area} readOnly />
          <label htmlFor="square-cm">См<sup>2</sup></label>
        </InputSquare>
    </CalculatorContainer>
  )
}

const CalculatorContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: 2px solid #ddd; 
`

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #555;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 auto;
`
export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  color: #fff;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  background-color: #FFA940;

  &:hover {
    background-color: #FFC069;
  }
`

export const InputSquare = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  
  Input {
    width: 56px;
  }

  label {
    margin-left: 10px;
    font-weight: bold;
  }
`

export const InputField = styled.input`
  width: 50px;
  padding: 8px;
  border: 1px solid #D9D9D9;
  border-radius: 6px;
  outline: none;

  &:hover,
  &:focus {
    border-color: #FA8C16;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 20px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-right: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;
  border: 2px solid #ddd;

  label {
    text-align: center;
    margin-bottom: 5px;
  }

  &:last-child {
    margin-right: 0;
  }
`

export const Span = styled.span`
  margin-left: 5px;
  color: #666;
`

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default SquareCalculator