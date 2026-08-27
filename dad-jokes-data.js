/**
 * Daily Dad Jokes - 366 Complete Joke Dataset
 * Sourced from trusted public dad joke repositories (icanhazdadjoke & JokeAPI).
 * Structured for the Daily Dad Jokes application.
 */

const DEFAULT_JOKES = [
  {
    "id": "joke-1",
    "month": 0,
    "day": 1,
    "setup": "What happened to the man who stole a calendar on New Year's Eve?",
    "punchline": "He got twelve months!",
    "category": "holidays",
    "tags": [
      "holidays",
      "holiday",
      "classic",
      "family"
    ]
  },
  {
    "id": "joke-2",
    "month": 0,
    "day": 2,
    "setup": "I'm tired of following my dreams.",
    "punchline": "I'm just going to ask them where they are going and meet up with them later.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-3",
    "month": 0,
    "day": 3,
    "setup": "Did you hear about the guy whose whole left side was cut off?",
    "punchline": "He's all right now.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-4",
    "month": 0,
    "day": 4,
    "setup": "Why didn't the skeleton cross the road?",
    "punchline": "Because he had no guts.",
    "category": "medical",
    "tags": [
      "medical",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-5",
    "month": 0,
    "day": 5,
    "setup": "What did one nut say as he chased another nut?",
    "punchline": "I'm a cashew!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-6",
    "month": 0,
    "day": 6,
    "setup": "Where do fish keep their money?",
    "punchline": "In the riverbank",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-7",
    "month": 0,
    "day": 7,
    "setup": "I accidentally took my cats meds last night.",
    "punchline": "Don't ask meow.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-8",
    "month": 0,
    "day": 8,
    "setup": "Dermatologists are always in a hurry.",
    "punchline": "They spend all day making rash decisions.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-9",
    "month": 0,
    "day": 9,
    "setup": "I won an argument with a weather forecaster once.",
    "punchline": "His logic was cloudy...",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-10",
    "month": 0,
    "day": 10,
    "setup": "How come the stadium got hot after the game?",
    "punchline": "Because all of the fans left.",
    "category": "sports",
    "tags": [
      "sports",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-11",
    "month": 0,
    "day": 11,
    "setup": "Why do seagulls fly over the ocean?",
    "punchline": "Because if they flew over the bay, we'd call them bagels.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-12",
    "month": 0,
    "day": 12,
    "setup": "Why was it called the dark ages?",
    "punchline": "Because of all the knights.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-13",
    "month": 0,
    "day": 13,
    "setup": "Why did the tomato blush?",
    "punchline": "Because it saw the salad dressing.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-14",
    "month": 0,
    "day": 14,
    "setup": "Did you hear the joke about the wandering nun?",
    "punchline": "She was a roman catholic.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-15",
    "month": 0,
    "day": 15,
    "setup": "What creature is smarter than a talking parrot?",
    "punchline": "A spelling bee.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-16",
    "month": 0,
    "day": 16,
    "setup": "I'll tell you what often gets over looked...",
    "punchline": "Garden fences.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-17",
    "month": 0,
    "day": 17,
    "setup": "Why did the kid cross the playground?",
    "punchline": "To get to the other slide.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-18",
    "month": 0,
    "day": 18,
    "setup": "Why do birds fly south for the winter?",
    "punchline": "Because it's too far to walk.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-19",
    "month": 0,
    "day": 19,
    "setup": "What is a centipedes's favorite Beatle song?",
    "punchline": "I want to hold your hand, hand, hand, hand...",
    "category": "music",
    "tags": [
      "music",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-20",
    "month": 0,
    "day": 20,
    "setup": "My first time using an elevator was an uplifting experience.",
    "punchline": "The second time let me down.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-21",
    "month": 0,
    "day": 21,
    "setup": "What do you call a female snake.",
    "punchline": "Misssssssss",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-22",
    "month": 0,
    "day": 22,
    "setup": "Why does a Moon-rock taste better than an Earth-rock?",
    "punchline": "Because it's a little meteor.",
    "category": "science",
    "tags": [
      "science",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-23",
    "month": 0,
    "day": 23,
    "setup": "I thought my wife was joking when she said she'd leave me if I didn't stop signing \"I'm A Believer\"...",
    "punchline": "Then I saw her face.",
    "category": "work",
    "tags": [
      "work",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-24",
    "month": 0,
    "day": 24,
    "setup": "I'm only familiar with 25 letters in the English language.",
    "punchline": "I don't know why.",
    "category": "wordplay",
    "tags": [
      "wordplay",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-25",
    "month": 0,
    "day": 25,
    "setup": "What do you call two barracuda fish?",
    "punchline": "A Pairacuda!",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-26",
    "month": 0,
    "day": 26,
    "setup": "What did the father tomato say to the baby tomato whilst on a family walk?",
    "punchline": "Ketchup.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-27",
    "month": 0,
    "day": 27,
    "setup": "Why is Peter Pan always flying?",
    "punchline": "Because he Neverlands.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-28",
    "month": 0,
    "day": 28,
    "setup": "What do you do on a remote island?",
    "punchline": "Try and find the TV island it belongs to.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-29",
    "month": 0,
    "day": 29,
    "setup": "Did you know that protons have mass?",
    "punchline": "I didn't even know they were catholic.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-30",
    "month": 0,
    "day": 30,
    "setup": "I was fired from the keyboard factory yesterday.",
    "punchline": "I wasn't putting in enough shifts.",
    "category": "tech",
    "tags": [
      "tech",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-31",
    "month": 0,
    "day": 31,
    "setup": "Wife: Honey I'm pregnant. Me: Well…. what do we do now?",
    "punchline": "Wife: Well, I guess we should go to a baby doctor. Me: Hm.. I think I'd be a lot more comfortable going to an adult doctor.",
    "category": "medical",
    "tags": [
      "medical",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-32",
    "month": 1,
    "day": 1,
    "setup": "Have you heard the story about the magic tractor?",
    "punchline": "It drove down the road and turned into a field.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-33",
    "month": 1,
    "day": 2,
    "setup": "Why are groundhogs so good at predicting winter?",
    "punchline": "Because they're outstanding in their field!",
    "category": "holidays",
    "tags": [
      "holidays",
      "holiday",
      "classic",
      "family"
    ]
  },
  {
    "id": "joke-34",
    "month": 1,
    "day": 3,
    "setup": "When will the little snake arrive?",
    "punchline": "I don't know but he won't be long...",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-35",
    "month": 1,
    "day": 4,
    "setup": "Why was Pavlov's beard so soft?",
    "punchline": "Because he conditioned it.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-36",
    "month": 1,
    "day": 5,
    "setup": "Do I enjoy making courthouse puns?",
    "punchline": "Guilty",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-37",
    "month": 1,
    "day": 6,
    "setup": "Why did the kid throw the clock out the window?",
    "punchline": "He wanted to see time fly!",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-38",
    "month": 1,
    "day": 7,
    "setup": "Hear about the new restaurant called Karma?",
    "punchline": "There's no menu: You get what you deserve.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-39",
    "month": 1,
    "day": 8,
    "setup": "Why couldn't the kid see the pirate movie?",
    "punchline": "Because it was rated arrr!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-40",
    "month": 1,
    "day": 9,
    "setup": "It was so cold yesterday my computer froze.",
    "punchline": "My own fault though, I left too many windows open.",
    "category": "tech",
    "tags": [
      "tech",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-41",
    "month": 1,
    "day": 10,
    "setup": "Man, I really love my furniture...",
    "punchline": "Me and my recliner go way back.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-42",
    "month": 1,
    "day": 11,
    "setup": "What did the traffic light say to the car as it passed?",
    "punchline": "Don't look I'm changing!",
    "category": "science",
    "tags": [
      "science",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-43",
    "month": 1,
    "day": 12,
    "setup": "Why did the man run around his bed?",
    "punchline": "Because he was trying to catch up on his sleep!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-44",
    "month": 1,
    "day": 13,
    "setup": "What did one wall say to the other wall?",
    "punchline": "I'll meet you at the corner!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-45",
    "month": 1,
    "day": 14,
    "setup": "What did one light bulb say to the other on Valentine's Day?",
    "punchline": "I love you watts and watts!",
    "category": "holidays",
    "tags": [
      "holidays",
      "holiday",
      "classic",
      "family"
    ]
  },
  {
    "id": "joke-46",
    "month": 1,
    "day": 15,
    "setup": "Sometimes I tuck my knees into my chest and lean forward.",
    "punchline": "That's just how I roll.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-47",
    "month": 1,
    "day": 16,
    "setup": "How many South Americans does it take to change a lightbulb?",
    "punchline": "A Brazilian",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-48",
    "month": 1,
    "day": 17,
    "setup": "I don't trust stairs.",
    "punchline": "They're always up to something.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-49",
    "month": 1,
    "day": 18,
    "setup": "What do you call two guys hanging out by your window?",
    "punchline": "Kurt & Rod.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-50",
    "month": 1,
    "day": 19,
    "setup": "Why was the robot angry?",
    "punchline": "Because someone kept pressing his buttons!",
    "category": "tech",
    "tags": [
      "tech",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-51",
    "month": 1,
    "day": 20,
    "setup": "Which is the fastest growing city in the world?",
    "punchline": "Dublin",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-52",
    "month": 1,
    "day": 21,
    "setup": "A police officer caught two kids playing with a firework and a car battery.",
    "punchline": "He charged one and let the other one off.",
    "category": "family",
    "tags": [
      "family",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-53",
    "month": 1,
    "day": 22,
    "setup": "What do you call a snake who builds houses?",
    "punchline": "A boa constructor!",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-54",
    "month": 1,
    "day": 23,
    "setup": "What is the difference between ignorance and apathy?",
    "punchline": "I don't know and I don't care.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-55",
    "month": 1,
    "day": 24,
    "setup": "I went to a Foo Fighters Concert once...",
    "punchline": "It was Everlong...",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-56",
    "month": 1,
    "day": 25,
    "setup": "Why did the sentence fail the driving test?",
    "punchline": "It never came to a full stop.",
    "category": "wordplay",
    "tags": [
      "wordplay",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-57",
    "month": 1,
    "day": 26,
    "setup": "Some people eat light bulbs.",
    "punchline": "They say it's a nice light snack.",
    "category": "science",
    "tags": [
      "science",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-58",
    "month": 1,
    "day": 27,
    "setup": "What's the difference between a rooster and a crow?",
    "punchline": "A rooster can crow but a crow cannot rooster.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-59",
    "month": 1,
    "day": 28,
    "setup": "I went to the store to pick up eight cans of sprite...",
    "punchline": "When I got home I realized I'd only picked seven up",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-60",
    "month": 1,
    "day": 29,
    "setup": "Why are leap years so energetic and bouncy?",
    "punchline": "Because they have an extra spring in their step!",
    "category": "holidays",
    "tags": [
      "holidays",
      "holiday",
      "classic",
      "family"
    ]
  },
  {
    "id": "joke-61",
    "month": 2,
    "day": 1,
    "setup": "Yesterday, I accidentally swallowed some food coloring.",
    "punchline": "The doctor says I'm okay, but I feel like I've dyed a little inside.",
    "category": "medical",
    "tags": [
      "medical",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-62",
    "month": 2,
    "day": 2,
    "setup": "When people are sad, I sometimes let them colour in my tattoos.",
    "punchline": "Sometimes all they need is a shoulder to crayon.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-63",
    "month": 2,
    "day": 3,
    "setup": "Last night me and my girlfriend watched three DVDs back to back.",
    "punchline": "Luckily I was the one facing the TV.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-64",
    "month": 2,
    "day": 4,
    "setup": "What do you get when you cross a pig and a pineapple?",
    "punchline": "A porky pine",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-65",
    "month": 2,
    "day": 5,
    "setup": "What did Romans use to cut pizza before the rolling cutter was invented?",
    "punchline": "Lil Caesars",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-66",
    "month": 2,
    "day": 6,
    "setup": "Why did the banana go to the doctor?",
    "punchline": "He was not \"peeling\" well.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-67",
    "month": 2,
    "day": 7,
    "setup": "My pet mouse 'Elvis' died last night.",
    "punchline": "He was caught in a trap..",
    "category": "tech",
    "tags": [
      "tech",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-68",
    "month": 2,
    "day": 8,
    "setup": "Never take advice from electrons.",
    "punchline": "They are always negative.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-69",
    "month": 2,
    "day": 9,
    "setup": "Why are oranges the smartest fruit?",
    "punchline": "Because they are made to concentrate.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-70",
    "month": 2,
    "day": 10,
    "setup": "Why is it always hot in the corner of a room?",
    "punchline": "Because a corner is 90 degrees.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-71",
    "month": 2,
    "day": 11,
    "setup": "What did the beaver say to the tree?",
    "punchline": "It's been nice gnawing you.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-72",
    "month": 2,
    "day": 12,
    "setup": "How do you fix a damaged jack-o-lantern?",
    "punchline": "You use a pumpkin patch.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-73",
    "month": 2,
    "day": 13,
    "setup": "Why do cows not have toes?",
    "punchline": "They lactose!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-74",
    "month": 2,
    "day": 14,
    "setup": "What do you get when you cross a geometry teacher with a baker on March 14th?",
    "punchline": "Pumpkin Pi!",
    "category": "holidays",
    "tags": [
      "holidays",
      "holiday",
      "classic",
      "family"
    ]
  },
  {
    "id": "joke-75",
    "month": 2,
    "day": 15,
    "setup": "What did the late tomato say to the early tomato?",
    "punchline": "I'll ketch up",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-76",
    "month": 2,
    "day": 16,
    "setup": "When is a door not a door?",
    "punchline": "When it's ajar.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-77",
    "month": 2,
    "day": 17,
    "setup": "Why should you never iron a four-leaf clover on St. Patrick's Day?",
    "punchline": "Because you shouldn't press your luck!",
    "category": "holidays",
    "tags": [
      "holidays",
      "holiday",
      "classic",
      "family"
    ]
  },
  {
    "id": "joke-78",
    "month": 2,
    "day": 18,
    "setup": "I made a belt out of watches once...",
    "punchline": "It was a waist of time.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-79",
    "month": 2,
    "day": 19,
    "setup": "How do you find Will Smith in the snow?",
    "punchline": "Look for fresh prints.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-80",
    "month": 2,
    "day": 20,
    "setup": "My sister bet me $15 that I couldn't build a car out of spaghetti.",
    "punchline": "You should have seen the look on her face as I drove pasta.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-81",
    "month": 2,
    "day": 21,
    "setup": "My boss told me to have a good day...",
    "punchline": "So I went home.",
    "category": "work",
    "tags": [
      "work",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-82",
    "month": 2,
    "day": 22,
    "setup": "I just read a book about Stockholm syndrome.",
    "punchline": "It was pretty bad at first, but by the end I liked it.",
    "category": "wordplay",
    "tags": [
      "wordplay",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-83",
    "month": 2,
    "day": 23,
    "setup": "Why do trees seem suspicious on sunny days?",
    "punchline": "Dunno, they're just a bit shady.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-84",
    "month": 2,
    "day": 24,
    "setup": "What did the drummer name her twin daughters?",
    "punchline": "Anna One, Anna Two...",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-85",
    "month": 2,
    "day": 25,
    "setup": "I remember when I was a kid, I opened my fridge and noticed one of my vegetables were crying.",
    "punchline": "I guess I have some emotional cabbage.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-86",
    "month": 2,
    "day": 26,
    "setup": "What's large, grey, and doesn't matter?",
    "punchline": "An irrelephant.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-87",
    "month": 2,
    "day": 27,
    "setup": "A book just fell on my head.",
    "punchline": "I only have my shelf to blame.",
    "category": "wordplay",
    "tags": [
      "wordplay",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-88",
    "month": 2,
    "day": 28,
    "setup": "What did the dog say to the two trees?",
    "punchline": "Bark bark.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-89",
    "month": 2,
    "day": 29,
    "setup": "I've got a joke about vegetables for you...",
    "punchline": "But it's a bit corny.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-90",
    "month": 2,
    "day": 30,
    "setup": "Why can't your nose be 12 inches long?",
    "punchline": "Because then it'd be a foot!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-91",
    "month": 2,
    "day": 31,
    "setup": "Have you ever heard of a music group called Cellophane?",
    "punchline": "They mostly wrap.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-92",
    "month": 3,
    "day": 1,
    "setup": "Why was April Fools' Day so tired after the joke marathon?",
    "punchline": "Because it just finished a 31-day March!",
    "category": "holidays",
    "tags": [
      "holidays",
      "holiday",
      "classic",
      "family"
    ]
  },
  {
    "id": "joke-93",
    "month": 3,
    "day": 2,
    "setup": "What do you call a boy who stopped digging holes?",
    "punchline": "Douglas.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-94",
    "month": 3,
    "day": 3,
    "setup": "What did the mountain climber name his son?",
    "punchline": "Cliff.",
    "category": "family",
    "tags": [
      "family",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-95",
    "month": 3,
    "day": 4,
    "setup": "Why should you never trust a pig with a secret?",
    "punchline": "Because it's bound to squeal.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-96",
    "month": 3,
    "day": 5,
    "setup": "Why are mummys scared of vacation?",
    "punchline": "They're afraid to unwind.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-97",
    "month": 3,
    "day": 6,
    "setup": "What kind of dinosaur loves to sleep?",
    "punchline": "A stega-snore-us.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-98",
    "month": 3,
    "day": 7,
    "setup": "What has three letters and starts with gas?",
    "punchline": "A Car.",
    "category": "wordplay",
    "tags": [
      "wordplay",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-99",
    "month": 3,
    "day": 8,
    "setup": "What's Forest Gump's Facebook password?",
    "punchline": "1forest1",
    "category": "tech",
    "tags": [
      "tech",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-100",
    "month": 3,
    "day": 9,
    "setup": "What kind of tree fits in your hand?",
    "punchline": "A palm tree!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-101",
    "month": 3,
    "day": 10,
    "setup": "How many tickles does it take to tickle an octopus?",
    "punchline": "Ten-tickles!",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-102",
    "month": 3,
    "day": 11,
    "setup": "Me: If humans lose the ability to hear high frequency volumes as they get older, can my 4 week old son hear a dog whistle?",
    "punchline": "Doctor: No, humans can never hear that high of a frequency no matter what age they are. Me: Trick question... dogs can't whistle.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-103",
    "month": 3,
    "day": 12,
    "setup": "What musical instrument is found in the bathroom?",
    "punchline": "A tuba toothpaste.",
    "category": "music",
    "tags": [
      "music",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-104",
    "month": 3,
    "day": 13,
    "setup": "I can't take my dog to the pond anymore because the ducks keep attacking him.",
    "punchline": "That's what I get for buying a pure bread dog.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-105",
    "month": 3,
    "day": 14,
    "setup": "My boss told me to attach two pieces of wood together...",
    "punchline": "I totally nailed it!",
    "category": "work",
    "tags": [
      "work",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-106",
    "month": 3,
    "day": 15,
    "setup": "What was the pumpkin's favorite sport?",
    "punchline": "Squash.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-107",
    "month": 3,
    "day": 16,
    "setup": "What do you call corn that joins the army?",
    "punchline": "Kernel.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-108",
    "month": 3,
    "day": 17,
    "setup": "I've been trying to come up with a dad joke about momentum . . .",
    "punchline": "But I just can't seem to get it going.",
    "category": "family",
    "tags": [
      "family",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-109",
    "month": 3,
    "day": 18,
    "setup": "Why don't skeletons ride roller coasters?",
    "punchline": "They don't have the stomach for it.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-110",
    "month": 3,
    "day": 19,
    "setup": "Is there a hole in your shoe?",
    "punchline": "No… Then how'd you get your foot in it?",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-111",
    "month": 3,
    "day": 20,
    "setup": "Every night at 11:",
    "punchline": "11, I make a wish that someone will come fix my broken clock.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-112",
    "month": 3,
    "day": 21,
    "setup": "Two muffins were sitting in an oven, and the first looks over to the second, and says, \"man, it's really hot in here\".",
    "punchline": "The second looks over at the first with a surprised look, and answers, \"WHOA, a talking muffin!",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-113",
    "month": 3,
    "day": 22,
    "setup": "What's the difference between a guitar and a fish?",
    "punchline": "You can tune a guitar but you can't \"tuna\" fish!",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-114",
    "month": 3,
    "day": 23,
    "setup": "Did you hear that the police have a warrant out on a midget psychic ripping people off?",
    "punchline": "It reads \"Small medium at large.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-115",
    "month": 3,
    "day": 24,
    "setup": "Why don't sharks eat clowns?",
    "punchline": "Because they taste funny.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-116",
    "month": 3,
    "day": 25,
    "setup": "Just read a few facts about frogs.",
    "punchline": "They were ribbiting.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-117",
    "month": 3,
    "day": 26,
    "setup": "Two satellites decided to get married.",
    "punchline": "The wedding wasn't much, but the reception was incredible.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-118",
    "month": 3,
    "day": 27,
    "setup": "What do you call a fish with no eyes?",
    "punchline": "A fsh.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-119",
    "month": 3,
    "day": 28,
    "setup": "What do you get if you put a duck in a cement mixer?",
    "punchline": "Quacks in the pavement.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-120",
    "month": 3,
    "day": 29,
    "setup": "They tried to make a diamond shaped like a duck.",
    "punchline": "It quacked under the pressure.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-121",
    "month": 3,
    "day": 30,
    "setup": "My wife said I was immature.",
    "punchline": "So I told her to get out of my fort.",
    "category": "family",
    "tags": [
      "family",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-122",
    "month": 4,
    "day": 1,
    "setup": "How do you make a water bed more bouncy.",
    "punchline": "You use Spring Water",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-123",
    "month": 4,
    "day": 2,
    "setup": "I considered building the patio by myself.",
    "punchline": "But I didn't have the stones.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-124",
    "month": 4,
    "day": 3,
    "setup": "In my career as a lumberjack I cut down exactly 52,487 trees.",
    "punchline": "I know because I kept a log.",
    "category": "work",
    "tags": [
      "work",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-125",
    "month": 4,
    "day": 4,
    "setup": "Why did the Jedi cross the road on May the Fourth?",
    "punchline": "To get to the Dark Side!",
    "category": "holidays",
    "tags": [
      "holidays",
      "holiday",
      "classic",
      "family"
    ]
  },
  {
    "id": "joke-126",
    "month": 4,
    "day": 5,
    "setup": "Why do bears have hairy coats?",
    "punchline": "Fur protection.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-127",
    "month": 4,
    "day": 6,
    "setup": "What do you get when you cross a bee and a sheep?",
    "punchline": "A bah-humbug.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-128",
    "month": 4,
    "day": 7,
    "setup": "What did one snowman say to the other snow man?",
    "punchline": "Do you smell carrot?",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-129",
    "month": 4,
    "day": 8,
    "setup": "Dad, do you think it's going to snow this winter?",
    "punchline": "I dont know, its all up in the air",
    "category": "family",
    "tags": [
      "family",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-130",
    "month": 4,
    "day": 9,
    "setup": "What do you call a troublesome Canadian high schooler?",
    "punchline": "A poutine.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-131",
    "month": 4,
    "day": 10,
    "setup": "Don't trust atoms.",
    "punchline": "They make up everything.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-132",
    "month": 4,
    "day": 11,
    "setup": "Where do bees go to the bathroom?",
    "punchline": "The BP station.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-133",
    "month": 4,
    "day": 12,
    "setup": "What is the best way to carve?",
    "punchline": "Whittle by whittle.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-134",
    "month": 4,
    "day": 13,
    "setup": "What's a ninja's favorite type of shoes?",
    "punchline": "Sneakers!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-135",
    "month": 4,
    "day": 14,
    "setup": "Why did the tree go to the dentist?",
    "punchline": "It needed a root canal.",
    "category": "medical",
    "tags": [
      "medical",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-136",
    "month": 4,
    "day": 15,
    "setup": "It was raining cats and dogs the other day.",
    "punchline": "I almost stepped in a poodle.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-137",
    "month": 4,
    "day": 16,
    "setup": "Why do bananas have to put on sunscreen before they go to the beach?",
    "punchline": "Because they might peel!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-138",
    "month": 4,
    "day": 17,
    "setup": "What do you call a bee that lives in America?",
    "punchline": "A USB.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-139",
    "month": 4,
    "day": 18,
    "setup": "What's the difference between a hippo and a zippo?",
    "punchline": "One is really heavy, the other is a little lighter.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-140",
    "month": 4,
    "day": 19,
    "setup": "I've got this disease where I can't stop making airport puns.",
    "punchline": "The doctor says it terminal.",
    "category": "medical",
    "tags": [
      "medical",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-141",
    "month": 4,
    "day": 20,
    "setup": "What concert costs only 45 cents?",
    "punchline": "50 cent featuring Nickelback.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-142",
    "month": 4,
    "day": 21,
    "setup": "I couldn't figure out how the seat belt worked.",
    "punchline": "Then it just clicked.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-143",
    "month": 4,
    "day": 22,
    "setup": "What did the green grape say to the purple grape?",
    "punchline": "BREATH!!",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-144",
    "month": 4,
    "day": 23,
    "setup": "What do you call a dad that has fallen through the ice?",
    "punchline": "A Popsicle.",
    "category": "family",
    "tags": [
      "family",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-145",
    "month": 4,
    "day": 24,
    "setup": "I had a pair of racing snails.",
    "punchline": "I removed their shells to make them more aerodynamic, but they became sluggish.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-146",
    "month": 4,
    "day": 25,
    "setup": "What do you call a pile of cats?",
    "punchline": "A Meowtain.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-147",
    "month": 4,
    "day": 26,
    "setup": "How do hens stay fit?",
    "punchline": "They always egg-cercise!",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-148",
    "month": 4,
    "day": 27,
    "setup": "Can a kangaroo jump higher than the Empire State Building?",
    "punchline": "Of course. The Empire State Building can't jump.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-149",
    "month": 4,
    "day": 28,
    "setup": "What do you give a sick lemon?",
    "punchline": "Lemonaid.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-150",
    "month": 4,
    "day": 29,
    "setup": "What do you call an old snowman?",
    "punchline": "Water.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-151",
    "month": 4,
    "day": 30,
    "setup": "I tried to milk a cow today, but was unsuccessful.",
    "punchline": "Udder failure.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-152",
    "month": 4,
    "day": 31,
    "setup": "Why don't skeletons ever go trick or treating?",
    "punchline": "Because they have nobody to go with.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-153",
    "month": 5,
    "day": 1,
    "setup": "What does a female snake use for support?",
    "punchline": "A co-Bra!",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-154",
    "month": 5,
    "day": 2,
    "setup": "Child: Dad, make me a sandwich. Dad: Poof!",
    "punchline": "You're a sandwich.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-155",
    "month": 5,
    "day": 3,
    "setup": "which flower is most fierce?",
    "punchline": "Dandelion",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-156",
    "month": 5,
    "day": 4,
    "setup": "What kind of bagel can fly?",
    "punchline": "A plain bagel.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-157",
    "month": 5,
    "day": 5,
    "setup": "How many apples grow on a tree?",
    "punchline": "All of them!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-158",
    "month": 5,
    "day": 6,
    "setup": "What do you call a careful wolf?",
    "punchline": "Aware wolf.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-159",
    "month": 5,
    "day": 7,
    "setup": "I was just looking at my ceiling.",
    "punchline": "Not sure if it's the best ceiling in the world, but it's definitely up there.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-160",
    "month": 5,
    "day": 8,
    "setup": "Why do valley girls hang out in odd numbered groups?",
    "punchline": "Because they can't even.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-161",
    "month": 5,
    "day": 9,
    "setup": "My Dog has no nose.\" \"How does he smell?",
    "punchline": "Awful",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-162",
    "month": 5,
    "day": 10,
    "setup": "What do you call a cow with no legs?",
    "punchline": "Ground beef.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-163",
    "month": 5,
    "day": 11,
    "setup": "Why are snake races so exciting?",
    "punchline": "They're always neck and neck.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-164",
    "month": 5,
    "day": 12,
    "setup": "Why did the half blind man fall in the well?",
    "punchline": "Because he couldn't see that well!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-165",
    "month": 5,
    "day": 13,
    "setup": "As I suspected, someone has been adding soil to my garden.",
    "punchline": "The plot thickens.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-166",
    "month": 5,
    "day": 14,
    "setup": "What do bees do after they are married?",
    "punchline": "They go on a honeymoon.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-167",
    "month": 5,
    "day": 15,
    "setup": "Why doesn't the Chimney-Sweep call out sick from work?",
    "punchline": "Because he's used to working with a flue.",
    "category": "work",
    "tags": [
      "work",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-168",
    "month": 5,
    "day": 16,
    "setup": "What did one plate say to the other plate?",
    "punchline": "Dinner is on me!",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-169",
    "month": 5,
    "day": 17,
    "setup": "what do you call a dog that can do magic tricks?",
    "punchline": "A labracadabrador",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-170",
    "month": 5,
    "day": 18,
    "setup": "Doctor: Do you want to hear the good news or the bad news?",
    "punchline": "Patient: Good news please. Doctor: we're naming a disease after you.",
    "category": "medical",
    "tags": [
      "medical",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-171",
    "month": 5,
    "day": 19,
    "setup": "I gave my friend 10 puns hoping that one of them would make him laugh.",
    "punchline": "Sadly, no pun in ten did.",
    "category": "wordplay",
    "tags": [
      "wordplay",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-172",
    "month": 5,
    "day": 20,
    "setup": "What do computers and air conditioners have in common?",
    "punchline": "They both become useless when you open windows.",
    "category": "tech",
    "tags": [
      "tech",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-173",
    "month": 5,
    "day": 21,
    "setup": "What do you call a monkey in a mine field?",
    "punchline": "A babooooom!",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-174",
    "month": 5,
    "day": 22,
    "setup": "Scientists finally did a study on forks.",
    "punchline": "It's about tine!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-175",
    "month": 5,
    "day": 23,
    "setup": "I cut my finger cutting cheese.",
    "punchline": "I know it may be a cheesy story but I feel grate now.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-176",
    "month": 5,
    "day": 24,
    "setup": "How do you steal a coat?",
    "punchline": "You jacket.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-177",
    "month": 5,
    "day": 25,
    "setup": "Why don't you find hippopotamuses hiding in trees?",
    "punchline": "They're really good at it.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-178",
    "month": 5,
    "day": 26,
    "setup": "what happens when you cross a sheep with a kangaroo ?",
    "punchline": "A woolly jumper!",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-179",
    "month": 5,
    "day": 27,
    "setup": "Want to hear a joke about construction?",
    "punchline": "Nah, I'm still working on it.",
    "category": "work",
    "tags": [
      "work",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-180",
    "month": 5,
    "day": 28,
    "setup": "Why do choirs keep buckets handy?",
    "punchline": "So they can carry their tune",
    "category": "music",
    "tags": [
      "music",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-181",
    "month": 5,
    "day": 29,
    "setup": "Did you hear about the kidnapping at school?",
    "punchline": "It's ok, he woke up.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-182",
    "month": 5,
    "day": 30,
    "setup": "I asked my date to go to the gym the other day. They never showed up.",
    "punchline": "That's when I knew we wouldn't work out.",
    "category": "work",
    "tags": [
      "work",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-183",
    "month": 6,
    "day": 1,
    "setup": "You will never guess what Elsa did to the balloon.",
    "punchline": "She let it go.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-184",
    "month": 6,
    "day": 2,
    "setup": "Did you hear about the two thieves who stole a calendar?",
    "punchline": "They each got six months.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-185",
    "month": 6,
    "day": 3,
    "setup": "Why can't eggs have love?",
    "punchline": "They will break up too soon.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-186",
    "month": 6,
    "day": 4,
    "setup": "What did one patriotic firework say to the other on the Fourth of July?",
    "punchline": "You look re-mark-able tonight!",
    "category": "holidays",
    "tags": [
      "holidays",
      "holiday",
      "classic",
      "family"
    ]
  },
  {
    "id": "joke-187",
    "month": 6,
    "day": 5,
    "setup": "You can't run through a camp site.",
    "punchline": "You can only ran, because it's past tents.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-188",
    "month": 6,
    "day": 6,
    "setup": "They're making a movie about clocks.",
    "punchline": "It's about time",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-189",
    "month": 6,
    "day": 7,
    "setup": "Have you ever seen fruit preserves being made?",
    "punchline": "It's jarring.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-190",
    "month": 6,
    "day": 8,
    "setup": "Have you heard about the owl sanctuary job opening?",
    "punchline": "It's all night shifts but they're all a hoot over there.",
    "category": "work",
    "tags": [
      "work",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-191",
    "month": 6,
    "day": 9,
    "setup": "Why can't you use \"Beef stew\" as a password?",
    "punchline": "Because it's not stroganoff.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-192",
    "month": 6,
    "day": 10,
    "setup": "Why couldn't the lifeguard save the hippie?",
    "punchline": "He was too far out, man.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-193",
    "month": 6,
    "day": 11,
    "setup": "Some people say that I never got over my obsession with Phil Collins.",
    "punchline": "But take a look at me now.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-194",
    "month": 6,
    "day": 12,
    "setup": "Why did the girl smear peanut butter on the road?",
    "punchline": "To go with the traffic jam.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-195",
    "month": 6,
    "day": 13,
    "setup": "How much does a hipster weigh?",
    "punchline": "An instagram.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-196",
    "month": 6,
    "day": 14,
    "setup": "What kind of dog lives in a particle accelerator?",
    "punchline": "A Fermilabrador Retriever.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-197",
    "month": 6,
    "day": 15,
    "setup": "What's blue and not very heavy?",
    "punchline": "Light blue.",
    "category": "science",
    "tags": [
      "science",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-198",
    "month": 6,
    "day": 16,
    "setup": "Guy told me today he did not know what cloning is.",
    "punchline": "I told him, \"that makes 2 of us.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-199",
    "month": 6,
    "day": 17,
    "setup": "Where did you learn to make ice cream?",
    "punchline": "Sunday school.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-200",
    "month": 6,
    "day": 18,
    "setup": "A quick shoutout to all of the sidewalks out there...",
    "punchline": "Thanks for keeping me off the streets.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-201",
    "month": 6,
    "day": 19,
    "setup": "Where does Napoleon keep his armies?",
    "punchline": "In his sleevies.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-202",
    "month": 6,
    "day": 20,
    "setup": "What do you get if you cross a turkey with a ghost?",
    "punchline": "A poultry-geist!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-203",
    "month": 6,
    "day": 21,
    "setup": "What is the tallest building in the world?",
    "punchline": "The library – it's got the most stories!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-204",
    "month": 6,
    "day": 22,
    "setup": "What kind of magic do cows believe in?",
    "punchline": "MOODOO.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-205",
    "month": 6,
    "day": 23,
    "setup": "What's the longest word in the dictionary?",
    "punchline": "Smiles. Because there's a mile between the two S's.",
    "category": "wordplay",
    "tags": [
      "wordplay",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-206",
    "month": 6,
    "day": 24,
    "setup": "Why don't eggs tell jokes?",
    "punchline": "They'd crack each other up",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-207",
    "month": 6,
    "day": 25,
    "setup": "I just broke my guitar.",
    "punchline": "It's okay, I won't fret",
    "category": "music",
    "tags": [
      "music",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-208",
    "month": 6,
    "day": 26,
    "setup": "How many kids with ADD does it take to change a lightbulb?",
    "punchline": "Let's go ride bikes!",
    "category": "family",
    "tags": [
      "family",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-209",
    "month": 6,
    "day": 27,
    "setup": "Where do hamburgers go to dance?",
    "punchline": "The meat-ball.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-210",
    "month": 6,
    "day": 28,
    "setup": "I invented a new word!",
    "punchline": "Plagiarism!",
    "category": "wordplay",
    "tags": [
      "wordplay",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-211",
    "month": 6,
    "day": 29,
    "setup": "What do you call a cow with two legs?",
    "punchline": "Lean beef.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-212",
    "month": 6,
    "day": 30,
    "setup": "What did the big flower say to the littler flower?",
    "punchline": "Hi, bud!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-213",
    "month": 6,
    "day": 31,
    "setup": "I never wanted to believe that my Dad was stealing from his job as a road worker.",
    "punchline": "But when I got home, all the signs were there.",
    "category": "work",
    "tags": [
      "work",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-214",
    "month": 7,
    "day": 1,
    "setup": "Why do pumpkins sit on people's porches?",
    "punchline": "They have no hands to knock on the door.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-215",
    "month": 7,
    "day": 2,
    "setup": "Who is the coolest Doctor in the hospital?",
    "punchline": "The hip Doctor!",
    "category": "medical",
    "tags": [
      "medical",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-216",
    "month": 7,
    "day": 3,
    "setup": "Why was ten scared of seven?",
    "punchline": "Because seven ate nine.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-217",
    "month": 7,
    "day": 4,
    "setup": "What do you get when you cross a rabbit with a water hose?",
    "punchline": "Hare spray.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-218",
    "month": 7,
    "day": 5,
    "setup": "I applied to be a doorman but didn't get the job due to lack of experience.",
    "punchline": "That surprised me, I thought it was an entry level position.",
    "category": "work",
    "tags": [
      "work",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-219",
    "month": 7,
    "day": 6,
    "setup": "A boy dug three holes in the yard.",
    "punchline": "When his mother saw, she exclaimed: \"well, well, well",
    "category": "work",
    "tags": [
      "work",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-220",
    "month": 7,
    "day": 7,
    "setup": "Why was the shirt happy to hang around the tank top?",
    "punchline": "Because it was armless",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-221",
    "month": 7,
    "day": 8,
    "setup": "Why does a chicken coop only have two doors?",
    "punchline": "Because if it had four doors it would be a chicken sedan.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-222",
    "month": 7,
    "day": 9,
    "setup": "Why did the teddy bear say \"no\" to dessert?",
    "punchline": "Because she was stuffed.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-223",
    "month": 7,
    "day": 10,
    "setup": "Did you hear the one about the giant pickle?",
    "punchline": "He was kind of a big dill.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-224",
    "month": 7,
    "day": 11,
    "setup": "How many bones are in the human hand?",
    "punchline": "A handful of them.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-225",
    "month": 7,
    "day": 12,
    "setup": "A red and a blue ship have just collided in the Caribbean.",
    "punchline": "Apparently the survivors are marooned.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-226",
    "month": 7,
    "day": 13,
    "setup": "I've just written a song about a tortilla.",
    "punchline": "Well, it is more of a rap really.",
    "category": "music",
    "tags": [
      "music",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-227",
    "month": 7,
    "day": 14,
    "setup": "Can February march?",
    "punchline": "No, but April may.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-228",
    "month": 7,
    "day": 15,
    "setup": "What is a witch's favorite subject in school?",
    "punchline": "Spelling!",
    "category": "wordplay",
    "tags": [
      "wordplay",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-229",
    "month": 7,
    "day": 16,
    "setup": "What do you call a crowd of chess players bragging about their wins in a hotel lobby?",
    "punchline": "Chess nuts boasting in an open foyer.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-230",
    "month": 7,
    "day": 17,
    "setup": "Which side of the chicken has more feathers?",
    "punchline": "The outside.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-231",
    "month": 7,
    "day": 18,
    "setup": "Why are fish easy to weigh?",
    "punchline": "Because they have their own scales.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-232",
    "month": 7,
    "day": 19,
    "setup": "What did the scarf say to the hat?",
    "punchline": "You go on ahead, I am going to hang around a bit longer.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-233",
    "month": 7,
    "day": 20,
    "setup": "Did you hear about the scientist who was lab partners with a pot of boiling water?",
    "punchline": "He had a very esteemed colleague.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-234",
    "month": 7,
    "day": 21,
    "setup": "What did the sea say to the sand?",
    "punchline": "We have to stop meeting like this.",
    "category": "work",
    "tags": [
      "work",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-235",
    "month": 7,
    "day": 22,
    "setup": "Why is it so windy inside an arena?",
    "punchline": "All those fans.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-236",
    "month": 7,
    "day": 23,
    "setup": "A panda walks into a bar and says to the bartender \"I'll have a Scotch and . . . . . . . . . . . . . . Coke thank you\". \"Sure thing\" the bartender replies and asks \"but what's with the big pause?",
    "punchline": "The panda holds up his hands and says \"I was born with them",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-237",
    "month": 7,
    "day": 24,
    "setup": "I've started telling everyone about the benefits of eating dried grapes.",
    "punchline": "It's all about raisin awareness.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-238",
    "month": 7,
    "day": 25,
    "setup": "Where was the Declaration of Independence signed?",
    "punchline": "At the bottom!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-239",
    "month": 7,
    "day": 26,
    "setup": "What's the difference between an African elephant and an Indian elephant?",
    "punchline": "About 5000 miles.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-240",
    "month": 7,
    "day": 27,
    "setup": "Two peanuts were walking down the street.",
    "punchline": "One was a salted",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-241",
    "month": 7,
    "day": 28,
    "setup": "Don't interrupt someone working intently on a puzzle.",
    "punchline": "Chances are, you'll hear some crosswords.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-242",
    "month": 7,
    "day": 29,
    "setup": "Today a man knocked on my door and asked for a small donation towards the local swimming pool.",
    "punchline": "I gave him a glass of water.",
    "category": "sports",
    "tags": [
      "sports",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-243",
    "month": 7,
    "day": 30,
    "setup": "What did the Zen Buddist say to the hotdog vendor?",
    "punchline": "Make me one with everything.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-244",
    "month": 7,
    "day": 31,
    "setup": "Why did the clown have neck pain?",
    "punchline": "Because he slept funny",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-245",
    "month": 8,
    "day": 1,
    "setup": "What did the digital clock say to the grandfather clock?",
    "punchline": "Look, no hands!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-246",
    "month": 8,
    "day": 2,
    "setup": "A weasel walks into a bar. The bartender says, \"Wow, I've never served a weasel before. What can I get for you?",
    "punchline": "Pop,\" goes the weasel.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-247",
    "month": 8,
    "day": 3,
    "setup": "How was the snow globe feeling after the storm?",
    "punchline": "A little shaken.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-248",
    "month": 8,
    "day": 4,
    "setup": "Did you hear the one about the guy with the broken hearing aid?",
    "punchline": "Neither did he.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-249",
    "month": 8,
    "day": 5,
    "setup": "Did you hear about the campsite that got visited by Bigfoot?",
    "punchline": "It got in tents.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-250",
    "month": 8,
    "day": 6,
    "setup": "I saw a documentary on TV last night about how they put ships together.",
    "punchline": "It was rivetting.",
    "category": "work",
    "tags": [
      "work",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-251",
    "month": 8,
    "day": 7,
    "setup": "What did the Red light say to the Green light?",
    "punchline": "Don't look at me I'm changing!",
    "category": "science",
    "tags": [
      "science",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-252",
    "month": 8,
    "day": 8,
    "setup": "What did the ocean say to the beach?",
    "punchline": "Thanks for all the sediment.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-253",
    "month": 8,
    "day": 9,
    "setup": "What did the left eye say to the right eye?",
    "punchline": "Between us, something smells!",
    "category": "medical",
    "tags": [
      "medical",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-254",
    "month": 8,
    "day": 10,
    "setup": "What do you call a fly without wings?",
    "punchline": "A walk.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-255",
    "month": 8,
    "day": 11,
    "setup": "Why did the melons plan a big wedding?",
    "punchline": "Because they cantaloupe!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-256",
    "month": 8,
    "day": 12,
    "setup": "Yesterday I confused the words \"jacuzzi\" and \"yakuza\".",
    "punchline": "Now I'm in hot water with the Japanese mafia.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-257",
    "month": 8,
    "day": 13,
    "setup": "What is the least spoken language in the world?",
    "punchline": "Sign Language",
    "category": "wordplay",
    "tags": [
      "wordplay",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-258",
    "month": 8,
    "day": 14,
    "setup": "What do birds give out on Halloween?",
    "punchline": "Tweets.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-259",
    "month": 8,
    "day": 15,
    "setup": "Have you heard the rumor going around about butter?",
    "punchline": "Never mind, I shouldn't spread it.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-260",
    "month": 8,
    "day": 16,
    "setup": "Every morning when I go out, I get hit by bicycle. Every morning!",
    "punchline": "It's a vicious cycle.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-261",
    "month": 8,
    "day": 17,
    "setup": "What happens to a frog's car when it breaks down?",
    "punchline": "It gets toad.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-262",
    "month": 8,
    "day": 18,
    "setup": "The other day, my wife asked me to pass her lipstick but I accidentally passed her a glue stick.",
    "punchline": "She still isn't talking to me.",
    "category": "family",
    "tags": [
      "family",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-263",
    "month": 8,
    "day": 19,
    "setup": "Why does it take pirates so long to learn the alphabet?",
    "punchline": "Because they spend years at C!",
    "category": "holidays",
    "tags": [
      "holidays",
      "holiday",
      "classic",
      "family"
    ]
  },
  {
    "id": "joke-264",
    "month": 8,
    "day": 20,
    "setup": "What do you get when you cross a chicken with a skunk?",
    "punchline": "A fowl smell!",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-265",
    "month": 8,
    "day": 21,
    "setup": "Where do you take someone who's been injured in a peek-a-boo accident?",
    "punchline": "To the I.C.U.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-266",
    "month": 8,
    "day": 22,
    "setup": "As I get older, I think of all the people I lost along the way.",
    "punchline": "Maybe a career as a tour guide wasn't such a good idea.",
    "category": "work",
    "tags": [
      "work",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-267",
    "month": 8,
    "day": 23,
    "setup": "How many hipsters does it take to change a lightbulb?",
    "punchline": "Oh, it's a really obscure number. You've probably never heard of it.",
    "category": "science",
    "tags": [
      "science",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-268",
    "month": 8,
    "day": 24,
    "setup": "Where do sheep go to get their hair cut?",
    "punchline": "The baa-baa shop.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-269",
    "month": 8,
    "day": 25,
    "setup": "Why did the miner get fired from his job?",
    "punchline": "He took it for granite...",
    "category": "work",
    "tags": [
      "work",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-270",
    "month": 8,
    "day": 26,
    "setup": "What did the hat say to the scarf?",
    "punchline": "You can hang around. I'll just go on ahead.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-271",
    "month": 8,
    "day": 27,
    "setup": "Where do cats write notes?",
    "punchline": "Scratch Paper!",
    "category": "wordplay",
    "tags": [
      "wordplay",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-272",
    "month": 8,
    "day": 28,
    "setup": "Why is the new Kindle screen textured to look like paper?",
    "punchline": "So you feel write at home.",
    "category": "tech",
    "tags": [
      "tech",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-273",
    "month": 8,
    "day": 29,
    "setup": "What's the advantage of living in Switzerland?",
    "punchline": "Well, the flag is a big plus.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-274",
    "month": 8,
    "day": 30,
    "setup": "When I left school, I passed every one of my exams with the exception of Greek Mythology.",
    "punchline": "It always was my achilles elbow",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-275",
    "month": 9,
    "day": 1,
    "setup": "Why did the cookie cry?",
    "punchline": "It was feeling crumby.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-276",
    "month": 9,
    "day": 2,
    "setup": "What did Yoda say when he saw himself in 4K?",
    "punchline": "HDMI",
    "category": "work",
    "tags": [
      "work",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-277",
    "month": 9,
    "day": 3,
    "setup": "How do you make a 'one' disappear?",
    "punchline": "You add a 'g' and it's 'gone",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-278",
    "month": 9,
    "day": 4,
    "setup": "Me and my mates are in a band called Duvet.",
    "punchline": "We're a cover band.",
    "category": "music",
    "tags": [
      "music",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-279",
    "month": 9,
    "day": 5,
    "setup": "Where do you learn to make banana splits?",
    "punchline": "At sundae school.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-280",
    "month": 9,
    "day": 6,
    "setup": "Nurse: Doctor, there's a patient that says he's invisible.",
    "punchline": "Doctor: Well, tell him I can't see him right now!",
    "category": "medical",
    "tags": [
      "medical",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-281",
    "month": 9,
    "day": 7,
    "setup": "What was a more important invention than the first telephone?",
    "punchline": "The second one.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-282",
    "month": 9,
    "day": 8,
    "setup": "What do you get when you cross a snowman with a vampire?",
    "punchline": "Frostbite.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-283",
    "month": 9,
    "day": 9,
    "setup": "What do you do when your bunny gets wet?",
    "punchline": "You get your hare dryer.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-284",
    "month": 9,
    "day": 10,
    "setup": "Did you know crocodiles could grow up to 15 feet?",
    "punchline": "But most just have 4.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-285",
    "month": 9,
    "day": 11,
    "setup": "Why did the fireman wear red, white, and blue suspenders?",
    "punchline": "To hold his pants up.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-286",
    "month": 9,
    "day": 12,
    "setup": "What do you call someone with no nose?",
    "punchline": "Nobody knows.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-287",
    "month": 9,
    "day": 13,
    "setup": "What do you call a girl between two posts?",
    "punchline": "Annette.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-288",
    "month": 9,
    "day": 14,
    "setup": "What do you call a criminal going down the stairs?",
    "punchline": "Condescending",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-289",
    "month": 9,
    "day": 15,
    "setup": "What do you call a fat psychic?",
    "punchline": "A four-chin teller.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-290",
    "month": 9,
    "day": 16,
    "setup": "Why can't a bicycle stand on its own?",
    "punchline": "It's two-tired.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-291",
    "month": 9,
    "day": 17,
    "setup": "What does a pirate pay for his corn?",
    "punchline": "A buccaneer!",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-292",
    "month": 9,
    "day": 18,
    "setup": "Astronomers got tired watching the moon go around the earth for 24 hours.",
    "punchline": "They decided to call it a day.",
    "category": "science",
    "tags": [
      "science",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-293",
    "month": 9,
    "day": 19,
    "setup": "My dog used to chase people on a bike a lot.",
    "punchline": "It got so bad I had to take his bike away.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-294",
    "month": 9,
    "day": 20,
    "setup": "I ate a clock yesterday.",
    "punchline": "It was so time consuming.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-295",
    "month": 9,
    "day": 21,
    "setup": "Is the pool safe for diving?",
    "punchline": "It deep ends.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-296",
    "month": 9,
    "day": 22,
    "setup": "Why do scuba divers fall backwards into the water?",
    "punchline": "Because if they fell forwards they'd still be in the boat.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-297",
    "month": 9,
    "day": 23,
    "setup": "My wife told me to rub the herbs on the meat for better flavor.",
    "punchline": "That's sage advice.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-298",
    "month": 9,
    "day": 24,
    "setup": "A man was caught stealing in a supermarket today while balanced on the shoulders of a couple of vampires.",
    "punchline": "He was charged with shoplifting on two counts.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-299",
    "month": 9,
    "day": 25,
    "setup": "Ben & Jerry's really need to improve their operation.",
    "punchline": "The only way to get there is down a rocky road.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-300",
    "month": 9,
    "day": 26,
    "setup": "How are false teeth like stars?",
    "punchline": "They come out at night!",
    "category": "medical",
    "tags": [
      "medical",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-301",
    "month": 9,
    "day": 27,
    "setup": "What time did the man go to the dentist?",
    "punchline": "Tooth hurt-y.",
    "category": "medical",
    "tags": [
      "medical",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-302",
    "month": 9,
    "day": 28,
    "setup": "I went to the zoo yesterday and saw a baguette in a cage.",
    "punchline": "It was bread in captivity.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-303",
    "month": 9,
    "day": 29,
    "setup": "Did you hear about the cheese factory that exploded in France?",
    "punchline": "There was nothing left but de Brie.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-304",
    "month": 9,
    "day": 30,
    "setup": "How does a penguin build it's house?",
    "punchline": "Igloos it together.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-305",
    "month": 9,
    "day": 31,
    "setup": "Why didn't the skeleton go to the Halloween party?",
    "punchline": "Because he had no body to go with!",
    "category": "holidays",
    "tags": [
      "holidays",
      "holiday",
      "classic",
      "family"
    ]
  },
  {
    "id": "joke-306",
    "month": 10,
    "day": 1,
    "setup": "What is this movie about?",
    "punchline": "It is about 2 hours long.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-307",
    "month": 10,
    "day": 2,
    "setup": "Why are pirates called pirates?",
    "punchline": "Because they arrr!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-308",
    "month": 10,
    "day": 3,
    "setup": "Where does Fonzie like to go for lunch?",
    "punchline": "Chick-Fil-Eyyyyyyyy.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-309",
    "month": 10,
    "day": 4,
    "setup": "How does a dyslexic poet write?",
    "punchline": "Inverse.",
    "category": "wordplay",
    "tags": [
      "wordplay",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-310",
    "month": 10,
    "day": 5,
    "setup": "Don't tell secrets in corn fields.",
    "punchline": "Too many ears around.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-311",
    "month": 10,
    "day": 6,
    "setup": "What did the pirate say on his 80th birthday?",
    "punchline": "Aye Matey!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-312",
    "month": 10,
    "day": 7,
    "setup": "Why did the A go to the bathroom and come out as an E?",
    "punchline": "Because he had a vowel movement.",
    "category": "wordplay",
    "tags": [
      "wordplay",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-313",
    "month": 10,
    "day": 8,
    "setup": "Yesterday a clown held a door open for me.",
    "punchline": "I thought it was a nice jester.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-314",
    "month": 10,
    "day": 9,
    "setup": "Why did the opera singer go sailing?",
    "punchline": "They wanted to hit the high Cs.",
    "category": "music",
    "tags": [
      "music",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-315",
    "month": 10,
    "day": 10,
    "setup": "Bought a new jacket suit the other day and it burst into flames.",
    "punchline": "Well, it was a blazer",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-316",
    "month": 10,
    "day": 11,
    "setup": "Whats a penguins favorite relative?",
    "punchline": "Aunt Arctica.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-317",
    "month": 10,
    "day": 12,
    "setup": "Never Trust Someone With Graph Paper...",
    "punchline": "They're always plotting something.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-318",
    "month": 10,
    "day": 13,
    "setup": "What do you call an elephant that doesn't matter?",
    "punchline": "An irrelephant.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-319",
    "month": 10,
    "day": 14,
    "setup": "What do you call a group of disorganized cats?",
    "punchline": "A cat-tastrophe.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-320",
    "month": 10,
    "day": 15,
    "setup": "What is bread's favorite number?",
    "punchline": "Leaven.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-321",
    "month": 10,
    "day": 16,
    "setup": "Why can't you hear a pterodactyl go to the bathroom?",
    "punchline": "The p is silent.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-322",
    "month": 10,
    "day": 17,
    "setup": "How do you know if there's an elephant under your bed?",
    "punchline": "Your head hits the ceiling!",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-323",
    "month": 10,
    "day": 18,
    "setup": "How do you teach a kid to climb stairs?",
    "punchline": "There is a step by step guide.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-324",
    "month": 10,
    "day": 19,
    "setup": "Where do owls go to buy their baby clothes?",
    "punchline": "The owlet malls.",
    "category": "family",
    "tags": [
      "family",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-325",
    "month": 10,
    "day": 20,
    "setup": "Why does Norway have barcodes on their battleships?",
    "punchline": "So when they get back to port, they can Scandinavian.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-326",
    "month": 10,
    "day": 21,
    "setup": "What's the worst part about being a cross-eyed teacher?",
    "punchline": "They can't control their pupils.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-327",
    "month": 10,
    "day": 22,
    "setup": "What do you call a fashionable lawn statue with an excellent sense of rhythmn?",
    "punchline": "A metro-gnome",
    "category": "family",
    "tags": [
      "family",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-328",
    "month": 10,
    "day": 23,
    "setup": "Why did the turkey cross the road before Thanksgiving dinner?",
    "punchline": "To prove he wasn't chicken!",
    "category": "holidays",
    "tags": [
      "holidays",
      "holiday",
      "classic",
      "family"
    ]
  },
  {
    "id": "joke-329",
    "month": 10,
    "day": 24,
    "setup": "Someone broke into my house last night and stole my limbo trophy.",
    "punchline": "How low can you go?",
    "category": "family",
    "tags": [
      "family",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-330",
    "month": 10,
    "day": 25,
    "setup": "Why did the coffee file a police report?",
    "punchline": "It got mugged.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-331",
    "month": 10,
    "day": 26,
    "setup": "Why was the strawberry sad?",
    "punchline": "Its parents were in a jam.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-332",
    "month": 10,
    "day": 27,
    "setup": "Why are ghosts bad liars?",
    "punchline": "Because you can see right through them!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-333",
    "month": 10,
    "day": 28,
    "setup": "Every machine in the coin factory broke down all of a sudden without explanation.",
    "punchline": "It just doesn't make any cents.",
    "category": "work",
    "tags": [
      "work",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-334",
    "month": 10,
    "day": 29,
    "setup": "Why does it take longer to get from 1st to 2nd base, than it does to get from 2nd to 3rd base?",
    "punchline": "Because there's a Shortstop in between!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-335",
    "month": 10,
    "day": 30,
    "setup": "What do you do when you see a space man?",
    "punchline": "Park your car, man.",
    "category": "science",
    "tags": [
      "science",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-336",
    "month": 11,
    "day": 1,
    "setup": "Where do you take someone who has been injured in a Peek-a-boo accident?",
    "punchline": "To the I.C.U.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-337",
    "month": 11,
    "day": 2,
    "setup": "How do you make Lady Gaga cry?",
    "punchline": "Poker face.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-338",
    "month": 11,
    "day": 3,
    "setup": "What do you call a group of killer whales playing instruments?",
    "punchline": "An Orca-stra.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-339",
    "month": 11,
    "day": 4,
    "setup": "I was in an 80's band called the prevention.",
    "punchline": "We were better than the cure.",
    "category": "music",
    "tags": [
      "music",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-340",
    "month": 11,
    "day": 5,
    "setup": "What did Michael Jackson name his denim store?",
    "punchline": "Billy Jeans!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-341",
    "month": 11,
    "day": 6,
    "setup": "People saying 'boo! to their friends has risen by 85% in the last year....",
    "punchline": "That's a frightening statistic.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-342",
    "month": 11,
    "day": 7,
    "setup": "Why does Han Solo like gum?",
    "punchline": "It's chewy!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-343",
    "month": 11,
    "day": 8,
    "setup": "Have you heard of the band 1023MB?",
    "punchline": "They haven't got a gig yet.",
    "category": "music",
    "tags": [
      "music",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-344",
    "month": 11,
    "day": 9,
    "setup": "What happens when you anger a brain surgeon?",
    "punchline": "They will give you a piece of your mind.",
    "category": "medical",
    "tags": [
      "medical",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-345",
    "month": 11,
    "day": 10,
    "setup": "I used to work at a stationery store. But, I didn't feel like I was going anywhere. So, I got a job at a travel agency.",
    "punchline": "Now, I know I'll be going places.",
    "category": "work",
    "tags": [
      "work",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-346",
    "month": 11,
    "day": 11,
    "setup": "I used to work in a shoe recycling shop.",
    "punchline": "It was sole destroying.",
    "category": "work",
    "tags": [
      "work",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-347",
    "month": 11,
    "day": 12,
    "setup": "R.I.P. boiled water.",
    "punchline": "You will be mist.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-348",
    "month": 11,
    "day": 13,
    "setup": "Q: What did the spaghetti say to the other spaghetti?",
    "punchline": "A: Pasta la vista, baby!",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-349",
    "month": 11,
    "day": 14,
    "setup": "Why is the ocean always blue?",
    "punchline": "Because the shore never waves back.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-350",
    "month": 11,
    "day": 15,
    "setup": "Why did the feline fail the lie detector test?",
    "punchline": "Because he be lion.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-351",
    "month": 11,
    "day": 16,
    "setup": "Why did the man put his money in the freezer?",
    "punchline": "He wanted cold hard cash!",
    "category": "medical",
    "tags": [
      "medical",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-352",
    "month": 11,
    "day": 17,
    "setup": "Why do ducks make great detectives?",
    "punchline": "They always quack the case.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-353",
    "month": 11,
    "day": 18,
    "setup": "What does a clock do when it's hungry?",
    "punchline": "It goes back four seconds!",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-354",
    "month": 11,
    "day": 19,
    "setup": "What do I look like?",
    "punchline": "A JOKE MACHINE!?",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-355",
    "month": 11,
    "day": 20,
    "setup": "I bought shoes from a drug dealer once.",
    "punchline": "I don't know what he laced them with, but I was tripping all day.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-356",
    "month": 11,
    "day": 21,
    "setup": "What is a tornado's favorite game to play?",
    "punchline": "Twister!",
    "category": "sports",
    "tags": [
      "sports",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-357",
    "month": 11,
    "day": 22,
    "setup": "Pie is $2.50 in Jamaica and $3.00 in The Bahamas.",
    "punchline": "These are the pie-rates of the Caribbean.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-358",
    "month": 11,
    "day": 23,
    "setup": "What do you call a fish wearing a bowtie?",
    "punchline": "Sofishticated.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-359",
    "month": 11,
    "day": 24,
    "setup": "Did you hear about the Mexican train killer?",
    "punchline": "He had loco motives",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-360",
    "month": 11,
    "day": 25,
    "setup": "What is an elf's favorite kind of music while wrapping presents?",
    "punchline": "Wrap music!",
    "category": "holidays",
    "tags": [
      "holidays",
      "holiday",
      "classic",
      "family"
    ]
  },
  {
    "id": "joke-361",
    "month": 11,
    "day": 26,
    "setup": "Can I watch the TV?",
    "punchline": "Dad: Yes, but don't turn it on.",
    "category": "family",
    "tags": [
      "family",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-362",
    "month": 11,
    "day": 27,
    "setup": "What is worse then finding a worm in your Apple?",
    "punchline": "Finding half a worm in your Apple.",
    "category": "food",
    "tags": [
      "food",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-363",
    "month": 11,
    "day": 28,
    "setup": "What do vegetarian zombies eat?",
    "punchline": "Grrrrrainnnnnssss.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-364",
    "month": 11,
    "day": 29,
    "setup": "What is the hardest part about sky diving?",
    "punchline": "The ground.",
    "category": "classic",
    "tags": [
      "classic",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-365",
    "month": 11,
    "day": 30,
    "setup": "Why did the cowboy have a weiner dog?",
    "punchline": "Somebody told him to get a long little doggy.",
    "category": "animals",
    "tags": [
      "animals",
      "groaner",
      "humor",
      "classic"
    ]
  },
  {
    "id": "joke-366",
    "month": 11,
    "day": 31,
    "setup": "What is a dad's official resolution for every single New Year?",
    "punchline": "To keep telling the exact same jokes for another 365 days!",
    "category": "holidays",
    "tags": [
      "holidays",
      "holiday",
      "classic",
      "family"
    ]
  }
];
