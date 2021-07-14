module.exports = {
  name: "8ball",
  code: `$argsCheck[>1;{description:Please Enter Any Messaage so i can anwser your question}{color:RED}]
  $description[
  **$message**
  8ball: **$randomText[No;Yes;Maybe;Not Really;Of Course;Nope;Sorry But NO;eh yes]**
  ]
  $color[RANDOM]
$footer[$userTag[$clientID];$userAvatar[$clientID]]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;]`
  }