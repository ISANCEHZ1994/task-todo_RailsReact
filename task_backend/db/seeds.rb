# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create({
    name: 'Israel Sanchez', email: 'Fakemail@Fakers.com'
})

list1 = List.create({
    title: 'Gym', user_id: user1.id
})

 task1 = Task.create({
    description: 'Work out back and shoulders using dumbells and bar'
})

joiner = ListTaskJoiner.create({
    list_id: list1.id, task_id: task1.id
})

puts 'we seeded!!'