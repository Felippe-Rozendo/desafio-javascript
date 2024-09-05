function validacaoColchetes(itemStr) {
    const lista = [];
    const colchetesAbertura = ['(', '[', '{'];
    const colchetesFechamento = [')', ']', '}'];

    for (let c of itemStr) {
        if (colchetesAbertura.includes(c)) {
            lista.push(c); // Adiciona colchetes de abertura na lista
        } else if (colchetesFechamento.includes(c)) {
            const matchingOpening = colchetesAbertura[colchetesFechamento.indexOf(c)];
            if (lista.pop() !== matchingOpening) {
                return false; // Se o colchete de fechamento não corresponde, retorna falso
            }
        }
    }

    return lista.length === 0; // Retorna true se todos os colchetes foram fechados corretamente
}

// Exemplos de uso
console.log(validacaoColchetes("(){}[]")); // true
console.log(validacaoColchetes("[{()}](){}")); // true
console.log(validacaoColchetes("{()}")); // true
console.log(validacaoColchetes("{()}[[]]")); // true

console.log(validacaoColchetes("[]{()")); // false
console.log(validacaoColchetes("[{)]")); // false
console.log(validacaoColchetes("[[({})]")); // false
console.log(validacaoColchetes("[}{)(]")); // false