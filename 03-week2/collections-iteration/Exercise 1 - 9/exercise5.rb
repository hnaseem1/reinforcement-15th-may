fav_colors = ["red", "yellow", "blue", "green"]
ages = [25, 35, 29, 22, 34]
coin = ["head", "tail", "tail", "tail", "head"]
artists = ["Will Smith","Jhonny Depp","Tom Cruise"]
fav_colors2 = [:red , :yellow, :blue, :green]

words = {Apple: "A popular red fruit", Cricket: "A sports played with a bat and a ball", Bottle: "A container that stores water"}
movie = {Star_Wars: 1973, Avengers: 2013, The_Dark_Knight: 2008}
cities = {Toronto: 2700000, Karachi: 21200000, London: 8788000}
friends = {Roger: 25, Patrick: 20, Lucas: 18}

#exercise5

#1
sum = 0
cities.each do |key, value|
    sum += value
end
p sum

#2

friends.each do |key, value|
  if value >= 20
    puts "#{key} is old"
  else
    puts "#{key} is young"
  end
end

#3

p "#{fav_colors[fav_colors.length - 2]} & #{fav_colors[fav_colors.length - 1]}"

#4

p ages.map { |e| e+1  }

#5
fav_colors.push("light grey", "black")
p fav_colors
