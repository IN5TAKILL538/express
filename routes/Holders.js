const { Router } = require('express')
const {check} = requiere('validator-express')
const { postHolders, putHolders, getHolders, getHolder, putActive, putUnactivate } = require("../controllers/Holders")
const {helperHolder}=require("../helpers/Holders")
const { validarCampos } = require("../middlewares/validar-campos")

const router = Router();

//insertar 
router.post("/", [
    check("email", "El email es obligatorio").notEmpty(),
    check("email", "el email debe serunico").custom(helperHolder.validarEmail),
    check("password", "La contraseña es obligatoria").notEmpty(),
    check("password", "Minimo 8 caracteres").isLength({ min: 8 }),
    check("document", "Minimo 8 caracteres").notEmpty(),
    check("ficha", "Ficha debe ser un numero").isNumeric(),
    validarCampos
], postHolders)


//actualizar o modificar
router.put("/:id", [
    check("id","Id no valido").isMongoId(),
    check("id","no existe en la bd").custom(helperHolder.validarId)
    ], putHolders)

router.get("/:id", getHolder)//listar por id

router.get("/", getHolders)// listar todos


router.put("/activate/:id",[
    
        check("id","Id no valido").isMongoId(),
        check("id","no existe en la bd").custom(helperHolder.validarId)
        
], putActive)//activar

router.put("/unactivate/:id",[
    check("id","Id no valido").isMongoId(),
    check("id","no existe en la bd").custom(helperHolder.validarId)
], putUnactivate)//inactivar

module.exports = router