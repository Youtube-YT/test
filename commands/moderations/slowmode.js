module.exports = {
  name: "slowmode",
  aliases: ["sm"],
  code: `
  $description[Checking If i have perms to change slowmode...]
  $color[#FFA500]
  $editIn[5s;{description:Perms Checked :white_check_mark:}{color:GREEN};{description:Changing Slowmode into **$message[1]**}{color:#FFA500};{description:Successfully change channel slowmode into **$message[1]** $slowmode[$channelID;$message[1]]}{color:GREEN}]
  $argsCheck[1;{description:Please input vaild channel slowmode Usage: \`=slowmode 5s\`}{color:RED}]
  $onlyBotPerms[managechannels;{description:I could not change the channel slowmode because i do not have **Manage Channel** permission to do that!}{color:RED}]
  $onlyPerms[managechannels;{description:I'm sorry you do not have **Manage Channel** Permission to do that!}{color:RED}]`
}