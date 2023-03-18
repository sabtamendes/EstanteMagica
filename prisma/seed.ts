import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  const livro = await prisma.livro.create({
    data: {
      titulo: 'Aventuras na Floresta',
      autor: 'Maria Silva',
      professor: 'João Souza',
      codigo_magico: 'ABCDEF',
      paginas: {
        create: [
          {
            numero_pagina: 1,
            texto: 'Era uma vez uma garotinha chamada Ana que morava na cidade grande. Ela adorava brincar de explorar lugares novos.',
            imagem_url: 'https://exemplo.com/imagem1.jpg',
          },
          {
            numero_pagina: 2,
            texto: 'Um dia, Ana decidiu explorar a floresta que ficava nos arredores da cidade. Ela estava animada e cheia de expectativas.',
            imagem_url: 'https://exemplo.com/imagem2.jpg',
          },
          {
            numero_pagina: 3,
            texto: 'Ao chegar na floresta, Ana se deparou com uma paisagem incrível. Árvores altas, plantas exóticas e animais que ela nunca havia visto antes.',
            imagem_url: 'https://exemplo.com/imagem3.jpg',
          },
          {
            numero_pagina: 4,
            texto: 'Mas Ana não sabia que a floresta era também o lar de criaturas mágicas. De repente, ela se viu cercada por fadas, unicórnios e outras criaturas que ela só conhecia nos contos de fadas.',
            imagem_url: 'https://exemplo.com/imagem4.jpg',
          },
          {
            numero_pagina: 5,
            texto: 'Ana ficou encantada com tudo aquilo e decidiu explorar ainda mais a floresta. Ela se aventurou por trilhas e cachoeiras, sempre acompanhada pelos seus novos amigos mágicos.',
            imagem_url: 'https://exemplo.com/imagem5.jpg',
          },
          {
            numero_pagina: 6,
            texto: 'No fim do dia, Ana voltou para casa cheia de histórias incríveis para contar. Ela nunca mais esqueceria a aventura que viveu na floresta.',
            imagem_url: 'https://exemplo.com/imagem6.jpg',
          },
        ],
      },
    },
  });

  console.log(`Livro criado com sucesso! ID: ${livro.autor}`);
}

seed()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
