import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-stacks',
  imports: [],
  templateUrl: './stacks.html',
  styleUrl: './stacks.scss',
})
export class Stacks {

  stacks = [
    { Nome: 'Java', Imagem: 'images/java.png', descricao: "Desenvolvimento de aplicações robustas e escaláveis utilizando a linguagem Java.", flipped: false },
    { Nome: 'Spring Boot', Imagem: 'images/spring.png', descricao: "Criação de APIs e microsserviços com o framework Spring Boot, aplicando boas práticas de arquitetura back-end.", flipped: false },
    { Nome: 'Oracle SQL', Imagem: 'images/oracle-sql.png', descricao: "Modelagem, consulta e manipulação eficiente de dados em bancos relacionais com Oracle SQL.", flipped: false },
    { Nome: 'Angular', Imagem: 'images/angular.png', descricao: "Desenvolvimento de interfaces dinâmicas e integradas ao back-end utilizando o framework Angular.", flipped: false },
    { Nome: 'React', Imagem: 'images/react.png', descricao: "Desenvolvimento de interfaces dinâmicas e integradas ao back-end utilizando o framework React.", flipped: false },
    { Nome: 'Node', Imagem: 'images/node.png', descricao: "Criação de APIs e microsserviços com o framework Node JS, aplicando boas práticas de arquitetura back-end.", flipped: false },
  ];

  flipCard(item: any) {
    item.flipped = !item.flipped;
  }

}
