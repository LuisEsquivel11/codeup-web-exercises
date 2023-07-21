(() => {
"use strict"

    const url = 'data/houses.json'
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(url, options)
        .then(response => {
            return response.json(); // how do you want the response
        })
        .then(houses => {       //what to do with that response
            console.log(houses);
            //working with house array
            let housesTwoBedsPlus = houses.filter(house => {
                const nmrOfBeds = parseFloat(house.beds)
                const nmrOfBaths = parseFloat(house.baths)
                return nmrOfBeds >= 5 && nmrOfBaths >= 2;             //.filter version
            // console.log(housesTwoBedsPlus)
            })
            // Map method

            let housesPriceRange = houses.map(house => {
                const priceRange = 200_000;
                const canBuy = parseFloat(house.price) > priceRange ? 'Nope' : 'Yes'
                const newValue = `Address: ${house.address} Can I afford it: ${canBuy}`
                    return newValue
            });
            for (let house of housesPriceRange) {
                // console.log(house)
            }


            //reduce method
            //find the most expensive house
            const largestPrice = houses.reduce(/*funciton parameter */(accumulator, house, index) => {
                let price = parseFloat(house.price)
                if (price > accumulator){
                    accumulator = price
                }
                return accumulator
            } ,  /* initial value for accumulator */ 0 );
            console.log(largestPrice)

            const dashboardObject = houses.reduce((accumulator,house, index ) => {
                accumulator.totalHouses += 1;
                let price = parseFloat(house.price);
                if (price > accumulator.mostExpensive) {
                    accumulator.mostExpensive = price;
                }
                if (price < accumulator.cheapestHouse) {
                    accumulator.cheapestHouse = price;
                }
                accumulator.totalMarketValue += price;
                return accumulator
            }, {
                totalHouses: 0,
                mostExpensive: 0,
                cheapestHouse: parseFloat(houses[0].price),
                totalMarketValue: 0
            });
            console.log(dashboardObject)
        })







})();