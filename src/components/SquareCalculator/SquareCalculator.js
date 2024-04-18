import React, { useState } from 'react';
import styled from 'styled-components';

function SquareCalculator() {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [diameter, setDiameter] = useState('');
  const [area, setArea] = useState('');

  const calculateArea = () => {
    if (width && height) {
      setArea((parseFloat(width) * parseFloat(height)).toFixed(2));
    } else if (diameter) {
      const radius = parseFloat(diameter) / 2;
      setArea((Math.PI * Math.pow(radius, 2)).toFixed(2));
    } else {
      setArea('');
    }
  };

  const handleFormatClick = (size) => {
    let calculatedArea;
    switch (size) {
      case 'A1':
        calculatedArea = 594 * 841 / 10000;
        break;
      case 'A2':
        calculatedArea = 420 * 594 / 10000;
        break;
      case 'A3':
        calculatedArea = 297 * 420 / 10000;
        break;
      case 'A4':
        calculatedArea = 210 * 297 / 10000;
        break;
      case 'A5':
        calculatedArea = 148 * 210 / 10000;
        break;
      case 'A6':
        calculatedArea = 105 * 148 / 10000;
        break;
      default:
        calculatedArea = 0;
        break;
    }
    setArea(calculatedArea.toFixed(2));
  };

  const handleWidthChange = (e) => {
    setWidth(e.target.value);
    calculateArea();
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
    calculateArea();
  };

  const handleDiameterChange = (e) => {
    setDiameter(e.target.value);
    calculateArea();
  };

  return (
    <CalculatorContainer>
      <Heading>Площадь</Heading>
      <Container>
        <Heading>Выберите формат:</Heading>
        <ButtonGroup>
          <Button onClick={() => handleFormatClick('A1')}>A1</Button>
          <Button onClick={() => handleFormatClick('A2')}>A2</Button>
          <Button onClick={() => handleFormatClick('A3')}>A3</Button>
          <Button onClick={() => handleFormatClick('A4')}>A4</Button>
          <Button onClick={() => handleFormatClick('A5')}>A5</Button>
          <Button onClick={() => handleFormatClick('A6')}>A6</Button>
        </ButtonGroup>
      </Container>
      <Heading>Или укажите размер:</Heading>

      <InputGroup>
        <InputContainer>
          <label htmlFor="width">Ширина</label>
          <InputField
            type="number"
            id="width"
            value={width}
            onChange={handleWidthChange}
            disabled={!!diameter}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="height">Высота</label>
          <InputField
            type="number"
            id="height"
            value={height}
            onChange={handleHeightChange}
            disabled={!!diameter}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="diameter">Диаметр</label>
          <InputField
            type="number"
            id="diameter"
            value={diameter}
            onChange={handleDiameterChange}
            disabled={!!width || !!height}
          />
        </InputContainer>
      </InputGroup>

      <InputSquare>
        <InputField type="text" id="square-cm" value={area} readOnly />
        <label htmlFor="square-cm">См<sup>2</sup></label>
      </InputSquare>
    </CalculatorContainer>
  );
}

const CalculatorContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: 2px solid #ddd;
`;

const Heading = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #555;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 auto;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  color: #fff;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  background-color: #ffa940;

  &:hover {
    background-color: #ffc069;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
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
`;

const InputField = styled.input`
  width: 50px;
  padding: 8px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  outline: none;

  &:hover,
  &:focus {
    border-color: #fa8c16;
  }
`

const InputSquare = styled.div`
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

export default SquareCalculator;
