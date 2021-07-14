module.exports = {
name: "deposit-all",
aliases: ["dep-all"],
code: `$description[Successfully Deposited All Cash to your Bank]
$setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin];$getGlobalUserVar[coin]]]
$setGlobalUserVar[Bank;$sum[$getGlobalUserVar[Bank];$getGlobalUserVar[coin]]]
$footer[]
$color[RANDOM]
  $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;]`
}