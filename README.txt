!mute @someone <time>s
  s = seconds
  m = minutes
  h = hours
  d = days
  y = years

kick @someone if they are in voice chat, remove "member" role, add "mute" role for time period specified
if no time period specified, then indefinitely
will have to manually change that persons role from "mute" to "member" if you want to unmute them after

run bot = cd to C:\Users\Darren\Documents\DiscordBot 
          node .
if online, you will see bot online in discord with green dot


- create role "Bot Admin" and make sure it can manage roles and do admin stuff
- create role "mute"
- create role "member"
- make sure "mute" has higher priority than "member"
- edit role @everyone so that they can only see voice channels and read old messages
- assign role "member" to everyone 
- only people with role "Bot Admin" can run the bot commands
- give "Yoshemango's Bot" the role "Bot Admin"

To add bot to server = https://discord.com/oauth2/authorize?client_id=843190575711649813&scope=bot&permissions=0
tell admin to go to above link and add to server desired


To get discord application developer id and bot token
https://discord.com/developers/applications/843190575711649813/information

