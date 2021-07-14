module.exports = {
  name: 'unban',
  code: `
  $title[$username[$findUser[$message[1]]] Has Been Unbanned!]
  $description[Action: **Unban**
  Unbanned By: **$username**]
  $unban[$findUser[$message[1]]]
  $color[GREEN]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;]
    $argsCheck[>1;{description:Please Mention A User / ID.}{color:RED}]`
}