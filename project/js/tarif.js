axios.get('http://data.fixer.io/api/latest?access_key=XXXXXXXXXX&base=USD&symbols=USD,PLN,UAH,RUB&format=1')
    .then((response) => {
        console.log(response);
    })