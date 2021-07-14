module.exports = { 
name: "kick",
code: `$kick[$mentioned[1]]
 $title[Kick]
 $description[
 Successfully kicked the user
 **Tag:** $userTag[$mentioned[1]]
 **Mention:** <@$mentioned[1]>
 **ID:** $mentioned[1]
 $footer[Kicked by $username[$authorID]]
 $addTimestamp
 $color[RANDOM]
$onlyIf[$findUser[$message[1]]!=$clientID;**❌ I can't kick my self**]
$onlyIf[$findUser[$message[1]]!=$authorID;**❌ You can't kick yourself**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];**❌ You can't kick someone with higher or the same roles as you**]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];**❌ I can't kick someone with higher or the same roles as me**]
$onlyIf[$memberExists[$findUser[$message[1]]]==true;**❌ Couldn't find a member with this ID/name/mention in the server**]
$onlyIf[$findUser[$message[1]]!=$ownerID;**❌ I can't modify the server owner**]
$onlyIf[$message[1]!=;**❌ Please mention someone to kick**]
$onlyBotPerms[kick;**❌ The bot doesn't have enough permissions**]
$onlyPerms[kick;**❌ You don't have enough permission**]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;]`
}