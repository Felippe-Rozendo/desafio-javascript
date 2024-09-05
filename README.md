Suportes Balanceados

Este projeto implementa uma função para validar se a sequência de colchetes fornecida é válida. O objetivo é garantir que todos os colchetes estejam devidamente abertos e fechados em ordem correta, com a correspondência adequada entre eles.

Descrição

A função validacaoColchetes() verifica se uma string contendo colchetes ((), {}, []) está balanceada, ou seja, se cada colchete de abertura tem um correspondente colchete de fechamento, respeitando as regras de aninhamento.

Regras de Validação:

- Não contém colchetes sem correspondência.
- O subconjunto de colchetes dentro dos limites de um par de colchetes correspondente também é um par de colchetes correspondentes.

Exemplos:

	(){}[] é válido.
 
	[{()}](){} é válido.
 
	[]{() não é válido.
 
	[{)] não é válido.

Explicação da função:

1 - Entrada: 
	
	A função recebe uma string contendo colchetes como entrada.

2 - Validação:

  	° A função mantém uma pilha (usando um array lista) para rastrear os colchetes de abertura.

  	° Quando um colchete de abertura é encontrado (como (, [, {), ele é adicionado à lista.

  	° Quando um colchete de fechamento é encontrado (como ), ], }), a função verifica se o último colchete adicionado à 
	  lista corresponde ao colchete de fechamento atual.

  	° Isso é feito removendo o último item da lista com pop() e comparando-o com o colchete de fechamento esperado.

3 - Como a lista é modificada:

° Adicionar: A cada colchete de abertura encontrado, ele é adicionado à lista 

	(ex.: ( => lista = ['(']).

° Remover: Quando um colchete de fechamento é encontrado, a função remove o último item da lista com pop(). Se o item removido não corresponder ao colchete de fechamento esperado, a função retorna false.

° Exemplo: Para a string "({})", a lista funciona assim:

	Adiciona ( => lista = ['(']
	Adiciona { => lista = ['(', '{']
	Fecha } => Remove { da lista com pop(), lista = ['(']
	Fecha ) => Remove ( da lista com pop(), lista = []
 
4 - Resultado: 

Se todos os colchetes forem corretamente balanceados e a lista estiver vazia no final, a função retorna true. Caso contrário, retorna false.
