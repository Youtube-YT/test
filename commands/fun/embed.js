module.exports = {
  name: "embed",
  aliases: ["say"],
  code: `$description[$message]
$color[RANDOM]
  $deletecommand
  $argsCheck[>1;Hey mate if you leave a blank like this what am i supposed to said?]`
}