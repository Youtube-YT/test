module.exports = {
name:"hack",
 code:`**__Starting a dangerous Hack on $username[$mentioned[1]]__**
 $editIn[3s;**Getting User Token**;**Token**
 $randomString[18];Hacking Discord Account (bypass 2fa);**Discord Account**
 Email: $username[$randomUserID]$randomText[@Gmail.com;@Yahoo.com]
 Password: $randomString[10];**Hacking Email (bypass Email 2fa)**;**Email**
 Password: $randomString[8];**Most Recent Words**
 $randomText[bruh;wtf;lmao;how?;gae;gay;idiot];**Most Recent Content**
 $username[$randomUserID];{description:The Most Dangerous Hacking Has Complete, Now The Police Are Arrive! RUN NOW}{color:RED}]
 $onlyIf[$mentioned[1]!=;Woah wait, where is the person who is to be hacked bruh]
 $onlyIf[$authorID!=$mentioned[1];....hacking yourself?]
 $argsCheck[1;{description:At least mention a user plz}{color:RED}]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;]`
}