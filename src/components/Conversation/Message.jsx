import React from "react";

import { Box, Stack } from "@mui/material";

import { Chat_History } from "../../data";
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  Timeline,
} from "./MsgTypes";

const Message = () => {
  return (
    <Box p={2.5} pb={1}>
      <Stack>
        {Chat_History.map((el, index) => {
          switch (el.type) {
            case "divider":
              return <Timeline key={index} el={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  return (
                    <MediaMsg
                      key={index}
                      el={el}
                      chatData={{ arr: Chat_History, index }}
                    />
                  );
                case "doc":
                  return (
                    <DocMsg
                      key={index}
                      el={el}
                      chatData={{ arr: Chat_History, index }}
                    />
                  );
                case "link":
                  return (
                    <LinkMsg
                      key={index}
                      el={el}
                      chatData={{ arr: Chat_History, index }}
                    />
                  );
                case "reply":
                  return (
                    <ReplyMsg
                      key={index}
                      el={el}
                      chatData={{ arr: Chat_History, index }}
                    />
                  );
                default:
                  return (
                    <TextMsg
                      key={index}
                      el={el}
                      chatData={{ arr: Chat_History, index }}
                    />
                  );
              }
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
