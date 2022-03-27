import React, { useState, useEffect } from "react";
import * as tmi from "tmi.js";
import {
  Avatar,
  Container,
  MantineProvider,
  Notification,
} from "@mantine/core";
import "animate.css";

function App() {
  const [val, setVals]: any = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const TWITCH_AUTH_PW = "oauth:0352a00womj1j7nks5lmxe3cink1rh";
  const TWITCH_CHANNELS = ["#sxshinigami"];
  const TWITCH_CLIENT = new tmi.Client({
    options: { debug: true, messagesLogLevel: "info" },
    connection: {
      reconnect: true,
      secure: true,
    },
    identity: {
      username: "cybershinbot",
      password: TWITCH_AUTH_PW,
    },
    channels: TWITCH_CHANNELS,
  });
  useEffect(() => {
    if (!isConnected) {
      TWITCH_CLIENT.connect().then((data) => {
        setIsConnected(true);
        if (data) {
          TWITCH_CLIENT.on(
            "chat",
            async (_channel, userstate, message, self) => {
              if (self) return;
              console.log(userstate);
              const x = (val: any) => [
                ...val,
                {
                  user: userstate.username,
                  badge: userstate.badges,
                  message: message,
                  color: userstate.color,
                  sub: userstate.subscriber,
                  mod: userstate.mod,
                  firstMsg: userstate["first-msg"],
                },
              ];
              setVals(x);
            }
          );
        }
      });
    }
  }, [
    isConnected,
    val,
    setVals,
    TWITCH_CLIENT,
    TWITCH_CHANNELS,
    setIsConnected,
  ]);

  const firstBids = val.map(
    (data: any, index: React.Key | null | undefined) => {
      if (val.length > 9) {
        val.splice(0, 1);
      }

      return (
        <>
          <Container size={600} p={5}>
            <Notification
              className="animate__animated animate__backInDown"
              key={index}
              title={data.user.toUpperCase()}
              disallowClose
              icon={<Avatar radius="xl">MK</Avatar>}
              style={{
                width: "500px",
                textAlign: "center",
                color: "whitesmoke",
              }}
            >
              {data.message}
            </Notification>
          </Container>
        </>
      );
    }
  );

  return (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      {firstBids}
    </MantineProvider>
  );
}

export default App;
