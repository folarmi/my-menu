const Data = [
  {
    id: 1,
    type: "breakfast",
    name: "Akara and ogi",
    price: "300",
    details:
      "This is a sure meal to get you started for the day, better enjoyed when laced with lots of milk.",
    image:
      "https://i.pinimg.com/originals/1d/c4/89/1dc489c413d00dd14d94fed8581bdd45.jpg",
  },
  {
    id: 2,
    type: "breakfast",
    name: "Dodo and Fried Eggs",
    price: "400",
    details:
      "Dodo is bae,especially when accompanied with fried eggs,apologies to those missing out on this",
    image:
      "https://ocdn.eu/images/pulscms/N2U7MDA_/0af1041d863befa197ca2fb1f7592c05.png",
  },
  {
    id: 3,
    type: "breakfast",
    name: "Indomie",
    price: "500",
    details:
      "This is such an easy to cook meal yet its extremely delicious. It can be cooked in various ways",
    image:
      "https://4.bp.blogspot.com/-aUvt1fZLbC8/W-r3Jikb8fI/AAAAAAAAIxI/bbhhES-vpA8ZnPvmw0wFWMz9xpwykrm9QCLcBGAs/s1600/indomie-with-microwave.jpg",
  },
  {
    id: 4,
    name: "Efo riro and Pounded Yam",
    type: "lunch",
    price: "1000",
    details:
      "This combo is best served for lunch, Efo riro can be sent on errands by virtually any swallow. Wahala for who no dey chop am o",
    image:
      "https://i.pinimg.com/originals/64/a0/f6/64a0f6bfe8d45fa3d1404d52b53af518.jpg",
  },
  {
    id: 5,
    type: "lunch",
    name: "Nigerian Jollof Rice",
    price: "1500",
    details:
      "For those that do not enjoy this beautiful delicacy, i have just one question,who you offend? Jollof rice(party own especially) is outta this world.",
    image:
      "https://allnigerianfoods.com/wp-content/uploads/jollof-rice-2-500x485.jpg",
  },
  {
    id: 6,
    type: "lunch",
    name: "Spaghetti",
    price: "2000",
    details:
      "Good old pasta,can be prepared in so many ways: Jollof, Bolognese and so many others. When properly made, leaves you wanting for more",
    image:
      "https://kscuisine.com/wp-content/uploads/2019/07/IMG_20190719_003210.jpg",
  },
  {
    id: 7,
    type: "snack",
    name: "Meatpie",
    price: "500",
    details:
      "This has honestly got to be one of my favourite snack to munch on at any given. Its so tasty and crunchy, plus you get to munch on meat",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 8,
    type: "snack",
    name: "Pancake",
    price: "150",
    details: "Beautiful thing to snack on, easy to make and very filling too",
    image:
      "https://blog.williams-sonoma.com/wp-content/uploads/2020/02/stack-pancakes-blog-post-1000px.jpg",
  },
  {
    id: 9,
    type: "snack",
    name: "Cake",
    price: "4000",
    details:
      "You can never go wrong with a cake, they are such a delight to the eyes.",
    image:
      "https://www.biggerbolderbaking.com/wp-content/uploads/2017/08/1C5A0056-500x500.jpg",
  },
  {
    id: 10,
    type: "snack",
    name: "Ice-cream",
    price: "2000",
    details:
      "Someone once advised a friend to take a bowl of ice-cream because she was sad. Honestly i think it works, because the sight alone is rejuvenating. In whatever flavour it comes,it most definitely calms the mind.",
    image:
      "https://sugarandcloth.com/wp-content/uploads/2019/07/No-Churn-Ice-Cream-5.jpg",
  },
];

export default Data;
