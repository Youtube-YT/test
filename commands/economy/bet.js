module.exports = {
  name: "bet",
  code: `$if[$randomText[success;fail;draw]==success]
 $title[$username WIN GAMBLING]
 $description[You've Won **$$numberSeparator[$message[1]]**
 $random[0;100]% **Percent Won Chance**
 
Rolled \`$random[6;10]\` **$username**
Rolled \`$random[1;5]\` **Shadow_Master**
 ]
 $thumbnail[$authorAvatar]
 $color[RANDOM]
$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin];$message[1]]]
$else
$if[$randomText[success;draw;fail]==draw]
 $title[$username DRAW GAMBLING]
 $description[You've Won **NOTING** 🤣
__**You Lose Noting**__
 
Rolled \`$random[1;10]\` **$username**
Rolled \`$random[1;10]\` **Shadow_Master**
 ]
 $color[#FFA500]
 $thumbnail[$authorAvatar]
$else
$if[$randomText[success;draw;fail]==fail]
 $title[$username LOSE GAMBLING]
 $description[You've lose **$$numberSeparator[$message[1]]**
 
Rolled \`$random[1;5]\` **$username**
Rolled \`$random[6;10]\` **Shadow_Master**
 ]
 $thumbnail[$authorAvatar] $color[RED]
 $footer[How sad.]
 $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin];$message[1]]]
$endif
$endif
$endif
$onlyIf[$getGlobalUserVar[coin]>=$noMentionMessage;Sorry You don't Have enough coins]
$onlyIf[$noMentionMessage>499;{description:**Hey mate, you need atleast bet $500!**}{color:RED}] 
$argsCheck[1;{description:Please enter the amount you want to bet!}{color:RED}]
   $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;]`
}