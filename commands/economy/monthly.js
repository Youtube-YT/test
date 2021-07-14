module.exports = {
  name: "monthly",
  code: `$title[Here are yours monthly coin $username,]
  $description[$700,000 Has Been Added Into Your Balance!
  
  Come Back Next Month!]
  $footer[Want more coin? Become a premium user and get 50M!;$userAvatar]
  $color[GREEN]
$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin];700000]]
$globalCooldown[30d;{description:You've already claim your monthly coin! Come back in %time%!}{color:RED}]
  $onlyIf[$getUserVar[premium;$authorID]==true;{description:**Hey Looks Like You Have Found A Premium Command! If You want to use this command please go to the support server and redeem a premium! It's only cost 20 Millions!**\n\nWe Will Never Ask You to Pay Real Money.}{color:RED}]
  $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;]`
}