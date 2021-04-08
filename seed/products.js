const db = require('../db/connection')
const Product = require('../models/product')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const tempUser = new User({ username: 'firstlast', email: 'firstlast@email.com', password_digest: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJydW5vIiwiZW1haWwiOiJicnVub0BicnVuby5jb20iLCJpYXQiOjE2MTczOTcwNzR9.Khxjb126M_DpaKExZow_SL0U3lkogNScqqF6MiEUd_c', products: [] })
  
  await tempUser.save()

  const products =
    [
      {
        name: "My Items",
        condition: "used",
        details: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod long-and vitality, ut labore et dolore magna aliqua. Ut enim ad minim will I come, who shall nostrud exercise, school district labor, but for to aliquip ex ea commodo consequat. Duis, however, cupidatat pain to find want to be a pain in the pleasure of football flee cillum produces no resultant. Excepteur cupidatat blacks are not excepteur, is soothing to the soul, that is, they deserted the general duties of those who are to blame for your troubles.",
        images: [
          "https://images.unsplash.com/photo-1617679121474-7dbad809be90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
          "https://images.unsplash.com/photo-1617634281504-dd8fc560dec2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          "https://images.unsplash.com/photo-1617665626202-7d27ff13d619?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
        ],
        price: "100",
        contactInfo: tempUser.email,
        userId: tempUser
      },
      {
        name: "Junk in the Trunk",
        condition: "mint",
        details: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod long-and vitality, ut labore et dolore magna aliqua. Ut enim ad minim will I come, who shall nostrud exercise, school district labor, but for to aliquip ex ea commodo consequat. Duis, however, cupidatat pain to find want to be a pain in the pleasure of football flee cillum produces no resultant. Excepteur cupidatat blacks are not excepteur, is soothing to the soul, that is, they deserted the general duties of those who are to blame for your troubles.",
        images: [
          "https://images.unsplash.com/photo-1617617556683-59f379c20619?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1929&q=80",
          "https://images.unsplash.com/photo-1617637357020-73c98e268e41?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          "https://images.unsplash.com/photo-1617679139957-a2a988781f25?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1325&q=80",
        ],
        price: "5000",
        contactInfo: tempUser.email,
        userId: tempUser
      },
      {
        name: "banana",
        condition: "New",
        details: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod long-and vitality, ut labore et dolore magna aliqua. Ut enim ad minim will I come, who shall nostrud exercise, school district labor, but for to aliquip ex ea commodo consequat. Duis, however, cupidatat pain to find want to be a pain in the pleasure of football flee cillum produces no resultant. Excepteur cupidatat blacks are not excepteur, is soothing to the soul, that is, they deserted the general duties of those who are to blame for your troubles.",
        images: [
          "https://images.unsplash.com/photo-1617444114429-fc5dd4bca329?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          "https://images.unsplash.com/photo-1615705255313-eba35dd523c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1467&q=80",
          "https://images.unsplash.com/photo-1616795795564-fc2f3b2e9723?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
        ],
        price: "100",
        contactInfo: tempUser.email,
        userId: tempUser
      },
      {
        name: "sssssttttuuuuuffffffff",
        condition: "yeah",
        details: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod long-and vitality, ut labore et dolore magna aliqua. Ut enim ad minim will I come, who shall nostrud exercise, school district labor, but for to aliquip ex ea commodo consequat. Duis, however, cupidatat pain to find want to be a pain in the pleasure of football flee cillum produces no resultant. Excepteur cupidatat blacks are not excepteur, is soothing to the soul, that is, they deserted the general duties of those who are to blame for your troubles.",
        images: [
          "https://images.unsplash.com/photo-1617507168132-a0ea7eb37c06?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          "https://images.unsplash.com/photo-1617646131887-f4da5b39ade4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",
          " https://images.unsplash.com/photo-1617727553230-3098fb91b184?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        ],
        price: "500",
        contactInfo: tempUser.email,
        userId: tempUser
      },
      {
        name: "Living Life",
        condition: "used",
        details: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod long-and vitality, ut labore et dolore magna aliqua. Ut enim ad minim will I come, who shall nostrud exercise, school district labor, but for to aliquip ex ea commodo consequat. Duis, however, cupidatat pain to find want to be a pain in the pleasure of football flee cillum produces no resultant. Excepteur cupidatat blacks are not excepteur, is soothing to the soul, that is, they deserted the general duties of those who are to blame for your troubles.",
        images: [
          "https://images.unsplash.com/photo-1617790248018-207e49cc4254?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          "https://images.unsplash.com/photo-1617747000350-4db9f7c3a61c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80",
          "",
        ],
        price: "100",
        contactInfo: tempUser.email,
        userId: tempUser
      }
    ]
  
  await Product.insertMany(products)
  console.log("Created products!")

  tempUser.products  = await Product.find({ userId: tempUser })
  await tempUser.save()
}

const run = async () => {
  await main()
  db.close()
}

run()


