import { Message_options } from "@data";
import { faker } from "@faker-js/faker";
import { DotsThreeVertical, File } from "phosphor-react";
import React from "react";

import {
  Box,
  Divider,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import {
  SvgIncomingMessageAppendix,
  SvgOutgoingMessageAppendix,
} from "@assets/Icons";

const DocMsg = ({ el, chatData }) => {
  const theme = useTheme();
  const docBoxBackgroundLight = el.incoming
    ? theme.palette.primary.main
    : theme.palette.grey["0"];
  const docBoxBackgroundDark = el.incoming
    ? alpha(theme.palette.grey["0"], 0.35)
    : theme.palette.grey["0"];

  return (
    <MessageLayout el={el} chatData={chatData}>
      {el.message ? (
        <Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{
              my: "0.1875rem",
              minWidth: "14rem",
            }}
          >
            <Stack
              sx={{
                mr: "0.65rem",
                pointerEvents: "none",
                backgroundColor:
                  theme.palette.mode === "light"
                    ? docBoxBackgroundLight
                    : docBoxBackgroundDark,
                borderRadius: "20rem",
                p: "0.45rem",
              }}
            >
              <File
                size={36}
                weight={"fill"}
                color={
                  el.incoming
                    ? theme.palette.background.default
                    : theme.palette.primary.main
                }
              />
            </Stack>
            <Stack sx={{ maxWidth: "92%", overflow: "hidden" }}>
              <Typography
                color={
                  el.incoming
                    ? theme.palette.text.primary
                    : theme.palette.grey["0"]
                }
                fontSize={"1rem"}
                lineHeight={"1.5rem"}
                fontWeight={500}
                sx={{
                  overflowX: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                Abstract.png
              </Typography>
              <Typography
                fontSize={".875rem"}
                lineHeight={".9375rem"}
                sx={{ whiteSpace: "nowrap" }}
                color={
                  el.incoming
                    ? theme.palette.text.primary
                    : theme.palette.grey["0"]
                }
              >
                {el.size}
              </Typography>
            </Stack>
          </Stack>
          <TextMessageLayout el={el} />
        </Stack>
      ) : (
        <NoMessageTimeMetaLayout el={el}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{
              my: "0.1875rem",
              minWidth: "14rem",
            }}
          >
            <Stack
              sx={{
                mr: "0.65rem",
                pointerEvents: "none",
                backgroundColor:
                  theme.palette.mode === "light"
                    ? docBoxBackgroundLight
                    : docBoxBackgroundDark,
                borderRadius: "20rem",
                p: "0.45rem",
              }}
            >
              <File
                size={36}
                weight={"fill"}
                color={theme.palette.background.default}
              />
            </Stack>
            <Stack sx={{ maxWidth: "92%", overflow: "hidden" }}>
              <Typography
                fontSize={"1rem"}
                lineHeight={"1.5rem"}
                fontWeight={500}
                sx={{
                  overflowX: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                Abstract.png
              </Typography>
              <Typography
                fontSize={".875rem"}
                lineHeight={".9375rem"}
                sx={{ whiteSpace: "nowrap" }}
              >
                {el.size}
              </Typography>
            </Stack>
          </Stack>
        </NoMessageTimeMetaLayout>
      )}
    </MessageLayout>
  );
};

const LinkMsg = ({ el, chatData }) => {
  const theme = useTheme();
  const linkColorLight = el.incoming ? "" : "#fff";
  const linkColorDark = el.incoming ? "#fff" : "#fff";

  return (
    <MessageLayout el={el} chatData={chatData}>
      <Stack
        direction={"row"}
        alignItems={"end"}
        justifyContent={"space-between"}
      >
        <Link
          href={el.href}
          color={
            theme.palette.mode === "light" ? linkColorLight : linkColorDark
          }
          sx={{
            textDecoration: "underline",
          }}
        >
          <Typography
            fontSize={15}
            lineHeight={1.3125}
            sx={{
              wordBreak: "break-word",
              whiteSpace: "pre-wrap",
              textAlign: "initial",
              display: "block",
              unicodeBidi: "plaintext",
              cursor: "pointer",
            }}
          >
            {el.message}
          </Typography>
        </Link>
        <TimeMetaText time={el.time} isIncoming={el.incoming} />
      </Stack>
    </MessageLayout>
  );
};

const ReplyMsg = ({ el, chatData }) => {
  const theme = useTheme();

  return (
    <MessageLayout el={el} chatData={chatData}>
      <Stack>
        <Stack p={".125rem 0"}>
          <Stack
            p={".1875rem .375rem .1875rem .1875rem"}
            direction={"column"}
            justifyContent={"flex-start"}
            sx={{
              backgroundColor: el.incoming
                ? alpha(theme.palette.primary.main, 0.2)
                : alpha(theme.palette.grey["0"], 0.25),
              borderRadius: "0.375rem",
              overflow: "hidden",
              cursor: "pointer",
              mb: ".0625rem",
              position: "relative",
            }}
          >
            <Box
              component={"div"}
              sx={{
                display: "block",
                position: "absolute",
                top: 0,
                bottom: 0,
                insetInlineStart: 0,
                width: 3,
                backgroundColor: el.incoming
                  ? theme.palette.primary.main
                  : theme.palette.grey["0"],
              }}
            />
            <Stack pl={".5rem"} direction={"column"}>
              <Box
                component={"div"}
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <Typography
                  fontSize={"calc(15px - .125rem)"}
                  fontWeight={500}
                  lineHeight={"1.25rem"}
                  color={
                    el.incoming
                      ? theme.palette.primary.main
                      : theme.palette.grey["0"]
                  }
                >
                  {faker.person.fullName()}
                </Typography>
              </Box>
              <Typography
                component={"p"}
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  marginBottom: 0,
                }}
                color={
                  theme.palette.mode === "light"
                    ? el.incoming
                      ? theme.palette.text.primary
                      : theme.palette.grey["0"]
                    : theme.palette.text.primary
                }
                fontSize={"calc(15px - .125rem)"}
                lineHeight={"1.125rem"}
              >
                {el.message}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <TextMessageLayout el={el} />
      </Stack>
    </MessageLayout>
  );
};

const MediaMsg = ({ el, chatData }) => {
  return (
    <MessageLayout el={el} chatData={chatData} noAppendix={true}>
      {el.message ? (
        <>
          <Stack
            sx={{
              m: "-0.375rem -0.5rem 0.375rem",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "480px",
                maxHeight: "432px",
                borderRadius: "0",
                objectFit: "cover",
                verticalAlign: "middle",
              }}
              src={el.img}
              alt={el.message}
            />
          </Stack>
          <TextMessageLayout el={el} />
        </>
      ) : (
        <NoMessageTimeMetaLayout el={el}>
          <Stack m={"-0.375rem -0.5rem -0.375rem"}>
            <img
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "480px",
                maxHeight: "432px",
                borderRadius: "0",
                objectFit: "cover",
                verticalAlign: "middle",
              }}
              src={el.img}
              alt={el.message}
            />
          </Stack>
        </NoMessageTimeMetaLayout>
      )}
    </MessageLayout>
  );
};

