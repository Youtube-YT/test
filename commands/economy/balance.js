module.exports = {
  name: "bal",
  aliases: ["balance"],
  code: `$title[$username[$mentioned[1;yes]]'s Balance]
  $description[<a:money:858844299620909106> Money: $numberSeparator[$getGlobalUserVar[coin;$mentioned[1;yes]]]
  :bank: Bank: $numberSeparator[$getGlobalUserVar[Bank;$mentioned[1;yes]]]
  $thumbnail[$userAvatar[$mentioned[1;yes]]]]
  $color[RANDOM]
  $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;]`
}