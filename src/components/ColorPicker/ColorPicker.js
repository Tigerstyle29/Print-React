import React, { useState } from "react";
import styled from "styled-components";

function ColorPicker() {
  const [inputCode, setInputCode] = useState("");
  const [color, setColor] = useState("");
  const [colorType, setColorType] = useState("pantone");

  const pantoneColors = {
    186: "FF0000",
    187: "9E2E2E",
    188: "691919",
    189: "FFB2B2",
    190: "CC7A7A",
    191: "8A4C4C",
    192: "E63900",
    193: "991F00",
    194: "4C1300",
    195: "FFA8A8",
    196: "E67575",
    197: "B24C4C",
    198: "660000",
    199: "FF7272",
    200: "E63939",
    201: "990000",
    202: "4C0000",
    203: "FF4A4A",
    204: "E62626",
    205: "990000",
  };

  const cmykColors = {
    "0,100,100,0": "FF0000",
    "10,100,100,0": "990000",
    "10,100,100,20": "800000",
    "20,100,100,0": "CC0000",
    "30,100,100,0": "FF1919",
    "40,100,100,0": "FF4D4D",
    "50,100,100,0": "FF6666",
    "60,100,100,0": "FF9999",
    "70,100,100,0": "FFB2B2",
    "80,100,100,0": "FFCCCC",
    "90,100,100,0": "FFE6E6",
    "100,90,0,0": "660000",
    "100,80,0,0": "800000",
    "100,70,0,0": "990000",
    "100,60,0,0": "B20000",
    "100,50,0,0": "CC0000",
    "100,40,0,0": "E60000",
    "100,30,0,0": "FF0000",
    "100,20,0,0": "FF1919",
    "100,10,0,0": "FF6666",
  };

  const updateColor = () => {
    if (colorType === "pantone") {
      if (pantoneColors.hasOwnProperty(inputCode)) {
        setColor(pantoneColors[inputCode]);
      } else {
        alert("Цвет не найден!");
      }
    } else if (colorType === "cmyk") {
      if (cmykColors.hasOwnProperty(inputCode)) {
        setColor(cmykColors[inputCode]);
      } else {
        alert("Цвет не найден!");
      }
    }
  };

  return (
    <PrintColorContainer>
      <Heading>Система цвета</Heading>
      <Paragraph>
        Выберите тип цвета и введите его значение (например, Pantone: 186 или
        CMYK: 0,100,100,0) и нажмите кнопку "Ввод":
      </Paragraph>
      <Select value={colorType} onChange={(e) => setColorType(e.target.value)}>
        <option value="pantone">Pantone</option>
        <option value="cmyk">CMYK</option>
      </Select>
      <Input
        type="text"
        value={inputCode}
        onChange={(e) => setInputCode(e.target.value)}
        placeholder={`Введите значение ${colorType}`}
      />
      <Button onClick={updateColor}>Ввод</Button>
      <ColorDisplay style={{ backgroundColor: `#${color}` }}></ColorDisplay>
    </PrintColorContainer>
  );
}

const PrintColorContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: 2px solid #ddd;

  select {
    &:hover,
    &:focus {
      border-color: #fa8c16;
    }
  }
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #555;
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  color: #000;
`;

const Select = styled.select`
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:hover,
  &:focus {
    border-color: #fa8c16;
  }
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  width: 97%;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:hover,
  &:focus {
    border-color: #fa8c16;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #ffa940;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ffc069;
  }
`;

const ColorDisplay = styled.div`
  margin-top: 20px;
  width: 100px;
  height: 100px;
  border: 1px solid #000;
`;

export default ColorPicker;
