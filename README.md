# express-react-example

## ambiente de desarrollo

El proyecto utiliza el framework react para desarrollo. Para compilar un servidor de desarrollo con react debemos ejecutar el comando 
### `npm start`
dentro de la carpeta express-react-example.

Una vez se tenga el proyecto react listo se puede probar en el lado del servidor mediante express, para esto ejecutamos el comando 
### `node server_express.js`

## ambiente de produccion

Los pasos para compilar el proyecto en producción son 3: compilar proyecto para producción, configurar apache, ejecutar servidor de producción.

**1. Compilar proyecto para producción**: 

En mi proyecto debo ejecutar el comando
### `npm run build:bundle`
El cual ejecutará el webpack, se debe tener en consideración que el webpack setea las variables de ambiente REACT_APP_BASE_URL y REACT_APP_BASE_ROUTE que utilizará el proyecto react. El resultado de ejecutar el comando serán los archivos generados en /dist. Se debe subir este código a github.

**2. Configurar el apache**:

Debo configurar el apache para redireccionar las llamadas que se hagan al puerto donde correrá el servidor express. Para esto en el respectivo .conf agrego:

```
<Location /express-react/ >
  ProxyPreserveHost On
  ProxyPass  http://localhost:5010/
  ProxyPassReverse http://localhost:5010/
  ProxyPassReverseCookieDomain  "localhost"  "dev2.impresee.com"
  ProxyPassReverseCookiePath  "/"  "/express-react/"
  Header add Access-Control-Allow-Origin "*"
  Header add Access-Control-Allow-Credentials true
  Header add Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept"
</Location>
```

Donde /express-react/ es equivalente a {REACT_APP_BASE_ROUTE} y el puerto debe ser el puerto del servidor express.

**3. Ejecutar el servidor**:
Después de clonar el código en el servidor de producción, se ejecuta el servidor mediante el comando:
### `pm2 start express_server.js`
Esto dejará corriendo el servidor como un proceso. Puedo verificar el estado con "pm2 status". Una vez se ejecuta el proceso se debe reiniciar el apache con
### `service apache2 restart`
Como usuario root. 
Se debe tener en consideración que el puerto se define dentro del script express_server.js
