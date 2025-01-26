# 🧠 Jogo da Memória - Vue.js

## 📌 Sobre o Projeto
Este é um jogo da memória desenvolvido com Vue.js. O objetivo é encontrar todos os pares de cartas no menor número de rodadas possível. O jogo registra o ranking dos jogadores que completam o desafio com menos rodadas.

## 🎮 Como Jogar
1. **As cartas serão embaralhadas aleatóriamente** e dispostas em um grid.
2. **Clique em duas cartas** para revelá-las.
3. **Se formarem um par**, elas permanecerão visíveis.
4. **Se não forem um par**, serão ocultadas novamente após um curto período.
5. **O contador de rodadas** aumentará a cada tentativa.
6. **Quando todos os pares forem encontrados**, o jogo exibirá uma mensagem de sucesso e o total de rodadas.
7. **O jogador pode salvar sua pontuação** e visualizar o ranking dos melhores desempenhos.
8. **É possível reiniciar o jogo** para uma nova rodada.

## 🛠 Tecnologias Utilizadas
- **Vue.js** - Framework JavaScript para interfaces dinâmicas
- **HTML5/CSS3** - Estruturação e estilização da aplicação
- **LocalStorage** - Armazena os rankings dos jogadores

## 🚀 Como Executar o Projeto
### 1️⃣ Rodar Localmente
1. **Clone este repositório:**
   ```sh
   git clone https://github.com/seuusuario/jogo-memoria-vue.git
   ```
2. **Acesse a pasta do projeto:**
   ```sh
   cd jogo-memoria-vue
   ```
3. **Instale as dependências:**
   ```sh
   npm install
   ```
4. **Inicie o servidor de desenvolvimento:**
   ```sh
   npm run dev
   ```
5. **Acesse no navegador:**
   ```
   http://localhost:5173/
   ```

### 2️⃣ Rodar a Versão Buildada (Produção)
Se quiser acessar o jogo a partir da pasta `dist/`:
1. **Gere os arquivos de build:**
   ```sh
   npm run build
   ```
2. **Instale um servidor local:**
   ```sh
   npm install -g serve
   ```
3. **Rode o projeto:**
   ```sh
   serve -s dist
   ```
4. **Acesse pelo navegador** usando o link gerado pelo terminal.

## 📋 Regras do Projeto
1. **Deve ser feito utilizando Vue.js.**
2. **Pode conter esboços, protótipos ou documentação adicional.**
3. **O repositório deve conter instruções claras de execução.**
4. **Deve ser entregue em um repositório GIT público.**
5. **Serão avaliados:**
   - Qualidade do JavaScript e uso do Vue.js.
   - Boas práticas de HTML5 e CSS3.
   - Clean Code e componentização.
   - Organização e aplicação de boas práticas de CSS.

## 📜 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo!