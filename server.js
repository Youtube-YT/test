  const Aoijs = require("aoi.js")
const fetch = require('node-fetch')

setInterval(async () => {
  await fetch('https://expensive-held-axolotl.glitch.me').then(console.log('Pinged!'))
}, 4000) 
  
const bot = new Aoijs.Bot({
  sharding: false, //true or false
  shardAmount: 2, //Shard amount
  mobile: false, //true or false - Discord Mobile Status
  //dbhToken: "API KEY", Remove // if using, get an API Key from their Server
  token: process.env.TOKEN, //Discord Bot Token
  prefix: ["$getServerVar[prefix]"],
  mobile: false,
  autoUpdate: ["false"]//Change PREFIX to your Prefix
})

bot.onMessageUpdate() 
bot.onMessage(); // Allows Commands to Executed
bot.loadCommands(`./commands/`);

bot.status({
  text: "=help / Mention Me",
  type: "PLAYING",
  time: 12
})

bot.status({
  text: "Bot In Development...",
  type: "WATCHING",
  time: 5
})

//Allows Commands executed by `commands` folder
bot.command({
  name: "<@!858673938049662976>",
  code: `$title[Shadow_Master]

$description[**Hi $username my prefix is** \`$getServerVar[prefix]\`
**You can type** \`$getServerVar[prefix]help\` **for commands**]
$color[RANDOM]
`,
  nonPrefixed: true
});


	
bot.command({
  name: "help",
  code: `

$let[e;$apiMessage[;{title:Help Command}
{thumbnail:$authorAvatar}
{field:Economy:Click the Button:true}
{field:Fun:Click the Button:true}
{field:Moderator:Click the Button:true}
{field:Stats:Click the Button:true}
{field:Support:Click the Button:true}
 
{color:#5865F2};{actionRow:Economy,2,1,EconomyButton,:Fun,2,1,FunButton,:Moderator,2,1,ModeratorButton,:Stats,2,1,StatsButton,:Support,2,1,SupportButton};;yes]]`
})
 
bot.onInteractionCreate()
 
bot.interactionCommand({
 name: "EconomyButton",
 prototype:"button",
 code:`$interactionDelete
$wait[20s]
$interactionEdit[;{color:RANDOM}{title:Economy Commands}{description:$getServerVar[prefix]balance - **Shows Your Ballance.**\nPermission Require: \`None\`\n\n$getServerVar[prefix]deposit - **Deposit Your Money Into Your Bank.**\nPermission Require: \`None\`\n\n$getServerVar[prefix]withdraw - **Withdraw Your Money From Bank To Your Wallet.**\nPermission Require: \`None\`\n\n$getServerVar[prefix]beg - **Have You Heard Free Money?**\nPermission Require: \`None\`\n\n$getServerVar[prefix]work - **The More You Work, The More You Earned.**\nPermission Require: \`None\`\n\n$getServerVar[prefix]pay - **Pay The Money To A user You mentioned.**\nPermission Require: \`None\`\n\n$getServerVar[prefix]bet - **You Gamble , You Win But Sometimes You Lose.**\nPermission Require: \`None\`\n\n$getServerVar[prefix]profile - **Check Your Profile Will Ya?**\nPermission Require: \`None\`\n\n$getServerVar[prefix]daily - **Get Your Daily Coins**\nPermission Require: \`None\`\n\n$getServerVar[prefix]weekly - **get Your Weekly Coins**\nPermission Require: \`None\`\n\n$getServerVar[prefix]monthly - **Get Your Monthly Coins** \`PREMIUM\`\nPermission Require: \`None\`\n\n$getServerVar[prefix]yearly - **Get Your Yearly Coins** \`PREMIUM\`\nPermission Require: \`None\`}{color:RANDOM}]
$wait[3s]
$interactionReply[{description:<a:Loading:842735365688393778>  Loading Economy Commands...}{color:RANDOM};;;0;4]`
})
 
bot.interactionCommand({
 name: "SupportButton",
 prototype:"button",
 code:`$interactionDelete
$wait[20s]
$interactionEdit[;{color:RANDOM}{title:Support Commands}{description:$getServerVar[prefix]ticket - **Create A Ticket And Ask For Help Or Feedback.**\nPermission Require: \`None\`\n\n$getServerVar[prefix]close - **Closing The Ticket**\nPermission Require: \`None\`\n\n$getServerVar[prefix]support - **Found a bug from the bot? Report to us on the support server!**\nPermission Require: \`None\`}{color:RANDOM}]
$wait[3s]
$interactionReply[{description:<a:Loading:842735365688393778>  Loading Support Commands...}{color:RANDOM};;;0;4]`
})
 
bot.interactionCommand({
 name: "FunButton",
 prototype:"button",
 code:`$interactionDelete
$wait[10s]
$interactionEdit[;{color:RANDOM}{title:Fun Commands}{description:$getServerVar[prefix]8ball - **The Bot Wll Random Respond After You Put What Your Gonna 8ball Message.**\nPermission Require: \`None\`\n\n$getServerVar[prefix]hack - **To Hack A User 😈**\nPermission Require: \`None\`\n\n$getServerVar[prefix]meme - **Shows A image Of funny memes.**\nPermission Require: \`None\`\n\n$getServerVar[prefix]avatar - **Shows your profile picture.**\nPermission Require: \`None\`\n\n$getServerVar[prefix]say - **Bot Will Talk :O**\nPermission Require: \`None\`\n\n$getServerVar[prefix]kill - **Kill the person that you mentioned but watch out of your grenade.**\nPermission Require: \`None\`\n\n$getServerVar[prefix]eject - **Eject Someone From The Spaceship**\nPermission Require: \`None\`}{color:RANDOM}]
$wait[5s]
$interactionReply[{description:<a:Loading:842735365688393778>  Loading Fun Commands...}{color:RANDOM};;;0;4]`
})
 
