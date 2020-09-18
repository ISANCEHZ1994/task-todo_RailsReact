# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
List.destroy_all
Task.destroy_all
ListTaskJoiner.destroy_all


user1 = User.create({
    name: 'Israel Sanchez', email: 'Fakemail@Fakers.com'
})

user2 = User.create({
    name: 'Raul Sancehz', email: 'raulsg93@gmail.com'
})

list1 = List.create({
    title: 'Gym', user_id: user1.id
})

list2 = List.create({
    title: 'Guitar', user_id: user2.id
})

 task1 = Task.create({
    description: 'Work out back and shoulders using dumbells and bar'
})
 task2 = Task.create({
     description: 'Pratice sick guitar skills - maybe write like 30 songs'
 })

joiner = ListTaskJoiner.create({
    list_id: list1.id, task_id: task1.id
})

joiner2 = ListTaskJoiner.create({
    list_id: list2.id, task_id: task2.id
})

puts 'we seeded!!'