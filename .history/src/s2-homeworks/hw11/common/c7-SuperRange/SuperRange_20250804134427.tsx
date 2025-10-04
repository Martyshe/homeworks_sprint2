import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      defaultValue={30}
      sx={{
        width: 3000,
        color: "success.main",
        "& .MuiSlider-thumb": {
          borderRadius: "10px",
        },
      }}
      value={props.value}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
