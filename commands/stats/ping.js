module.exports = {
  name: "ping", 
code: `Pinging...
$editIn[5s;Pong! \`$ping\`]
 $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;]` 
}
