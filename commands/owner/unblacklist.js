module.exports = {
  name: "unblacklist",
  code: `$setGlobalUserVar[Blacklist;false;$findUser[$message[1]]]
**$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]] ✅ You are no longer on the blacklist**
$onlyIf[$findUser[$message[1]]!=$authorID;**⛔ You can't blacklist yourself, so you can't unblacklist yourself**]
$onlyForIDs[$botownerid;**⛔ You are not the owner**]`
}