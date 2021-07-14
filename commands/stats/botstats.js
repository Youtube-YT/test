module.exports = {
name:"stats",
aliases:['i','botstats','info','botinfo','bot-stats','bot-info'],
code:`
$author[Bot Stats;$userAvatar[$clientID]]
$description[
$addField[Links;
🔗 [Support Server](https://discord.gg/u5Z5QM8yY8)
🔗 [Invite Me]($getBotInvite[admin])
$addField[Versions;
💿 Node.JS Version: $nodeVersion
📖 Library: Aoi.JS
💾 Aoi.JS Version: $packageVersion]
$addField[General;
💻 CPU Usage: %$cpu
💻 CPU Model: $djsEval[require ('os').cpus()[0].model;yes]
🏓 Ping: $pingms
⏱️ Uptime: $uptime
⚙️ Commands Count: $commandsCount
👥 All Members Count: $allMembersCount
🎚️ Servers Count: $serverCount
🏅 All Channels Count: $allChannelsCount
📀 All Channels Count (text): $allChannelsCount[text]
🔉 All Channels Count (voice): $allChannelsCount[voice]
🚦 Ram Usage: $ram MB/$replaceText[$abbreviate[$maxRam];K; GB;-1]
👑 Owner: $userTag[$botOwnerID]]
$thumbnail[$userAvatar[$clientid]]
$footer[$userTag[$clientID];$userAvatar[$clientID]]
$addTimestamp
$color[RANDOM]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;]
`
}