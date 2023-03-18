-- CreateTable
CREATE TABLE "Livro" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "professor" TEXT NOT NULL,
    "codigo_magico" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Livro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pagina" (
    "id" SERIAL NOT NULL,
    "numero_pagina" INTEGER NOT NULL,
    "texto" TEXT NOT NULL,
    "imagem_url" TEXT NOT NULL,
    "livro_id" INTEGER NOT NULL,

    CONSTRAINT "Pagina_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Livro_codigo_magico_key" ON "Livro"("codigo_magico");

-- AddForeignKey
ALTER TABLE "Pagina" ADD CONSTRAINT "Pagina_livro_id_fkey" FOREIGN KEY ("livro_id") REFERENCES "Livro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
