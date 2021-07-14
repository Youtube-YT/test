module.exports = {
  name: "leaderboard",
aliases: ['rich'],
code: `$title[**Richest People on Discord**]
 $color[RANDOM]
 $description[$globalUserLeaderBoard[coin;asc; {top}. {username} - **{value}**]]
 $cooldown[5s;{description:A bit too fast there. Wait for **time%**!}{color:RANDOM}]
 $onlyIf[$checkContains[$channelType;text;news]==true;]`
}