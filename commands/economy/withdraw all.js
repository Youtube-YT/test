module.exports = {
name: "withdraw-all",
aliases: ["with-all"],
code: `$description[Successfully Withdraw All Cash from your Bank]
$setGlobalUserVar[Bank;$sub[$getGlobalUserVar[Bank];$getGlobalUserVar[Bank]]]
$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin];$getGlobalUserVar[Bank]]]
$footer[]
$color[RANDOM]
  $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;]`
}