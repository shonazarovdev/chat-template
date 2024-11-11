import React from "react";

import { Box, Stack } from "@mui/material";

import Conversation from "../../components/Conversation";
import Chats from "./Chats";

const GeneralApp = () => {
  return (
    <Stack direction={"row"} overflow={"hidden"}>
      <Chats />

      <Box
        sx={(theme) => ({
          height: "100%",
          width: "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.default,
          overflow: "auto",
        })}
      >
        <Conversation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;
