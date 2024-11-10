import React from "react";

import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Footer from "./Footer";
import Header from "./Header";
import Message from "./Message";

const Conversation = () => {
  const theme = useTheme();
  return (
    <Stack sx={{ height: "100%" }} maxHeight={"100vh"} width={"auto"}>
      <Header />

      <Box
        sx={{
          flexGrow: 1,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#f8faff"
              : theme.palette.background.paper,
          height: "100%",
          overflow: "auto",
        }}
        width={"100%"}
      >
        <Message />
      </Box>

      <Footer />
    </Stack>
  );
};

export default Conversation;
