<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
yarn install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar la base de datos 
```
docker-compose up -d
```
5. Clonar el archivo ```.env.template``` y renombrar la copia a ```.env```

6. Llenar variables de entorno definidad en ```.env```, solicitar credenciales de seguridad a adminisgtrador de proyecto.
7. Ejecutar la aplicacion en ambiente desarrollo ```dev```
```
yarn start:dev
```
Extra Reconstruir base de datos con la semilla. __Solo ejecutar en desarrollo!__
```
http://127.0.0.1:3000/api/v2/seed
```
# Production build
1. Crear archivo ```.env.prod```
2. Llenar las variables de entorno de prod 
3. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
4. Correr la imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
```

## Stack usado 
* NestJs
* MongoDB
* Mongoose
* axios
* joi
