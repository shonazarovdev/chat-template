import { faker } from "@faker-js/faker";
import {
  ChatCircleDots,
  Gear,
  GearSix,
  Phone,
  SignOut,
  User,
  Users,
} from "phosphor-react";

const Profile_Menu = [
  {
    title: "Profile",
    icon: <User />,
  },
  {
    title: "Settings",
    icon: <Gear />,
  },
  {
    title: "Profile",
    icon: <SignOut />,
  },
];

const Nav_Buttons = [
  {
    index: 0,
    icon: <ChatCircleDots />,
  },
  {
    index: 1,
    icon: <Users />,
  },
  {
    index: 2,
    icon: <Phone />,
  },
];

const Nav_Setting = [
  {
    index: 3,
    icon: <GearSix />,
  },
];

const ChatList = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "9:36",
    unread: 0,
    pinned: true,
    online: true,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "12:02",
    unread: 2,
    pinned: true,
    online: false,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "10:35",
    unread: 3,
    pinned: false,
    online: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "04:00",
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 7,
    img: faker.image.avatar(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
];

const Chat_History = [
  {
    type: "msg",
    message: "Hi 👋🏻, How are ya ?",
    incoming: true,
    outgoing: false,
    time: "23:42",
  },
  {
    type: "divider",
    text: "Today",
  },
  {
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
    time: "23:42",
  },
  {
    type: "msg",
    message: "Can you send me an abstarct image?",
    incoming: false,
    outgoing: true,
    time: "23:43",
  },
  {
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
    time: "23:43",
  },
  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.urlPicsumPhotos({ width: 600, height: 500 }),
    incoming: true,
    outgoing: false,
    time: "23:43",
  },
  {
    type: "msg",
    subtype: "img",
    img: faker.image.urlPicsumPhotos({ width: 600, height: 500 }),
    incoming: true,
    outgoing: false,
    time: "23:43",
  },
  {
    type: "msg",
    message: faker.lorem.lines(),
    incoming: false,
    outgoing: true,
    time: "23:45",
  },
  {
    type: "msg",
    message: faker.lorem.lines(1),
    incoming: false,
    outgoing: true,
    time: "23:45",
  },
  {
    type: "msg",
    message: faker.lorem.lines(1),
    incoming: false,
    outgoing: true,
    time: "23:45",
  },
  {
    type: "msg",
    subtype: "doc",
    size: "2.5Kb",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
    time: "00:03",
  },
  {
    type: "msg",
    subtype: "doc",
    size: "3.1MB",
    incoming: true,
    outgoing: false,
    time: "00:03",
  },
  {
    type: "msg",
    subtype: "doc",
    size: "4.1MB",
    message: "Yes sure, here you go.",
    incoming: false,
    outgoing: true,
    time: "00:04",
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.avatarGitHub(),
    message: "Yep, I can also do that",
    href: "youtube.com",
    incoming: true,
    outgoing: false,
    time: "00:04",
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.avatarGitHub(),
    message: "Yep, I can also do that",
    href: "youtube.com",
    incoming: false,
    outgoing: true,
    time: "00:04",
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
    time: "00:04",
  },
];

const Message_options = [
  {
    title: "Reply",
  },
  {
    title: "React to message",
  },
  {
    title: "Forward message",
  },
  {
    title: "Star message",
  },
  {
    title: "Report",
  },
  {
    title: "Delete Message",
  },
];

export {
  Profile_Menu,
  Nav_Setting,
  Nav_Buttons,
  ChatList,
  Chat_History,
  Message_options,
};
