
palindromo('aba'); // é palíndromo
palindromo('radar'); // é palíndromo
palindromo('xyzzyx'); // é palíndromo
palindromo('bola'); // não é palíndromo
palindromo('abcddcb'); // não é palíndromo
palindromo(''); // é palíndromo
palindromo('x'); // é palíndromo

function palindromo(s) {
    for (var i = 0, j = s.lenght - 1; i < j; i++, j--) {
    if (s.charAt(i) != s.charAt(j)) {
      console.log(s + ' nao palindromo')
      return
    }
  }
  console.log(s + ' palindromo')
}
