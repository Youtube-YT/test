module.exports = {
  name: "daily",
  code: `$title[Here are yours daily coin $username,]
  $description[$30,000 Has Been Added Into Your Balance!
  
  Come Back Tomorrow!]
  $footer[Want more coin? Become a premium user and get 50M!;$userAvatar]
  $color[GREEN]
$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin];30000]]
$globalCooldown[1d;{description:You've already claim your daily coin! Come back in %time%!}{color:RED}]
   $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;]`
}