const TextMsg = ({ el, chatData }) => {
  return (
    <MessageLayout el={el} chatData={chatData}>
      <TextMessageLayout el={el} />
    </MessageLayout>
  );
};

const Timeline = ({ el }) => {
  const theme = useTheme();

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      mb={2}
    >
      <Divider width={"46%"} />
      <Typography
        variant={"caption"}
        sx={{ color: theme.palette.text.primary }}
      >
        {el.text}
      </Typography>
      <Divider width={"46%"} />
    </Stack>
  );
};

const TimeMetaText = ({ time = "00:00", isIncoming }) => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        position: "relative",
        top: ".375rem",
        bottom: "auto",
        marginLeft: ".4375rem",
        marginRight: "-0.375rem",
        paddingInline: "4px",
        height: "19px",
      }}
    >
      <Typography
        fontSize={".75rem"}
        fontWeight={400}
        lineHeight={1.35}
        sx={{
          mr: ".345rem",
          opacity: "0.7",
          userSelect: "none",
          textAlign: "initial",
          whiteSpace: "nowrap",
        }}
        color={
          isIncoming ? theme.palette.text.primary : theme.palette.grey["0"]
        }
      >
        {time}
      </Typography>
    </Stack>
  );
};

const NoMessageTimeMetaLayout = ({ children, el }) => {
  return (
    <Stack sx={{ position: "relative" }}>
      {children}
      <Stack
        sx={{
          position: "absolute",
          opacity: 1,
          bottom: ".25rem",
          right: ".25rem",
          left: "auto",
        }}
      >
        <TimeMetaText time={el.time} absolute={true} isIncoming={el.incoming} />
      </Stack>
    </Stack>
  );
};

