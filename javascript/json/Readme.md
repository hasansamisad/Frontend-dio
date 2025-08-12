# 📦 JSON — Principais Funcionalidades e Objetivos

## 🔍 O que é JSON
**JSON** (*JavaScript Object Notation*) é um **formato de texto** usado para **armazenar** e **trocar dados** entre sistemas.  
É **independente de linguagem** — qualquer tecnologia (Python, JavaScript, Java, etc.) consegue interpretar.  
É **leve**, legível para humanos e fácil de converter para estruturas internas de programação.

---

## ⚙️ Principais Funcionalidades

1. **Serialização** (Objeto → Texto JSON)  
   Converter dados internos da aplicação em texto para salvar ou enviar.  
   **Exemplo em JavaScript**:
   ```javascript
   JSON.stringify(objeto);

## 🛠️ Desserialização (Texto JSON → Objeto)
Converter texto JSON recebido em um objeto manipulável no código.

**Exemplo em JavaScript**:
```javascript
JSON.parse(textoJSON);


## Troca de Dados Entre Sistemas
JSON é padrão em APIs REST e integrações, garantindo compatibilidade entre diferentes linguagens.

##Objetivos do JSON
: Padronizar o formato de dados para comunicação universal.
: Facilitar integração entre sistemas escritos em linguagens diferentes.
: Armazenar dados de forma simples e legível (ex.: arquivos .json de configuração).
: Transportar dados de forma leve pela rede (ex.: resposta de uma API).


## Quando Usar JSON
:Comunicação entre sistemas via API (frontend ↔ backend).

Salvar configurações ou dados em arquivos .json.

Enviar dados estruturados em requisições HTTP.

Exportar/importar informações para outras aplicações.