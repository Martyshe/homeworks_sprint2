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
        color: "green", // основной цвет для track и rail (если нужно)

        "& .MuiSlider-rail": {
          backgroundColor: "white", // сама полоска — белая
          opacity: 1,
        },
        "& .MuiSlider-track": {
          border: "2px solid #01CB22", // зелёная граница у трека
        },
        "& .MuiSlider-thumb": {
          backgroundColor: "white", // тело бегунка белое
          border: "2px solid #01CB22", // зелёная рамка вокруг бегунка
          width: 24,
          height: 24,
          boxShadow: "none", // убрать стандартную тень, если есть
          position: "relative",

          "&::before": {
            // внутренняя точка
            content: '""',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, 50%)",
            width: 8, // размер точки
            height: 8,
            borderRadius: "50%",
            backgroundColor: "#01CB22", // цвет точки
          },
        },
      }}
      value={props.value}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
