module.exports = {
  name: "blacklist",
  code:`$setGlobalUserVar[Blacklist;true;$findUser[$message[1]]]
**$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]] you are blacklisted now**
$onlyIf[$findUser[$message[1]]!=$authorID;**⛔ You can't blacklist yourself**]
$onlyForIDs[$botownerid;**⛔ Only the owner can use this command**]`
}