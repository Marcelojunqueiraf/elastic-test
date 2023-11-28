import { Injectable } from '@nestjs/common';

const matriz = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
];

@Injectable()
export class AppService {
  forGrande(): string {
    for (let i = 0; i < 1000000000; i++) {}
    return 'concluido';
  }

  // inversao de matriz
  invert(): number[][] {
    const matrizInvertida = matriz.map((linha, indexLinha) => {
      return linha.map((coluna, indexColuna) => {
        return matriz[indexColuna][indexLinha];
      });
    });

    return matrizInvertida;
  }
}
