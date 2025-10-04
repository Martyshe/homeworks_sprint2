import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      //   sx={{
      //     width: 300,
      //     color: "#01CB22",
      //   }}
      sx={{
        color: "green", // основной цвет (для track и thumb, если не переопределить)
        "& .MuiSlider-rail": {
          backgroundColor: "white", // тело внутри
          opacity: 1, // чтобы не было полупрозрачным
        },
        "& .MuiSlider-track": {
          border: "2px solid green", // зелёная граница у трека
        },
        "& .MuiSlider-thumb": {
          backgroundColor: "green", // зелёный кружочек
          border: "2px solid green", // граница кружочка тоже зелёная
          // можешь задать размер, если хочешь:
          width: 20,
          height: 20,
        },
      }}
      value={props.value}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
