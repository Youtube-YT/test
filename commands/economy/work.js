module.exports = {
 name: "work",
 description: "You can earn money by working",
 category: "Economy",
 code: `


$if[$randomText[success;fail]==success]
 $description[You worked as $randomText[hacker;developer;Police Man;McDonald's Worker] And Earned $numberSeparator[$random[1000;50000]] Cash!]
 $color[RANDOM]
$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin];$random[1000;50000]]]
$else
$if[$randomText[success;fail]==fail]
 $description[$randomText[You've Been  Fired And Getting Noting, Cause You Broke Something He Love;You've been fired by your boss how sad!;You Trying To Do The Best, but Failed It Become More Wrost.]]
 $color[RED]
 $footer[Lol Get Rekt Better Luck Next Time]
$endif
$endif
$cooldown[20s;Wait %time% before using this cmd again]
  $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;]`
}