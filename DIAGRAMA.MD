

## Entidades

### Usuário
- **id (PK)**
- nome
- email
- senha
- data_criacao

### Postagem
- **id (PK)**
- id_usuario (FK)
- conteudo
- data_postagem

### Comentário
- **id (PK)**
- id_postagem (FK)
- id_usuario (FK)
- conteudo
- data_comentario

### Curtida
- **id (PK)**
- id_postagem (FK)
- id_usuario (FK)
- data_curtida

## Relações

- **Usuário** (1) --- (N) **Postagem**
- **Postagem** (1) --- (N) **Comentário**
- **Usuário** (1) --- (N) **Comentário**
- **Postagem** (1) --- (N) **Curtida**
- **Usuário** (1) --- (N) **Curtida**
