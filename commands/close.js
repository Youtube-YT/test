module.exports = {
 name: "close",
 code: `
$closeTicket[This is not ticket]
$onlyIf[$checkContains[$channelName;ticket]==true;This command can only be used in tickets]
$suppressErrors
 `
};