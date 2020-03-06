/*
    it is possible in type script to declare functions that takes diffrent formats
    so it could be declared more that one way

*/
var suits = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
//take anything and and it has to return any or void 
function pickCards(card) {
    if (typeof card === "object") {
        var pickedCard = Math.floor(Math.random() * suits.length);
        return suits[pickedCard];
    }
    if (typeof card === "number") {
        var pickedCard = card > suits.length ? suits.length : card;
        return suits[pickedCard];
    }
    if (typeof card !== "number" && typeof card !== "object") {
        return 'you need to pass object or number to the pickCards method';
    }
}
console.log(pickCards('2'));
console.log(pickCards([{ suit: "diamonds", card: 2 }]));
//# sourceMappingURL=multiple_functions.js.map