const TextMessageLayout = ({ el }) => {
  const theme = useTheme();

  return (
    <Stack
      direction={"row"}
      alignItems={"end"}
      justifyContent={"space-between"}
    >
      <Typography
        color={
          el.incoming ? theme.palette.text.primary : theme.palette.grey["0"]
        }
        fontSize={15}
        lineHeight={1.3125}
        sx={{
          wordBreak: "break-word",
          whiteSpace: "pre-wrap",
          textAlign: "initial",
          display: "block",
          unicodeBidi: "plaintext",
        }}
      >
        {el.message}
      </Typography>
      <TimeMetaText time={el.time} isIncoming={el.incoming} />
    </Stack>
  );
};

const MessageOptions = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <DotsThreeVertical
        id={"basic-button"}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup={"true"}
        aria-expanded={open ? "true" : undefined}
        size={22}
        cursor={"pointer"}
        onClick={handleClick}
      />
      <Menu
        id={"basic-menu"}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Stack spacing={1} px={1}>
          {Message_options.map((el, index) => (
            <MenuItem key={index} sx={{ borderRadius: 1 }}>
              {el.title}
            </MenuItem>
          ))}
        </Stack>
      </Menu>
    </>
  );
};

const MessageLayout = ({ children, el = {}, chatData, noAppendix = false }) => {
  const theme = useTheme();

  const firstIncoming = isFirstMessage("incoming");
  const firstOutgoing = isFirstMessage("outgoing");
  const lastIncoming = isLastMessage("incoming");
  const lastOutgoing = isLastMessage("outgoing");
  const isIncoming = el.incoming;
  const isOutgoing = el.outgoing;

  function isLastMessage(type) {
    const isCurrentTrue = chatData.arr[chatData.index]?.[type] === true;
    const isNextFalse =
      chatData.index === 0 ||
      chatData.arr[chatData.index + 1]?.[type] === false ||
      chatData.arr[chatData.index + 1]?.[type] === undefined;

    return isCurrentTrue && isNextFalse;
  }

  function isFirstMessage(type) {
    const isCurrentTrue = chatData.arr[chatData.index]?.[type] === true;
    const isPreviousFalse =
      chatData.index === 0 ||
      chatData.arr[chatData.index - 1]?.[type] === false ||
      chatData.arr[chatData.index - 1]?.[type] === undefined;

    return isCurrentTrue && isPreviousFalse;
  }

  // ---------------------------------- START GET BORDER RADIUS ---------------------------------- //

  const borderRadiusList = {
    firstIncoming: "0.9375rem 0.9375rem 0.9375rem 0.375rem",
    firstOutgoing: "0.9375rem 0.9375rem 0.375rem 0.9375rem",
    middleIncoming: "0.375rem 0.9375rem 0.9375rem 0.375rem",
    middleOutgoing: "0.9375rem 0.375rem 0.375rem 0.9375rem",
    lastIncoming: "0.375rem 0.9375rem 0.9375rem 0",
    lastOutgoing: "0.9375rem 0.375rem 0 0.9375rem",
    singleIncoming: "0.9375rem 0.9375rem 0.9375rem 0",
    singleOutgoing: "0.9375rem 0.9375rem 0 0.9375rem",
    firstNoMessageIncoming: "0.9375rem 0.9375rem 0.9375rem 0.3125rem",
    firstNoMessageOutgoing: "0.9375rem 0.9375rem 0.375rem 0.3125rem",
    middleNoMessageIncoming: "0.3125rem 0.9375rem 0.9375rem 0.3125rem",
    middleNoMessageOutgoing: "0.9375rem 0.3125rem 0.375rem 0.9375rem",
    lastNoMessageImageIncoming: "0.375rem 0.9375rem 0.9375rem 0.9375rem",
    lastNoMessageImageOutgoing: "0.9375rem 0.3125rem 0.9375rem 0.9375rem",
    lastNoMessageIncoming: "0.375rem 0.9375rem 0.9375rem 0",
    lastNoMessageOutgoing: "0.9375rem 0.3125rem 0 0.9375rem",
    singleNoMessageImageIncoming: "0.9375rem 0.9375rem 0.9375rem 0.9375rem",
    singleNoMessageImageOutgoing: "0.9375rem 0.9375rem 0.9375rem 0.9375rem",
    singleNoMessageIncoming: "0.9375rem 0.9375rem 0.9375rem 0",
    singleNoMessageOutgoing: "0.9375rem 0.9375rem 0 0.9375rem",
  };

  const borderRadiusRules = {
    singleNoMessageImageIncoming: () =>
      firstIncoming &&
      lastIncoming &&
      !el.message &&
      el.subtype === "img" &&
      "singleNoMessageImageIncoming",
    singleNoMessageImageOutgoing: () =>
      firstOutgoing &&
      lastOutgoing &&
      !el.message &&
      el.subtype === "img" &&
      "singleNoMessageImageOutgoing",
    singleNoMessageIncoming: () =>
      firstIncoming && lastIncoming && !el.message && "singleNoMessageIncoming",
    singleNoMessageOutgoing: () =>
      firstOutgoing && lastOutgoing && !el.message && "singleNoMessageOutgoing",
    firstNoMessageIncoming: () =>
      firstIncoming && !el.message && "firstNoMessageIncoming",
    firstNoMessageOutgoing: () =>
      firstOutgoing && !el.message && "firstNoMessageOutgoing",
    middleNoMessageIncoming: () =>
      !firstIncoming &&
      !lastIncoming &&
      isIncoming &&
      !el.message &&
      "middleNoMessageIncoming",
    middleNoMessageOutgoing: () =>
      !firstOutgoing &&
      !lastOutgoing &&
      isOutgoing &&
      !el.message &&
      "middleNoMessageOutgoing",
    lastNoMessageImageIncoming: () =>
      lastIncoming &&
      !el.message &&
      el.subtype === "img" &&
      "lastNoMessageImageIncoming",
    lastNoMessageImageOutgoing: () =>
      lastOutgoing &&
      !el.message &&
      el.subtype === "img" &&
      "lastNoMessageImageOutgoing",
    lastNoMessageIncoming: () =>
      lastIncoming && !el.message && "lastNoMessageIncoming",
    lastNoMessageOutgoing: () =>
      lastOutgoing && !el.message && "lastNoMessageOutgoing",
    singleIncoming: () => firstIncoming && lastIncoming && "singleIncoming",
    singleOutgoing: () => firstOutgoing && lastOutgoing && "singleOutgoing",
    firstIncoming: () => firstIncoming && "firstIncoming",
    firstOutgoing: () => firstOutgoing && "firstOutgoing",
    middleIncoming: () =>
      !firstIncoming && !lastIncoming && isIncoming && "middleIncoming",
    middleOutgoing: () =>
      !firstOutgoing && !lastOutgoing && isOutgoing && "middleOutgoing",
    lastIncoming: () => lastIncoming && "lastIncoming",
    lastOutgoing: () => lastOutgoing && "lastOutgoing",
  };

  function getBorderRadius() {
    for (const [_, rule] of Object.entries(borderRadiusRules)) {
      const ruleResult = rule();
      if (ruleResult) {
        return borderRadiusList[ruleResult];
      }
    }
    return "0";
  }

  // ---------------------------------- END GET BORDER RADIUS ---------------------------------- //

  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={el.incoming ? "start" : "end"}
        sx={{
          mb: lastIncoming || lastOutgoing ? 2 : 1,
          position: "relative",
        }}
      >
        {el.outgoing && <MessageOptions />}
        {lastIncoming && !noAppendix && (
          <Stack
            direction={"row"}
            alignItems={"end"}
            sx={{
              position: "absolute",
              bottom: "-0.185rem",
              left: "-0.551rem",
              width: ".5625rem",
              height: "1.125rem",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            <SvgIncomingMessageAppendix
              color={theme.palette.background.default}
            />
          </Stack>
        )}
        <Box
          sx={{
            backgroundColor: el.incoming
              ? theme.palette.background.default
              : theme.palette.primary.main,
            borderRadius: getBorderRadius(),
            width: "max-content",
            maxWidth: "30rem",
            overflow: "hidden",
            p: ".3125rem .5rem .375rem",
          }}
        >
          {children}
        </Box>
        {el.incoming && <MessageOptions />}
        {lastOutgoing && !noAppendix && (
          <Stack
            direction={"row"}
            alignItems={"end"}
            sx={{
              position: "absolute",
              bottom: "-0.195rem",
              right: "-0.551rem",
              width: ".5625rem",
              height: "1.125rem",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            <SvgOutgoingMessageAppendix color={theme.palette.primary.main} />
          </Stack>
        )}
      </Stack>
    </>
  );
};

export { DocMsg, LinkMsg, ReplyMsg, MediaMsg, TextMsg, Timeline };
