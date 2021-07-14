module.exports = {
  name: "weekly",
  code: `$title[Here are yours daily coin $username,]
  $description[$200,000 Has Been Added Into Your Balance!
  
  Come Back Next Week!]
  $footer[Want more coin? Become a premium user and get 50M!;$userAvatar]
  $color[GREEN]
$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin];200000]]
$globalCooldown[7d;{description:You've already claim your weekly coin! Come back in %time%!}{color:RED}]
   $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;]`
}