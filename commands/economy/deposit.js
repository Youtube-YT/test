module.exports = {
name: "deposit",
aliases: "dep",
code: `
$description[Successfully Deposited $numberSeparator[$message[1]] to your Bank]
$setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin];$replaceText[$message[1];all;$getGlobalUserVar[coin];-1]]]

$setGlobalUserVar[Bank;$sum[$getGlobalUserVar[Bank];$replaceText[$message[1];all;$getGlobalUserVar[Bank];-1]]]

$onlyIf[$replaceText[$message[1];all;$getGlobalUserVar[coin];-1]<=$getGlobalUserVar[coin];You can’t deposit more than you have]
$footer[]
$color[RANDOM]
$onlyIf[$isNumber[$message[1]]==true;{description:**Failed To Deposit, Please Type A Vaild Number.**}{color:RED}]
  $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;]`
}