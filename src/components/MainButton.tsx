import { ReactNode } from "react";
import Button from "@mui/material/Button";

type MainButtonProps = {
  text: string;
  icon?: ReactNode;
  size?: "small" | "medium" | "large";
  color?: "error" | "primary" | "secondary";
  onClick: () => void;
};

export const MainButton = ({
  size = "medium",
  text,
  onClick,
  color,
  icon = null,
}: MainButtonProps) => {
  return (
    <Button
      color={color}
      size={size}
      variant="outlined"
      startIcon={icon}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
