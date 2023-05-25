Completamente documentado: https://docs.expo.dev/guides/google-authentication/

- Criei um projeto no Google Cloud, configurei infos simples na tela de consentimento
- Depois criei um client OAuth usando a plataforma Android
- Gerei e baixei o arquivo JSON
- Inserir a webBrowser
- Colocar a credencial do cliendIdAndroid, que está dentro do arquivo JSON baixado, dentro do Google.useAuthRequest()
- Chamamos a promptAsync para realizar a abertura do login com google
- Chamamos a response.authentication.accessToken para pegar o token do usuário
