# Mamba Campaigns API

> API para gerenciamento de campanhas publicitárias construída com NestJS

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão 20.9.0 ou superior do `<NodeJS>`
- Você instalou a versão 2.39 ou superior do `<Git>`
- Você tem o `<Docker e Docker Compose>` instalados
- Você tem uma máquina `<Windows / Linux / Mac>`

## 🚀 Instalando

Para instalar o Mamba Campaigns API, siga os passos abaixo:

### 1. Clone o projeto do GitHub:

```
git clone https://github.com/emsmoraes/mamba-campaigns.git
```

### 2. Entre na pasta do projeto:

```
cd mamba-campaigns
```

### 3. Instale as dependências usando o npm:

```
npm install
```

### 4. Crie um arquivo `.env`:

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
PORT=3000
DATABASE_URL="postgresql://mamba-campaigns:root@localhost:5432/mamba-campaigns"
```

## 🐳 Executando com Docker Compose

Para criar o banco de dados, utilize o seguinte comando:

```
docker-compose up -d
```

Isso iniciará um container PostgreSQL configurado para a aplicação.

## ☕ Rodando a aplicação

Para rodar o projeto em modo de desenvolvimento, utilize:

```
npm run start:dev
```

## 🧪 Testes Unitários

Para executar os testes unitários, rode:

```
npm run test
```

## 💎 Documentação da API

Acesse [http://localhost:3000/api](http://localhost:3000/api) com a aplicação rodando para visualizar a documentação completa das rotas.

Caso queira testar as rotas diretamente no Insomnia, importe o arquivo `insomnia.json` disponível na raiz do projeto.

## 🤝 Criador

Feito por:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/85969484?s=400&u=b0e89e575a7cb91fc9f8a69e126a9d7587aa9478&v=4" width="100px;" alt="Foto de Eduardo Meneses no GitHub"/><br>
        <sub>
          <b>Eduardo Meneses</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 📝 Licença

Este projeto está sob licença. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
