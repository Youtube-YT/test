module.exports = {
  name: "serverinfo",
  aliases: ["si"],
  code: `$author[Server Info;$serverIcon]
  $description[__**Server Owner**__
  **$username[$ownerID]**
  
  __**Total Members**__
  **$membersCount**
  
  __**Total Bots**__
  **$botCount**
  
  __**Total Channels**__
  **$channelCount**
  
  __**Text Channels**__
  **$channelCount[text]**
  
  __**Voice Channels**__
  **$channelCount[voice]**
  
  __**Total Emoji**__
  **$emojiCount**
  
  __**Server Emojis**__
  $serverEmojis
  
  __**Roles Count**__
  **$roleCount**
  
  __**Roles**__
  $guildRoles]`
}