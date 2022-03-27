# react-twitch-browser-source

# Example
https://cdn.discordapp.com/attachments/786618525652746240/957751882711973928/2022-03-27_14-21-57.mp4


# What to do

- clone the package
- navigate to the main directory, npm install or yarn (this is a yarn package originally)
- navigate to pages -> index.tsx -> find the variables TWITCH_AUTH_PW -> go to the link , and save the code returned as auth pw.
- swap <yourchannelname> for the channel you want to monitor
- run yarn dev / npm run dev [ use the localhost url as a browser source on twitch, watch the messages be monitored ]

*some things you can do to customize your experience.*
  > on line 75 `className="animate__animated animate__backInDown"`
  this is an animatecss class, you can use that to modify the transitions.

  >on line 79 ` icon={<Avatar radius="xl">MK</Avatar>} `
    the uikit that provides the themeing and component platform is mantine found here https://mantine.dev/others/notifications/
  so free customization over the notification themselves.
    >dont like dark mode? line 95 `<MantineProvider theme={{ colorScheme: "dark" }}>` 
