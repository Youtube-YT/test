	module.exports = {
name: "pay",
    aliases: ["give"],
code: `$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$mentioned[1;yes]];$noMentionMessage];$mentioned[1;yes]]
$setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];$noMentionMessage];$authorID]
$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$title[$username gave $username[$mentioned[1]] money]
$description[
$username gave $username[$mentioned[1]] **$noMentionMessage** :dollar:!
$username[$mentioned[1]] is now holding **$sum[$getGlobalUserVar[coin;$mentioned[1]];$noMentionMessage]** :dollar: in his wallet!
]
$onlyIf[$noMentionMessage<=$getGlobalUserVar[coin;$authorID];**Don't Act like your rich mate.**]
$onlyIf[$mentioned[1]!=$authorID;**Dude, why you giving your self money?**]
$onlyIf[$mentioned[1]!=;**Correct Format: $getServerVar[prefix]pay @user <amount>**]
$onlyIf[$isBot[$mentioned[1]]!=true;**You can't give a bot money!**]
$onlyIf[$isNumber[$noMentionMessage]==true;**That is not a number, try using this format**: \`$getServerVar[prefix]pay <@user> <amount>\`]
$suppressErrors[Usage: **$getServerVar[prefix]pay <@user> <amount>**]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;]`
}