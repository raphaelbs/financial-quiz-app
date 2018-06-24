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
          key: 'q1',
          required: true,
          children: [
            {
              type: 'radio-option',
              label: 'PRESERVAR MEU DINHEIRO SEM CORRER RISCOS',
              key: 'o1'
            },
            {
              type: 'radio-option',
              label: 'GANHAR MAIS DINHEIRO, ASSUMINDO RISCOS MODERADOS',
              key: 'o2'
            },
            {
              type: 'radio-option',
              label: 'GANHAR MAIS DINHEIRO, ASSUMINDO RISCOS AGRESSIVOS',
              key: 'o3'
            }
          ]
        },
        {
          type: 'radio',
          label:
            '2 - Por quanto tempo você deseja manter os seus investimentos?',
          key: 'q2',
          required: true,
          children: [
            {
              type: 'radio-option',
              label: 'ATÉ 1 ANO',
              key: 'o1'
            },
            {
              type: 'radio-option',
              label: 'DE 1 A 3 ANOS',
              key: 'o2'
            },
            {
              type: 'radio-option',
              label: 'DE 3 A 5 ANOS',
              key: 'o3'
            }
          ]
        },
        {
          type: 'radio',
          label:
            '3 - Quantos % desses investimentos você pode precisar em um ano?',
          key: 'q3',
          required: true,
          children: [
            {
              type: 'radio-option',
              label: 'ACIMA DE 75%',
              key: 'o1'
            },
            {
              type: 'radio-option',
              label: 'DE 26% A 74%',
              key: 'o2'
            },
            {
              type: 'radio-option',
              label: 'ATÉ 25%',
              key: 'o3'
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
              key: 'sg1',
              required: true,
              children: [
                {
                  type: 'select-option',
                  label: 'Nunca operei',
                  key: 'o1'
                },
                {
                  type: 'select-option',
                  label: 'Opero pouco e não tenho familiaridade',
                  key: 'o2'
                },
                {
                  type: 'select-option',
                  label: 'Opero eventualmente e conheço os riscos associados',
                  key: 'o3'
                },
                {
                  type: 'select-option',
                  label: 'Opero frequentemente e conheço os riscos associados',
                  key: 'o4'
                }
              ]
            },
            {
              type: 'select',
              label: 'FUNDOS DE INVESTIMENTO',
              key: 'sg2',
              required: true,
              children: [
                {
                  type: 'select-option',
                  label: 'Nunca operei',
                  key: 'o1'
                },
                {
                  type: 'select-option',
                  label: 'Opero pouco e não tenho familiaridade',
                  key: 'o2'
                },
                {
                  type: 'select-option',
                  label: 'Opero eventualmente e conheço os riscos associados',
                  key: 'o3'
                },
                {
                  type: 'select-option',
                  label: 'Opero frequentemente e conheço os riscos associados',
                  key: 'o4'
                }
              ]
            },
            {
              type: 'select',
              label: 'AÇÕES A VISTA',
              key: 'sg3',
              required: true,
              children: [
                {
                  type: 'select-option',
                  label: 'Nunca operei',
                  key: 'o1'
                },
                {
                  type: 'select-option',
                  label: 'Opero pouco e não tenho familiaridade',
                  key: 'o2'
                },
                {
                  type: 'select-option',
                  label: 'Opero eventualmente e conheço os riscos associados',
                  key: 'o3'
                },
                {
                  type: 'select-option',
                  label: 'Opero frequentemente e conheço os riscos associados',
                  key: 'o4'
                }
              ]
            },
            {
              type: 'select',
              label: 'ALUGUEL DE AÇÕES, TERMOS, OPÇÕES E FUTUROS',
              key: 'sg4',
              required: true,
              children: [
                {
                  type: 'select-option',
                  label: 'Nunca operei',
                  key: 'o1'
                },
                {
                  type: 'select-option',
                  label: 'Opero pouco e não tenho familiaridade',
                  key: 'o2'
                },
                {
                  type: 'select-option',
                  label: 'Opero eventualmente e conheço os riscos associados',
                  key: 'o3'
                },
                {
                  type: 'select-option',
                  label: 'Opero frequentemente e conheço os riscos associados',
                  key: 'o4'
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
}
