use blackjack;
db.dropDatabase();

db.deck.insertMany([
{
"suit": "SPADES",
"code": "AS",
"value": 11,
"images": {
"png": "images/card_images/AS.png",
"svg": "images/card_images/AS.svg"
},
"image": "images/card_images/AS.png"
},
{
"suit": "SPADES",
"code": "2S",
"value": 2,
"images": {
"png": "images/card_images/2S.png",
"svg": "images/card_images/2S.svg"
},
"image": "images/card_images/2S.png"
},
{
"suit": "SPADES",
"code": "3S",
"value": 3,
"images": {
"png": "images/card_images/3S.png",
"svg": "images/card_images/3S.svg"
},
"image": "images/card_images/3S.png"
},
{
"suit": "SPADES",
"code": "4S",
"value": 4,
"images": {
"png": "images/card_images/4S.png",
"svg": "images/card_images/4S.svg"
},
"image": "images/card_images/4S.png"
},
{
"suit": "SPADES",
"code": "5S",
"value": 5,
"images": {
"png": "images/card_images/5S.png",
"svg": "images/card_images/5S.svg"
},
"image": "images/card_images/5S.png"
},
{
"suit": "SPADES",
"code": "6S",
"value": 6,
"images": {
"png": "images/card_images/6S.png",
"svg": "images/card_images/6S.svg"
},
"image": "images/card_images/6S.png"
},
{
"suit": "SPADES",
"code": "7S",
"value": 7,
"images": {
"png": "images/card_images/7S.png",
"svg": "images/card_images/7S.svg"
},
"image": "images/card_images/7S.png"
},
{
"suit": "SPADES",
"code": "8S",
"value": 8,
"images": {
"png": "images/card_images/8S.png",
"svg": "images/card_images/8S.svg"
},
"image": "images/card_images/8S.png"
},
{
"suit": "SPADES",
"code": "9S",
"value": 9,
"images": {
"png": "images/card_images/9S.png",
"svg": "images/card_images/9S.svg"
},
"image": "images/card_images/9S.png"
},
{
"suit": "SPADES",
"code": "0S",
"value": 10,
"images": {
"png": "images/card_images/0S.png",
"svg": "images/card_images/0S.svg"
},
"image": "images/card_images/0S.png"
},
{
"suit": "SPADES",
"code": "JS",
"value": 10,
"images": {
"png": "images/card_images/JS.png",
"svg": "images/card_images/JS.svg"
},
"image": "images/card_images/JS.png"
},
{
"suit": "SPADES",
"code": "QS",
"value": 10,
"images": {
"png": "images/card_images/QS.png",
"svg": "images/card_images/QS.svg"
},
"image": "images/card_images/QS.png"
},
{
"suit": "SPADES",
"code": "KS",
"value": 10,
"images": {
"png": "images/card_images/KS.png",
"svg": "images/card_images/KS.svg"
},
"image": "images/card_images/KS.png"
},
{
"suit": "DIAMONDS",
"code": "AD",
"value": 11,
"images": {
"png": "images/card_images/AD.png",
"svg": "images/card_images/AD.svg"
},
"image": "images/card_images/aceDiamonds.png"
},
{
"suit": "DIAMONDS",
"code": "2D",
"value": 2,
"images": {
"png": "images/card_images/2D.png",
"svg": "images/card_images/2D.svg"
},
"image": "images/card_images/2D.png"
},
{
"suit": "DIAMONDS",
"code": "3D",
"value": 3,
"images": {
"png": "images/card_images/3D.png",
"svg": "images/card_images/3D.svg"
},
"image": "images/card_images/3D.png"
},
{
"suit": "DIAMONDS",
"code": "4D",
"value": 4,
"images": {
"png": "images/card_images/4D.png",
"svg": "images/card_images/4D.svg"
},
"image": "images/card_images/4D.png"
},
{
"suit": "DIAMONDS",
"code": "5D",
"value": 5,
"images": {
"png": "images/card_images/5D.png",
"svg": "images/card_images/5D.svg"
},
"image": "images/card_images/5D.png"
},
{
"suit": "DIAMONDS",
"code": "6D",
"value": 6,
"images": {
"png": "images/card_images/6D.png",
"svg": "images/card_images/6D.svg"
},
"image": "images/card_images/6D.png"
},
{
"suit": "DIAMONDS",
"code": "7D",
"value": 7,
"images": {
"png": "images/card_images/7D.png",
"svg": "images/card_images/7D.svg"
},
"image": "images/card_images/7D.png"
},
{
"suit": "DIAMONDS",
"code": "8D",
"value": 8,
"images": {
"png": "images/card_images/8D.png",
"svg": "images/card_images/8D.svg"
},
"image": "images/card_images/8D.png"
},
{
"suit": "DIAMONDS",
"code": "9D",
"value": 9,
"images": {
"png": "images/card_images/9D.png",
"svg": "images/card_images/9D.svg"
},
"image": "images/card_images/9D.png"
},
{
"suit": "DIAMONDS",
"code": "0D",
"value": 10,
"images": {
"png": "images/card_images/0D.png",
"svg": "images/card_images/0D.svg"
},
"image": "images/card_images/0D.png"
},
{
"suit": "DIAMONDS",
"code": "JD",
"value": 10,
"images": {
"png": "images/card_images/JD.png",
"svg": "images/card_images/JD.svg"
},
"image": "images/card_images/JD.png"
},
{
"suit": "DIAMONDS",
"code": "QD",
"value": 10,
"images": {
"png": "images/card_images/QD.png",
"svg": "images/card_images/QD.svg"
},
"image": "images/card_images/QD.png"
},
{
"suit": "DIAMONDS",
"code": "KD",
"value": 10,
"images": {
"png": "images/card_images/KD.png",
"svg": "images/card_images/KD.svg"
},
"image": "images/card_images/KD.png"
},
{
"suit": "CLUBS",
"code": "AC",
"value": 11,
"images": {
"png": "images/card_images/AC.png",
"svg": "images/card_images/AC.svg"
},
"image": "images/card_images/AC.png"
},
{
"suit": "CLUBS",
"code": "2C",
"value": 2,
"images": {
"png": "images/card_images/2C.png",
"svg": "images/card_images/2C.svg"
},
"image": "images/card_images/2C.png"
},
{
"suit": "CLUBS",
"code": "3C",
"value": 3,
"images": {
"png": "images/card_images/3C.png",
"svg": "images/card_images/3C.svg"
},
"image": "images/card_images/3C.png"
},
{
"suit": "CLUBS",
"code": "4C",
"value": 4,
"images": {
"png": "images/card_images/4C.png",
"svg": "images/card_images/4C.svg"
},
"image": "images/card_images/4C.png"
},
{
"suit": "CLUBS",
"code": "5C",
"value": 5,
"images": {
"png": "images/card_images/5C.png",
"svg": "images/card_images/5C.svg"
},
"image": "images/card_images/5C.png"
},
{
"suit": "CLUBS",
"code": "6C",
"value": 6,
"images": {
"png": "images/card_images/6C.png",
"svg": "images/card_images/6C.svg"
},
"image": "images/card_images/6C.png"
},
{
"suit": "CLUBS",
"code": "7C",
"value": 7,
"images": {
"png": "images/card_images/7C.png",
"svg": "images/card_images/7C.svg"
},
"image": "images/card_images/7C.png"
},
{
"suit": "CLUBS",
"code": "8C",
"value": 8,
"images": {
"png": "images/card_images/8C.png",
"svg": "images/card_images/8C.svg"
},
"image": "images/card_images/8C.png"
},
{
"suit": "CLUBS",
"code": "9C",
"value": 9,
"images": {
"png": "images/card_images/9C.png",
"svg": "images/card_images/9C.svg"
},
"image": "images/card_images/9C.png"
},
{
"suit": "CLUBS",
"code": "0C",
"value": 10,
"images": {
"png": "images/card_images/0C.png",
"svg": "images/card_images/0C.svg"
},
"image": "images/card_images/0C.png"
},
{
"suit": "CLUBS",
"code": "JC",
"value": 10,
"images": {
"png": "images/card_images/JC.png",
"svg": "images/card_images/JC.svg"
},
"image": "images/card_images/JC.png"
},
{
"suit": "CLUBS",
"code": "QC",
"value": 10,
"images": {
"png": "images/card_images/QC.png",
"svg": "images/card_images/QC.svg"
},
"image": "images/card_images/QC.png"
},
{
"suit": "CLUBS",
"code": "KC",
"value": 10,
"images": {
"png": "images/card_images/KC.png",
"svg": "images/card_images/KC.svg"
},
"image": "images/card_images/KC.png"
},
{
"suit": "HEARTS",
"code": "AH",
"value": 11,
"images": {
"png": "images/card_images/AH.png",
"svg": "images/card_images/AH.svg"
},
"image": "images/card_images/AH.png"
},
{
"suit": "HEARTS",
"code": "2H",
"value": 2,
"images": {
"png": "images/card_images/2H.png",
"svg": "images/card_images/2H.svg"
},
"image": "images/card_images/2H.png"
},
{
"suit": "HEARTS",
"code": "3H",
"value": 3,
"images": {
"png": "images/card_images/3H.png",
"svg": "images/card_images/3H.svg"
},
"image": "images/card_images/3H.png"
},
{
"suit": "HEARTS",
"code": "4H",
"value": 4,
"images": {
"png": "images/card_images/4H.png",
"svg": "images/card_images/4H.svg"
},
"image": "images/card_images/4H.png"
},
{
"suit": "HEARTS",
"code": "5H",
"value": 5,
"images": {
"png": "images/card_images/5H.png",
"svg": "images/card_images/5H.svg"
},
"image": "images/card_images/5H.png"
},
{
"suit": "HEARTS",
"code": "6H",
"value": 6,
"images": {
"png": "images/card_images/6H.png",
"svg": "images/card_images/6H.svg"
},
"image": "images/card_images/6H.png"
},
{
"suit": "HEARTS",
"code": "7H",
"value": 7,
"images": {
"png": "images/card_images/7H.png",
"svg": "images/card_images/7H.svg"
},
"image": "images/card_images/7H.png"
},
{
"suit": "HEARTS",
"code": "8H",
"value": 8,
"images": {
"png": "images/card_images/8H.png",
"svg": "images/card_images/8H.svg"
},
"image": "images/card_images/8H.png"
},
{
"suit": "HEARTS",
"code": "9H",
"value": 9,
"images": {
"png": "images/card_images/9H.png",
"svg": "images/card_images/9H.svg"
},
"image": "images/card_images/9H.png"
},
{
"suit": "HEARTS",
"code": "0H",
"value": 10,
"images": {
"png": "images/card_images/0H.png",
"svg": "images/card_images/0H.svg"
},
"image": "images/card_images/0H.png"
},
{
"suit": "HEARTS",
"code": "JH",
"value": 10,
"images": {
"png": "images/card_images/JH.png",
"svg": "images/card_images/JH.svg"
},
"image": "images/card_images/JH.png"
},
{
"suit": "HEARTS",
"code": "QH",
"value": 10,
"images": {
"png": "images/card_images/QH.png",
"svg": "images/card_images/QH.svg"
},
"image": "images/card_images/QH.png"
},
{
"suit": "HEARTS",
"code": "KH",
"value": 10,
"images": {
"png": "images/card_images/KH.png",
"svg": "images/card_images/KH.svg"
},
"image": "images/card_images/KH.png"
},
{
"suit": "SPADES",
"code": "AS",
"value": 11,
"images": {
"png": "images/card_images/AS.png",
"svg": "images/card_images/AS.svg"
},
"image": "images/card_images/AS.png"
},
{
"suit": "SPADES",
"code": "2S",
"value": 2,
"images": {
"png": "images/card_images/2S.png",
"svg": "images/card_images/2S.svg"
},
"image": "images/card_images/2S.png"
},
{
"suit": "SPADES",
"code": "3S",
"value": 3,
"images": {
"png": "images/card_images/3S.png",
"svg": "images/card_images/3S.svg"
},
"image": "images/card_images/3S.png"
},
{
"suit": "SPADES",
"code": "4S",
"value": 4,
"images": {
"png": "images/card_images/4S.png",
"svg": "images/card_images/4S.svg"
},
"image": "images/card_images/4S.png"
},
{
"suit": "SPADES",
"code": "5S",
"value": 5,
"images": {
"png": "images/card_images/5S.png",
"svg": "images/card_images/5S.svg"
},
"image": "images/card_images/5S.png"
},
{
"suit": "SPADES",
"code": "6S",
"value": 6,
"images": {
"png": "images/card_images/6S.png",
"svg": "images/card_images/6S.svg"
},
"image": "images/card_images/6S.png"
},
{
"suit": "SPADES",
"code": "7S",
"value": 7,
"images": {
"png": "images/card_images/7S.png",
"svg": "images/card_images/7S.svg"
},
"image": "images/card_images/7S.png"
},
{
"suit": "SPADES",
"code": "8S",
"value": 8,
"images": {
"png": "images/card_images/8S.png",
"svg": "images/card_images/8S.svg"
},
"image": "images/card_images/8S.png"
},
{
"suit": "SPADES",
"code": "9S",
"value": 9,
"images": {
"png": "images/card_images/9S.png",
"svg": "images/card_images/9S.svg"
},
"image": "images/card_images/9S.png"
},
{
"suit": "SPADES",
"code": "0S",
"value": 10,
"images": {
"png": "images/card_images/0S.png",
"svg": "images/card_images/0S.svg"
},
"image": "images/card_images/0S.png"
},
{
"suit": "SPADES",
"code": "JS",
"value": 10,
"images": {
"png": "images/card_images/JS.png",
"svg": "images/card_images/JS.svg"
},
"image": "images/card_images/JS.png"
},
{
"suit": "SPADES",
"code": "QS",
"value": 10,
"images": {
"png": "images/card_images/QS.png",
"svg": "images/card_images/QS.svg"
},
"image": "images/card_images/QS.png"
},
{
"suit": "SPADES",
"code": "KS",
"value": 10,
"images": {
"png": "images/card_images/KS.png",
"svg": "images/card_images/KS.svg"
},
"image": "images/card_images/KS.png"
},
{
"suit": "DIAMONDS",
"code": "AD",
"value": 11,
"images": {
"png": "images/card_images/AD.png",
"svg": "images/card_images/AD.svg"
},
"image": "images/card_images/aceDiamonds.png"
},
{
"suit": "DIAMONDS",
"code": "2D",
"value": 2,
"images": {
"png": "images/card_images/2D.png",
"svg": "images/card_images/2D.svg"
},
"image": "images/card_images/2D.png"
},
{
"suit": "DIAMONDS",
"code": "3D",
"value": 3,
"images": {
"png": "images/card_images/3D.png",
"svg": "images/card_images/3D.svg"
},
"image": "images/card_images/3D.png"
},
{
"suit": "DIAMONDS",
"code": "4D",
"value": 4,
"images": {
"png": "images/card_images/4D.png",
"svg": "images/card_images/4D.svg"
},
"image": "images/card_images/4D.png"
},
{
"suit": "DIAMONDS",
"code": "5D",
"value": 5,
"images": {
"png": "images/card_images/5D.png",
"svg": "images/card_images/5D.svg"
},
"image": "images/card_images/5D.png"
},
{
"suit": "DIAMONDS",
"code": "6D",
"value": 6,
"images": {
"png": "images/card_images/6D.png",
"svg": "images/card_images/6D.svg"
},
"image": "images/card_images/6D.png"
},
{
"suit": "DIAMONDS",
"code": "7D",
"value": 7,
"images": {
"png": "images/card_images/7D.png",
"svg": "images/card_images/7D.svg"
},
"image": "images/card_images/7D.png"
},
{
"suit": "DIAMONDS",
"code": "8D",
"value": 8,
"images": {
"png": "images/card_images/8D.png",
"svg": "images/card_images/8D.svg"
},
"image": "images/card_images/8D.png"
},
{
"suit": "DIAMONDS",
"code": "9D",
"value": 9,
"images": {
"png": "images/card_images/9D.png",
"svg": "images/card_images/9D.svg"
},
"image": "images/card_images/9D.png"
},
{
"suit": "DIAMONDS",
"code": "0D",
"value": 10,
"images": {
"png": "images/card_images/0D.png",
"svg": "images/card_images/0D.svg"
},
"image": "images/card_images/0D.png"
},
{
"suit": "DIAMONDS",
"code": "JD",
"value": 10,
"images": {
"png": "images/card_images/JD.png",
"svg": "images/card_images/JD.svg"
},
"image": "images/card_images/JD.png"
},
{
"suit": "DIAMONDS",
"code": "QD",
"value": 10,
"images": {
"png": "images/card_images/QD.png",
"svg": "images/card_images/QD.svg"
},
"image": "images/card_images/QD.png"
},
{
"suit": "DIAMONDS",
"code": "KD",
"value": 10,
"images": {
"png": "images/card_images/KD.png",
"svg": "images/card_images/KD.svg"
},
"image": "images/card_images/KD.png"
},
{
"suit": "CLUBS",
"code": "AC",
"value": 11,
"images": {
"png": "images/card_images/AC.png",
"svg": "images/card_images/AC.svg"
},
"image": "images/card_images/AC.png"
},
{
"suit": "CLUBS",
"code": "2C",
"value": 2,
"images": {
"png": "images/card_images/2C.png",
"svg": "images/card_images/2C.svg"
},
"image": "images/card_images/2C.png"
},
{
"suit": "CLUBS",
"code": "3C",
"value": 3,
"images": {
"png": "images/card_images/3C.png",
"svg": "images/card_images/3C.svg"
},
"image": "images/card_images/3C.png"
},
{
"suit": "CLUBS",
"code": "4C",
"value": 4,
"images": {
"png": "images/card_images/4C.png",
"svg": "images/card_images/4C.svg"
},
"image": "images/card_images/4C.png"
},
{
"suit": "CLUBS",
"code": "5C",
"value": 5,
"images": {
"png": "images/card_images/5C.png",
"svg": "images/card_images/5C.svg"
},
"image": "images/card_images/5C.png"
},
{
"suit": "CLUBS",
"code": "6C",
"value": 6,
"images": {
"png": "images/card_images/6C.png",
"svg": "images/card_images/6C.svg"
},
"image": "images/card_images/6C.png"
},
{
"suit": "CLUBS",
"code": "7C",
"value": 7,
"images": {
"png": "images/card_images/7C.png",
"svg": "images/card_images/7C.svg"
},
"image": "images/card_images/7C.png"
},
{
"suit": "CLUBS",
"code": "8C",
"value": 8,
"images": {
"png": "images/card_images/8C.png",
"svg": "images/card_images/8C.svg"
},
"image": "images/card_images/8C.png"
},
{
"suit": "CLUBS",
"code": "9C",
"value": 9,
"images": {
"png": "images/card_images/9C.png",
"svg": "images/card_images/9C.svg"
},
"image": "images/card_images/9C.png"
},
{
"suit": "CLUBS",
"code": "0C",
"value": 10,
"images": {
"png": "images/card_images/0C.png",
"svg": "images/card_images/0C.svg"
},
"image": "images/card_images/0C.png"
},
{
"suit": "CLUBS",
"code": "JC",
"value": 10,
"images": {
"png": "images/card_images/JC.png",
"svg": "images/card_images/JC.svg"
},
"image": "images/card_images/JC.png"
},
{
"suit": "CLUBS",
"code": "QC",
"value": 10,
"images": {
"png": "images/card_images/QC.png",
"svg": "images/card_images/QC.svg"
},
"image": "images/card_images/QC.png"
},
{
"suit": "CLUBS",
"code": "KC",
"value": 10,
"images": {
"png": "images/card_images/KC.png",
"svg": "images/card_images/KC.svg"
},
"image": "images/card_images/KC.png"
},
{
"suit": "HEARTS",
"code": "AH",
"value": 11,
"images": {
"png": "images/card_images/AH.png",
"svg": "images/card_images/AH.svg"
},
"image": "images/card_images/AH.png"
},
{
"suit": "HEARTS",
"code": "2H",
"value": 2,
"images": {
"png": "images/card_images/2H.png",
"svg": "images/card_images/2H.svg"
},
"image": "images/card_images/2H.png"
},
{
"suit": "HEARTS",
"code": "3H",
"value": 3,
"images": {
"png": "images/card_images/3H.png",
"svg": "images/card_images/3H.svg"
},
"image": "images/card_images/3H.png"
},
{
"suit": "HEARTS",
"code": "4H",
"value": 4,
"images": {
"png": "images/card_images/4H.png",
"svg": "images/card_images/4H.svg"
},
"image": "images/card_images/4H.png"
},
{
"suit": "HEARTS",
"code": "5H",
"value": 5,
"images": {
"png": "images/card_images/5H.png",
"svg": "images/card_images/5H.svg"
},
"image": "images/card_images/5H.png"
},
{
"suit": "HEARTS",
"code": "6H",
"value": 6,
"images": {
"png": "images/card_images/6H.png",
"svg": "images/card_images/6H.svg"
},
"image": "images/card_images/6H.png"
},
{
"suit": "HEARTS",
"code": "7H",
"value": 7,
"images": {
"png": "images/card_images/7H.png",
"svg": "images/card_images/7H.svg"
},
"image": "images/card_images/7H.png"
},
{
"suit": "HEARTS",
"code": "8H",
"value": 8,
"images": {
"png": "images/card_images/8H.png",
"svg": "images/card_images/8H.svg"
},
"image": "images/card_images/8H.png"
},
{
"suit": "HEARTS",
"code": "9H",
"value": 9,
"images": {
"png": "images/card_images/9H.png",
"svg": "images/card_images/9H.svg"
},
"image": "images/card_images/9H.png"
},
{
"suit": "HEARTS",
"code": "0H",
"value": 10,
"images": {
"png": "images/card_images/0H.png",
"svg": "images/card_images/0H.svg"
},
"image": "images/card_images/0H.png"
},
{
"suit": "HEARTS",
"code": "JH",
"value": 10,
"images": {
"png": "images/card_images/JH.png",
"svg": "images/card_images/JH.svg"
},
"image": "images/card_images/JH.png"
},
{
"suit": "HEARTS",
"code": "QH",
"value": 10,
"images": {
"png": "images/card_images/QH.png",
"svg": "images/card_images/QH.svg"
},
"image": "images/card_images/QH.png"
},
{
"suit": "HEARTS",
"code": "KH",
"value": 10,
"images": {
"png": "images/card_images/KH.png",
"svg": "images/card_images/KH.svg"
},
"image": "images/card_images/KH.png"
}
]);
