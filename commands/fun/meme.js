module.exports = {
  name: "meme",
  code: `$title[MEMES]$image[https://ctk-api.herokuapp.com/meme/$random[1;500]]$color[RANDOM]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;]`
}

