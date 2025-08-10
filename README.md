# Coffee Backend API

Este proyecto es el backend de una aplicación de cafetería, desarrollado con [NestJS](https://nestjs.com/). Proporciona una API RESTful para gestionar productos, pedidos, usuarios y más.

## ¿De qué trata?

La API permite a cafeterías gestionar su catálogo de productos, recibir pedidos y administrar usuarios. Está diseñada para integrarse con aplicaciones frontend móviles y web.

## Requisitos previos

- Node.js >= 18.x
- npm >= 9.x
- [NestJS CLI](https://docs.nestjs.com/cli/overview)
- MongoDB o PostgreSQL (según configuración)

## Cómo unirse al proyecto

1. **Clona el repositorio:**

```bash
git clone https://github.com/tu-usuario/coffee-backend.git
cd coffee-backend
```

2. **Instala las dependencias:**

```bash
npm install
```

3. **Configura las variables de entorno:**

- crea el archivo `.env.example` a `.env` y ajusta los valores según tu entorno.

```bash
DB_HOST=localhost
DB_PORT=3306
DB_USER=tu_usuario
DB_PASS=tu-password
DB_NAME=nombre_db
```

4. **Inicia la base de datos**
   crea la base de datos manualmente ya que nest solo crea las tablas

5. **Ejecuta la aplicación:**

```bash
npm run start:dev
```

## Comandos útiles

- `npm run start:dev` — Inicia el servidor en modo desarrollo.
- `npm run build` — Compila la aplicación.
- `npm run test` — Ejecuta los tests.
- `npm run lint` — Linting del código.

## Conexión con los frontends

- **Repositorio frontend móvil:**  
  [enlace](https://github.com/Ezequiel-2023/react-native-coffee)

- **Repositorio frontend web:**  
  [en desarrollo](en desarrollo)

- **Repositorio frontend Escritorio:**  
  [enlace](https://github.com/Ezequiel-2023/Aplicaci-n-_Escritorio---Cafeter-a_JavaFX)

---

¡Contribuciones y sugerencias son bienvenidas!

- **Documentacion del Proyecto**  
  [en desarrollo](en desarrollo)

## ejecutar pruebas
añade lo siguiente en package.Json


```json
 "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix"
"test": "jest",
"test:watch": "jest --watch ",
"test:cov": "jest --coverage",
"test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand"
```

### ✅ Soluciones para detener Jest definitivamente
🛑 1. Matar el proceso manualmente (si Ctrl+C no funciona)
Ejecuta en terminal:

En PowerShell o CMD:
```bash
taskkill /F /IM node.exe
```