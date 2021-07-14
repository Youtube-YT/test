module.exports = {
 name: "userinfo",
 aliases: "whois",
 code: `
$author[User Information;$userAvatar[$mentioned[1;yes]]]
$description[__**Username**__
**$username[$mentioned[1;yes]]**

__**Permission**__
 **$userPerms[$mentioned[1;yes]]**
 
 __**User Roles**__
 **$userRoles[$mentioned[1;yes]]**
 
 __**Account Created in**__
 **$creationDate[$mentioned[1;yes]]**]
 `
}