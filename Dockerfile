# Use a imagem oficial do Node.js com uma versão específica
FROM node:21.3

# Crie e defina o diretório de trabalho na imagem Docker
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json para o diretório de trabalho
# COPY package*.json ./

# Copie todos os arquivos do projeto para o diretório de trabalho
COPY . ./

# Instale as dependências
RUN npm install

# Construa a aplicação Next.js
RUN npm run build

# Expõe a porta 3000, que é a porta padrão utilizada pelo Next.js
EXPOSE 3000

# Inicia a aplicação Next.js quando o contêiner for iniciado
CMD ["npm", "start"]