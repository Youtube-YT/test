module.exports = {
name: "clear",
aliases: ['purge'],
code: `$deleteIn[5s]
$author[Cleaning;https://thumbs.gfycat.com/AltruisticDistinctAoudad-size_restricted.gif]
$description[**Done** \`$noMentionMessage $replaceText[$replaceText[&$mentioned[1]&;&&;messages\` **were cleared**;1];&$mentioned[1]&;**of last messages of**;1] $replaceText[$replaceText[&$mentioned[1]&;&&;;1];&$mentioned[1]&;<@$mentioned[1]>;1]]
$clear[$message]
$color[RANDOM]
$footer[Cleared By: $username[$authorID]#$discriminator[$authorID]]
$suppressErrors[**Try:** \`$getServerVar[prefix]clear <number>\`]
$onlyIf[$noMentionMessage<=500; **You can eliminate 2-500 messages per command**]
$onlyIf[$noMentionMessage>=2;**You can eliminate 2-500 messages per command**]
$onlyIf[$noMentionMessage!=;** Add a number to delete the messages**, **Try:** \`$getServerVar[prefix]clear <number>\`]
$onlyIf[$isNumber[$noMentionMessage]==true;Choose the number of messages to delete! **Try:** \`$getServerVar[prefix]clear <number>\`]
$onlyIf[$message[1]!=;**Try:** \`$getServerVar[prefix]clear <number>\`]
$onlyBotPerms[managemessages;**I don't have \`MANAGE_MESSAGES\` permissions to use this command**]
$onlyPerms[managemessages;**You dont have this perm to delete messages:** __**Manage Messages**__]
  $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;]`
}