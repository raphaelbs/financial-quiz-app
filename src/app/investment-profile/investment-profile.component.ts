import { Component, OnInit } from '@angular/core';
import { IFormInput } from '../base/form-input/form-input.interface';

@Component({
  selector: 'app-investment-profile',
  templateUrl: './investment-profile.component.html',
  styleUrls: ['./investment-profile.component.scss']
})
export class InvestmentProfileComponent implements OnInit {
  form: IFormInput;

  constructor() {
    this.form = {
      type: 'form',
      label: 'PERFIL DO INVESTIDOR - QUESTIONÁRIO',
      children: [
        {
          type: 'radio',
          label:
            '1 - Qual o seu comportamento em relação ao seus investimentos?',
          required: true,
          children: [
            {
              type: 'radio-option',
              label: 'PRESERVAR MEU DINHEIRO SEM CORRER RISCOS'
            },
            {
              type: 'radio-option',
              label: 'GANHAR MAIS DINHEIRO, ASSUMINDO RISCOS MODERADOS'
            },
            {
              type: 'radio-option',
              label: 'GANHAR MAIS DINHEIRO, ASSUMINDO RISCOS AGRESSIVOS'
            }
          ]
        },
        {
          type: 'radio',
          label:
            '2 - Por quanto tempo você deseja manter os seus investimentos?',
          required: true,
          children: [
            {
              type: 'radio-option',
              label: 'ATÉ 1 ANO'
            },
            {
              type: 'radio-option',
              label: 'DE 1 A 3 ANOS'
            },
            {
              type: 'radio-option',
              label: 'DE 3 A 5 ANOS'
            }
          ]
        },
        {
          type: 'radio',
          label:
            '3 - Quantos % desses investimentos você pode precisar em um ano?',
          required: true,
          children: [
            {
              type: 'radio-option',
              label: 'ACIMA DE 75%'
            },
            {
              type: 'radio-option',
              label: 'DE 26% A 74%'
            },
            {
              type: 'radio-option',
              label: 'ATÉ 25%'
            }
          ]
        },
        {
          type: 'select-group',
          label:
            '4 - Qual sua familiaridade com os tipos de investimentos abaixo?<br>Leve em consideração o valor aplicado nos últimos 2 anos.',
          children: [
            {
              type: 'select',
              label: 'TÍTULOS DE RENDA FIXA OU TESOURO DIRETO',
              required: true,
              children: [
                {
                  type: 'select-option',
                  label: 'Nunca operei'
                },
                {
                  type: 'select-option',
                  label: 'Opero pouco e não tenho familiaridade'
                },
                {
                  type: 'select-option',
                  label: 'Opero eventualmente e conheço os riscos associados'
                },
                {
                  type: 'select-option',
                  label: 'Opero frequentemente e conheço os riscos associados'
                }
              ]
            },
            {
              type: 'select',
              label: 'FUNDOS DE INVESTIMENTO',
              required: true,
              children: [
                {
                  type: 'select-option',
                  label: 'Nunca operei'
                },
                {
                  type: 'select-option',
                  label: 'Opero pouco e não tenho familiaridade'
                },
                {
                  type: 'select-option',
                  label: 'Opero eventualmente e conheço os riscos associados'
                },
                {
                  type: 'select-option',
                  label: 'Opero frequentemente e conheço os riscos associados'
                }
              ]
            },
            {
              type: 'select',
              label: 'AÇÕES A VISTA',
              required: true,
              children: [
                {
                  type: 'select-option',
                  label: 'Nunca operei'
                },
                {
                  type: 'select-option',
                  label: 'Opero pouco e não tenho familiaridade'
                },
                {
                  type: 'select-option',
                  label: 'Opero eventualmente e conheço os riscos associados'
                },
                {
                  type: 'select-option',
                  label: 'Opero frequentemente e conheço os riscos associados'
                }
              ]
            },
            {
              type: 'select',
              label: 'ALUGUEL DE AÇÕES, TERMOS, OPÇÕES E FUTUROS',
              required: true,
              children: [
                {
                  type: 'select-option',
                  label: 'Nunca operei'
                },
                {
                  type: 'select-option',
                  label: 'Opero pouco e não tenho familiaridade'
                },
                {
                  type: 'select-option',
                  label: 'Opero eventualmente e conheço os riscos associados'
                },
                {
                  type: 'select-option',
                  label: 'Opero frequentemente e conheço os riscos associados'
                }
              ]
            }
          ]
        }
      ]
    };
  }

  ngOnInit() {}

  formSubmit() {}

  back() {}
}
