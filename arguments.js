function add(a, b) {
    console.log(arguments);
    const params = [...arguments];
    console.log(params.map(x => x + 1));

}

add(88, 77, 7, 5, 3)