


async function part1() {
    let data = await $.getJSON(`${baseURL}/new/draw/`);
    let { suit, value } = data.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  }


async function part2() 
{
    let firstCardData = await $.getJSON(`${baseURL}/new/draw/`);
    let deckId = firstCardData.deck_id;
    let secondCardData = await $.getJSON(`${baseURL}/${deckId}/draw/`);
    [firstCardData, secondCardData].forEach(card => {
        let {suit,  value} = card.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    });
}


async function part3()
{
    let $btn = $('button');
    let $cardArea = $('#card-area');

    let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
}
