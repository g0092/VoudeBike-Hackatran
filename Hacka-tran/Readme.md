### PROJETO HACKA-TRAN 2020 - VouDeBike ###

Link para o [Pitch](https://youtu.be/dpVKGTViqr0)

#### Passos para instalação ####

1. Instalar o [Node](https://nodejs.org/en/)
2. Instalar o [NPM](https://www.npmjs.com/get-npm)
3. Instalar o [Ionic](https://www.npmjs.com/package/@ionic/cli)
4. Instalar o [Capacitor](https://www.npmjs.com/package/@capacitor/core)
4. Executar o comando "npm install"
5. Executar o comando "ionic capacitor build <android>/<ios>"
6. Executar o comando "cd android"
## Linux ou MacOS##
7. Executar o comando "./gradlew bundleDebug"

## Windows ##
7. Executar o comando ".\gradlew bundleDebug"

O aplicativo android compilado estará na pasta de saída dada pelo resultado da execução do comando acima

Para gerar um aplicativo IOS será necessário um MacOS e os passos para compilar o app são os mesmos de qualquer app no [**XCode**](https://apps.apple.com/us/app/xcode/id497799835?mt=12)


### A ideia original do aplicativo ###
O Aplicativo **VouDeBike** é um aplicativo para ciclistas melhorarem sua experiência no trânsito e nos contarem mais sobre como é. Seu objetivo é coletar dados para o governo de modo a ajudar os ciclistas a melhorarem sua experiência de viagem.
Para isso, o aplicativo disponibiliza uma interface simples para que possam: 
* Reportar problemas
* Validar que estão com todos os equipamentos necessários
* Verificar sua ajuda ao meio-ambiente diminuindo a emissão de CO2
* Marcar pedaladas com outros ciclistas
* Serem avisados sobre reports de outros usuários na via

### O aplicativo conta com ###
- [x] Login
- [x] Cadastro
- [ ] Botão de reportar
- [ ] Envio de coordenadas para o banco de dados
- [ ] Quiz com questões de segurança
- [ ] Histórico de emissão de CO2
- [ ] Aba de comunidade
- [ ] Avisos sobre a via
