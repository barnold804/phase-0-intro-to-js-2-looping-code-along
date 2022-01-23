const messages = [];

function writeCards(names, events) {
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages;
}

function countDown(number) {
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--);
    }
    return countDown;
}
