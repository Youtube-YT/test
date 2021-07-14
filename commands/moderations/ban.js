module.exports = {
  name: "ban",
  code: `
  $title[$username[$findUser[$message[1]]] Has Been Banned!]
  $description[Action: **Ban**
  Banned By: **$username**
  Reason: **$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;A reason wasn't provided.];false;$messageSlice[1]]**]
  $color[GREEN]
  $onlyIf[$rolePosition[$highestRole[$findUser[$message[1]]]]>$rolePosition[$highestRole];⛔ - To use this you need to have a higher rank than $username[$findUser[$message[1]]].]
$onlyIf[$findUser[$message[1]]!=$authorID;**⛔ - You can't ban yourself (Or else, I couldn't find that user)**]
$onlyIf[$isBanned[$findUser[$message[1]]]==false;**⛔ - This user has already been banned on this server**]
  $onlyIf[$findUser[$message[1]]!=$clientID;**⛔ - I can't ban myself, that's illegal**]
$onlyIf[$findUser[$message[1]]!=$ownerID;**⛔ - I can't ban the owner of the server**]
$elseIf[$memberExists[$findUser[$message[1]]]==false]
$onlyIf[$findUser[$message[1]]!=$authorID;**⛔ - You can't ban yourself (Or else, I couldn't find that user)**]
$endelseIf
  $ban[$mentioned[1]]
  $onlyBotPerms[ban;{description:I Do Not Have \`BAN\` Permission To Do That!}{color:RED}]
  $onlyPerms[ban;{description:You Do Not Have \`BAN\` Permission To Do That!}{color:RED}]
   $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;]
  $argsCheck[>2;{description:Please Mention A User / ID And Provide A Reason}{color:RED}]
   
  `
} 