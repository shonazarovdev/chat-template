import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import {
  Camera,
  File,
  Image,
  LinkSimple,
  Microphone,
  PaperPlaneRight,
  Smiley,
  Sticker,
  User,
} from "phosphor-react";
import React from "react";

import {
  Box,
  Fab,
  Grow,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

const StyledInput = styled(TextField)({
  "& .MuiInputBase-input": {
    paddingBlock: 12,
  },
});

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact",
  },
];

const ChatInput = ({ setOpenPicker, value, setValue }) => {
  const [openActions, setOpenActions] = React.useState(false);

  return (
    <StyledInput
      fullWidth
      placeholder={"Write a message..."}
      variant="filled"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      InputProps={{
        disabledunderline: "true",
        startAdornment: (
          <Stack sx={{ width: "max-content" }}>
            <Stack
              sx={{
                position: "relative",
                display: openActions ? "inline-block" : "none",
              }}
            >
              {Actions.map((el) => (
                <Tooltip key={el.title} title={el.title} placement={"right"}>
                  <Fab
                    sx={{
                      position: "absolute",
                      top: -el.y,
                      backgroundColor: el.color,
                    }}
                  >
                    {el.icon}
                  </Fab>
                </Tooltip>
              ))}
            </Stack>
            <InputAdornment position={"end"}>
              <IconButton onClick={() => setOpenActions((prev) => !prev)}>
                <LinkSimple />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <InputAdornment position={"end"}>
            <IconButton onClick={() => setOpenPicker((prev) => !prev)}>
              <Smiley />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

const Footer = () => {
  const theme = useTheme();
  const [openPicker, setOpenPicker] = React.useState(false);
  const [fieldValue, setFieldValue] = React.useState("");
  // const [fieldMode, setFieldMode] = React.useState("micro");

  const handleChange = (val) => {
    setFieldValue(val);
  };

  const handleSend = () => {
    setFieldValue("");
  };

  return (
    <Box
      p={2}
      sx={{
        height: 100,
        width: "100%",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <Stack sx={{ width: "100%" }}>
          <Box
            sx={{
              display: openPicker ? "inline" : "none",
              zIndex: 10,
              position: "fixed",
              bottom: 81,
              right: 100,
            }}
          >
            <Picker
              theme={theme.palette.mode}
              data={data}
              onEmojiSelect={console.log}
            />
          </Box>
          <ChatInput
            value={fieldValue}
            setValue={handleChange}
            setOpenPicker={setOpenPicker}
          />
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <IconButton
            sx={(theme) => ({
              height: 48,
              width: 48,
              borderRadius: "20rem",
              backgroundColor:
                theme.palette.mode === "light" ? "#f2f3f5" : "#252c35",
              position: "relative",
            })}
            onClick={handleSend}
          >
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                opacity: fieldValue.length === 0 ? 1 : 0,
              }}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Grow in={fieldValue.length === 0}>
                <Microphone />
              </Grow>
            </Stack>
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                opacity: fieldValue.length !== 0 ? 1 : 0,
              }}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Grow in={fieldValue.length !== 0}>
                <PaperPlaneRight />
              </Grow>
            </Stack>
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
