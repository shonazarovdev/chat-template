import React from "react";

import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Contact from "../../components/Contact";
import Conversation from "../../components/Conversation";
import Chats from "./Chats";

const GeneralApp = () => {
  const theme = useTheme();

  return (
    <Stack direction={"row"} overflow={"hidden"}>
      <Chats />

      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.default,
          overflow: "auto",
        }}
      >
        <Conversation />
      </Box>
      {/*<Contact />*/}
    </Stack>
  );
};

export default GeneralApp;
