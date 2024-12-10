## Subir projeto em docker
docker compose up -d


## Teste de rota
http://localhost:8080/


# Destaques da Configuração

**Suporte a Range Requests:**
Isso permite que os clientes pulem para partes específicas do vídeo sem baixar o arquivo inteiro.

**Cabeçalhos de Cache:**
Cache-Control garante que os vídeos sejam armazenados em cache pelos navegadores, reduzindo a carga no servidor.
Otimização de Envio de Arquivos:

sendfile on: Usa envio de arquivos otimizado.
tcp_nopush e tcp_nodelay: Melhora a eficiência no envio de grandes arquivos de vídeo.

**Limitação de Conexões:**
Previne abusos ao limitar o número de conexões simultâneas por IP.

**Buffers e Tamanhos de Arquivo:**
Suporte a vídeos grandes com client_max_body_size 10G.
Desativa o buffer de proxy (proxy_buffering off).

# Construindo a imagem do Docker (na pasta api)
docker build -t node-application .

# Executando o contêiner Docker
docker run -it -p 9000:3000 node-application