bot.interactionCommand({
 name: "ModeratorButton",
 prototype:"button",
 code:`$interactionDelete
$wait[10s]
$interactionEdit[;{color:RANDOM}{title:Moderation Commands}{description:$getServerVar[prefix]ban - **Ban a user that you mentioned.**\nPermission Require: \`BAN\`\n\n$getServerVar[prefix]unban - **Unban the user with IDs.**\nPermission Require: \`BAN\`\n\n$getServerVar[prefix]kick - **Kick the user that you mentioned.**\nPermission Require: \`kick\`\n\n$getServerVar[prefix]purge - **Purge The Message.**\nPermission Require: \`MANAGE MESSAGES\`\n\n$getServerVar[prefix]warn - **Looks Like someone need to get a warn!**\nPermission Require: \`MANAGE ROLES\`\n\n$getServerVar[prefix]slowmode - **Time to change channel slowmode!**\nPermission Require: \`MANAGE CHANNELS\`}]
$wait[3s]
$interactionReply[{description:<a:Loading:842735365688393778>  Loading Moderations Commands...}{color:RANDOM};;;0;4]`
})

bot.interactionCommand({
 name: "StatsButton",
 prototype:"button",
 code:`$interactionDelete
$wait[5s]
$interactionEdit[;{color:RANDOM}{title:Stats Commands}{description:$getServerVar[prefix]ping - **Shows the bot ms.**\nPermission Require: \`None\`\n\n$getServerVar[prefix]stats - **Show's Bot Stats.**\nPermission Require: \`None\`\n\n$getServerVar[prefix]uptime - **Let's See How Long Can The Bot Alive.**\nPermission Require: \`None\`}]
$wait[3s]
$interactionReply[{description:<a:Loading:842735365688393778>  Loading Stats Commands...}{color:RANDOM};;;0;4]`
})
 
 
bot.command({
    name: "reboot",
    code: `$reboot
$wait[5s]
Rebooting The bot In 5 Seconds!
$onlyForIDs[805645171898581042;I'm sorry this command are only for $username[805645171898581042] only!]`
})


bot.command({
 name: "redeem", 
 code:  `$author[$username[$authorID]#$discriminator[$authorID];$authorAvatar]
 $description[**<a:9897verified:863969926166872094> Success:** <@$authorID> You've claimed premium perks for 1 Year]
 $color[GREEN]
$setUserVar[premium;true;$authorID]
$setTimeout[365d;
userID: $authorID]
$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin];50000000]]
 $setGlobalUserVar[pc;$sum[$getGlobalUserVar[pc];1]
$onlyIf[$getUserVar[premium;$authorID]==false;**Too bad man but you've claimed your premium!**]
 $onlyIf[$hasRole[$authorID;859009698311962644]==true;{description:**You Do Not Have Premium Role In The Support Server! So You Can't Claim It.**}{color:RED}]
 $onlyForServers[858850650259193886;{description:**I'm Sorry But You Can Only Use This Command in My ** [Support Server](https://discord.gg/u5Z5QM8yY8)}{color:RED}]
`
})
 
bot.timeoutCommand({
 code: `
 $sendDM[$timeoutData[userID];Your premium has just run out!]
 $setUserVar[premium;false;$timeoutData[userID]]`
})

bot.command({
 name: "$alwaysExecute",
 code: `$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin];100000]]
 $useChannel[$channelID]
$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[rmsg];{user.tag};$userTag];{user.mention};<@$authorID>];{level};$getGlobalUserVar[lvl]];{exp};$getGlobalUserVar[exp]]
$setGlobalUserVar[lvl;$sum[$getGlobalUserVar[lvl];1]]
$setGlobalUserVar[rexp;$multi[$getGlobalUserVar[rexp];2]]
$onlyIf[$getGlobalUserVar[exp]>=$getGlobalUserVar[rexp];]
` 
})



bot.command({
 name: "$alwaysExecute",
 code: `$setGlobalUserVar[exp;$sum[$getGlobalUserVar[exp];$random[1;4]]]`
})



bot.variables({
  premium: "false",
  prefix: "=",
  coin: "0",
  Bank: "0",
  modlogs: "0",
  warn: "0",
  reason: "",
  drop: "0",
  Blacklist: "false",
   rmsg: "Congrats {user.tag}🎉, you leveled up to level {level}, here's your 100,000 Cash as your rewards!",
 lvl: "1",
 exp: "0",
 rexp: "100",
  rreward: "10000",
  rank: "Beta User",
  inventory: "Too Bad you have noting.",
    ticketcategory: "",
    ticketcooldown: "5s",
panelmessage: "Hello To Create A Ticket React To 🎫!",
    subject: "Hi Thanks For Creating The Ticket! The Moderator Will Arrived Here Soon!",
    ticketmessage: "Hello Please Wait A While The Moderator Will Here Soon!",
    ticketchannel: "",
    pc: "0"
});

//Main.js
