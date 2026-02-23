import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  projetos = [
    { nome: 'AuthTokenService', tecnologias: 'Java, Spring Boot', imagem: 'images/authtokenservice.png', descricao: 'Biblioteca de autenticação JWT para aplicações Spring Boot 3+, com geração e validação de tokens assinados via HMAC SHA-256 (HS256). Implementa autenticação stateless, integração automática com Spring Security e separação segura da chave criptográfica, seguindo boas práticas de segurança.', flipped: false },
    { nome: 'NEO-API', tecnologias: 'Java, Spring Boot', imagem: 'images/neo.png', descricao: 'API REST desenvolvida com Java 21 e Spring Boot para gerenciamento de usuários e clientes. Implementa autenticação baseada em JWT, arquitetura em camadas (Controller, Service, Repository) e validações robustas para garantir segurança e integridade dos dados.', flipped: false },
    { nome: 'WeekWatch', tecnologias: 'Angular, TypeScript', imagem: 'images/weekwatch.png', descricao: 'Aplicação frontend em Angular que consome a API do The Movie Database (TMDB) para exibir filmes e séries mais populares da semana. Implementa consumo de API REST, componentização e organização modular da aplicação.', flipped: false },
    { nome: 'Aid Crusader', tecnologias: 'Node.js, React, SQL', imagem: 'images/aidcrusader.png', descricao: 'Plataforma de rede social com foco em financiamento coletivo. Atuação no desenvolvimento de funcionalidades backend e frontend, integração com banco de dados relacional e construção de funcionalidades colaborativas.', flipped: false },
    { nome: 'Tarefas', tecnologias: 'Java, Spring Boot, SQL', imagem: 'images/tarefas.png', descricao: 'Aplicação backend para gerenciamento de tarefas com operações CRUD completas. Desenvolvida com Spring Boot e JPA, utilizando persistência em banco de dados relacional e arquitetura organizada em camadas.', flipped: false },
    { nome: 'SCN-API', tecnologias: 'Java, Spring Boot, SQL', imagem: 'images/scn.png', descricao: 'API REST acadêmica desenvolvida para gerenciamento de atividades, médias e histórico escolar. Permite acompanhamento do semestre atual e anteriores, com modelagem relacional consistente e endpoints organizados por domínio.', flipped: false }
  ];

  projetoAtivo = this.projetos[0];

  selecionarProjeto(projeto: any) {
    this.projetoAtivo = projeto;
    this.projetoAtivo.flipped = false;
  }

  

  flipCard() {
    this.projetoAtivo.flipped = !this.projetoAtivo.flipped;
  }

}