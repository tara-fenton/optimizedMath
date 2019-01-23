function optimizedMath() {
  let result = '';
  for (let i = 1; i <= 100; i++) {
    result = "The number '" + i +"' is "
    switch (true) {
      case i % 6 === 0:
        result += 'divisible by two and three.'
        break;
      case i % 3 === 0:
        result += 'divisible by three.'
        break;
      case i % 2 === 0:
        result += 'even.'
        break;
      default:
        result += 'odd.'
    }
    console.log(result);
  }
}
optimizedMath();
