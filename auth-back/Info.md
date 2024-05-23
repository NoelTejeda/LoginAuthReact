### Configuración del backen con node express

## para iniciar un proyecto con node los pasos son:
  - npm init -y
  - npm i express cors bcrypt dotenv jsonwebtoken nodemon postgres 
  - iniciar back: npx nodemon app.js

## Crear carpeta routes:

 - y crear los archivos: 
   - login / refreshToken  / signout / signup /todos /user
 - y en cada archivo
  
```tsx
const router = require("express").Router()

router.get("/", (req, res) => {
  res.send("login")
})

module.exports = router
```
  ## Crear carpeta lib:
  - y crear los archivos: 
  - auth / db / middleware / response
  - para unificar lo que se manda de respuesta desde el servidor al frontend.