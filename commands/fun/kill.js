module.exports = {
name: "kill",
code: `$if[$randomText[sucess;fail]==sucess]
$color[RANDOM]
$author[Kill Success;$userAvatar]
$description[$username[$mentioned[1]] have been killed by $username by using a $randomText[banana;bomb;rock launcher;paper;pepe blaster;knife]]
$else
$if[$randomText[sucess;fail]==fail]
$author[Lol Better Luck Next Time;$userAvatar]
$description[When you tried to kill $username[$mentioned[1]] but then you accidently throw a grenade on your self then blow up.]
$footer[You Die]
$color[RED]
$endIf
$endIf
$argsCheck[1;Please mention a user to kill if not what are you going to kill? Air???]`
}