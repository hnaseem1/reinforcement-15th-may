fav_colors = ["red", "yellow", "blue", "green"]
ages = [25, 35, 29, 22, 34]
coin = ["head", "tail", "tail", "tail", "head"]
artists = ["Will Smith","Jhonny Depp","Tom Cruise"]
fav_colors2 = [:red , :yellow, :blue, :green]

words = {Apple: "A popular red fruit", Cricket: "A sports played with a bat and a ball", Bottle: "A container that stores water"}
movie = {Star_Wars: 1973, Avengers: 2013, The_Dark_Knight: 2008}
cities = {Toronto: 2700000, Karachi: 21200000, London: 8788000}
friends = {Roger: 25, Patrick: 20, Lucas: 18}

#exercise 3

#1
2.times do |num|
  puts artists[num]
end
#2
movie.each do |key, value|
  puts "#{key} came out it #{value}"
end
#3
p ages.sort.reverse!
#4
movie.store("Beauty and the beast", "1991 and 2017")
p movie
