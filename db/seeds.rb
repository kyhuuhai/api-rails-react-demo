user = User.create email: "admin@gmail.com", password: "123456"
Item.all.destroy_all
i = 0;
10.times {
     user.items.create!(name: "Item #{i}", description: "I am a description.") 
     i = i + 1;
    }