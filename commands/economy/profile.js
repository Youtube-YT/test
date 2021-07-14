module.exports = {
  name: "profile",
  code: `$title[$username[$mentioned[1;yes]]'s Profile]
  $author[User Profile;$userAvatar[$mentioned[1;yes]]]
  $description[$getGlobalUserVar[rank]
  
 $getGlobalUserVar[lvl;$mentioned[1;yes]] \`Level\` 
 $getGlobalUserVar[exp;$mentioned[1;yes]] \`XP / $getGlobalUserVar[rexp;$mentioned[1;yes]]\`
  ]
  $color[RANDOM]`
}