// Entendendo o Desafio
// Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! 
// Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. 
// Para isso, crie seu próprio repositório e aumente ainda mais seu portfólio de projetos no GitHub, 
// o qual pode fazer toda diferença em suas entrevistas técnicas 😎
 
// Neste repositório, insira todos os links e arquivos necessários para seu projeto, 
// seja um arquivo de banco de dados ou um link para o template no Figma.
 
// Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para 
// organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.
 
// Instruções para entrega
// # 1️⃣ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
// depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

// Bons estudos 😉

print("Descubra qual o seu nível de Herói");
print("Digite o nome e a quantidade de esperiência (XP) do herói, separados por dois pontos (:). Ex: 'Superman: 9500'")
let dados = gets().split(", ");
let resultado = [];

dados.forEach(item => {
    let [nome, xp] = item.split(":");
    xp = parseInt(xp);

    if (xp < 1000) {
      resultado.push(`O Herói de nome ${nome} está no nível de Ferro}`)
    } else if (xp < 1001 && xp <= 2000) {
      resultado.push(`O Herói de nome ${nome} está no nível de Bronze}`)
    } else if (xp < 2001 && xp <= 5000) {
      resultado.push(`O Herói de nome ${nome} está no nível de Prata}`)
    } else if (xp < 5001 && xp <= 7000) {
      resultado.push(`O Herói de nome ${nome} está no nível de Ouro}`)
    } else if (xp < 7001 && xp <= 8000) {
      resultado.push(`O Herói de nome ${nome} está no nível de Platina}`)
    } else if (xp < 8001 && xp <= 9000) {
      resultado.push(`O Herói de nome ${nome} está no nível de Ascendente}`)
    } else if (xp < 9001 && xp <= 10000) {
      resultado.push(`O Herói de nome ${nome} está no nível de Imortal}`)
    } else if (xp >= 10001) {
      resultado.push(`O Herói de nome ${nome} está no nível de Radiante}`)
    } 
});

print(resultado.join(", "));