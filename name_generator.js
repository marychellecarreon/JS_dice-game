// List of names to pull from
// when user starts program it chooses a names
// program prints out the random names

var names = ['Jamie', 'Trent', 'Raman', 'Superman']

names[0]

var chosen_name = names[Math.floor(Math.random()*names.length)];

console.log(chosen_name)
