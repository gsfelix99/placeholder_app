
## Aplicação React: Exibindo Placeholders com API https://placehold.co/


A API [Placehold](https://placehold.co/) nos oferece imagens temporárias enquanto desenvolvemos nossos projetos. Nesta aplicação, foi implemenado e configurado o ambiente React afim de buscar imagens da API e exibi-las em nossa aplicação.

## Execução da aplicação

Para a execução da aplicação, é necessário seguir os seguintes passos:
* Puxar a imagem mais atualizada da aplicação
* Executar o container da aplicação

Para pegar a imagem mais atualizada, rodar o seguinte comando:
```sh
docker push gsfelix99/placeholder_app:latest
```

Depois de concluído, execute a imagem do Docker e mapeie a porta do container com a do host. Neste exemplo, simplesmente mapeamos a porta 3000 do host para a 3000 do Docker (ou qualquer porta exposta no Dockerfile):

```sh
 docker run -p 3000:3000 -d gsfelix99/placeholder_app:latest
```

## License

MIT

