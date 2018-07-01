const booWho = (val) => {
    return typeof val === 'boolean' || false;
};

console.log(booWho(true));