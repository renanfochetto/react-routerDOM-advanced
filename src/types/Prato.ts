import cardapio from 'data/cardapio.json';

export type Cardapio = typeof cardapio;

// @ts-ignore
export type Prato = cardapio[0];
