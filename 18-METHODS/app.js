const car = {
    make: `Saab`,
    model: `95`,
    colour: `black`,
    advert: () => {return `For sale: a ${car.colour} ${car.make} ${car.model}`}
};

console.log(car.advert());

const book = {
    title: `The Catcher in the Rye`,
    author: `J.D. Salinger`,
    pages: 277,
    advert: () => {return `For sale: ${book.title} by ${book.author}, with ${book.pages} pages.`}
};

console.log(book.advert());