/*
  Servico que vai executar as operacoes da calculadora
  @author Diego S. M. Matos <degomatos@gmail.com>
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {
  /*Constantes definidas para identificar o tipo de calculo que sera realizado*/
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() {}

  /*Metodo que sera utilizado para realizar o calculo e retornar um resultado tipo number*/
  calcular(num1: number, num2: number, operacao: string): number {
    switch (operacao) {
      case CalculadoraService.SOMA:
        return num1 + num2;
      case CalculadoraService.SUBTRACAO:
        return num1 - num2;
      case CalculadoraService.DIVISAO:
        return num1 / num2;
      case CalculadoraService.MULTIPLICACAO:
        return num1 * num2;
      default:
        return 0
    }
  }
}
