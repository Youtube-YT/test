module.exports = {
  name: "beg",
  code: `$cooldown[30s;Wait %time% before using this cmd again]

$if[$randomText[success;fail]==success]
 $title[$randomText[David Morgan;Ronald Morgan;William Morgan;Thomas Morgan;John Morgan;Donald Morgan;Richard Morgan]]
 $description["Oh you're so poor, here take $$random[10;500]"]
 $color[RANDOM]
$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin];$random[10;500]]]
$else
$if[$randomText[success;fail]==fail]
 $title[$randomText[James Morgan;Robert Morgan;John;Liberty] 
 $description[$randomText["I just maxed my credit card.";"Im Too Poor To Give You some Money.";"Ew Beggar, Go away.";"Stop Begging, and go get a job!"]
 $color[RED]
 $footer[Lol Get Rekt Better Luck Next Time]
$endif
$endif
   $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;]`
}