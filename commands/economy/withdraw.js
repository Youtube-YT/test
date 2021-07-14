module.exports = {
name: "withdraw",
aliases: "with",
code: `
$description[Successfully Withdraw $numberSeparator[$message[1]] from your Bank]
$setGlobalUserVar[Bank;$sub[$getGlobalUserVar[Bank];$replaceText[$message[1];all;$getGlobalUserVar[Bank];-1]]]

$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin];$replaceText[$message[1];all;$getGlobalUserVar[coin];-1]]]

$onlyIf[$replaceText[$message[1];all;$getGlobalUserVar[Bank];-1]<=$getGlobalUserVar[Bank];You can’t withdraw more than you have]
$footer[]
$color[RANDOM]
$onlyIf[$isNumber[$message[1]]==true;{description:**Failed To Withdraw, Please Type A Vaild Number.**}{color:RED}]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;]`
}