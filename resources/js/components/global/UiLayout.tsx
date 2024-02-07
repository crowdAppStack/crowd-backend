import React from "react"
import { Sheet } from "@mui/joy"

type LayoutProps = {
  children: React.ReactNode;
};

export const UiLayout: React.FC<LayoutProps> = (props) => {
  const { children } = props
  return (
    <Sheet
      sx={{
        maxWidth: 1024,
        mx: 'auto',
        mt: 2,
      }}
    >
      {children}
    </Sheet>
  )
}