const {Router} = require("express")
const {postInsertar, putModificar, getListar, getListarPorId, putActivar, putDesactivar, generarQr} = require("../controllers/Laptops")
const router = Router()
const {helperlaptops} = require("../helpers/Laptops")


router.post("/",[
 
],postInsertar)//insertar


router.put("/:id", putModificar)//modificar


router.get("/",getListar)//listar



router.get("/:id", getListarPorId )//listar pot id


router.put("/activate/:id", putActivar )//activar


router.put("/unactivate/:id", putDesactivar)//desactivar


router.put("/qr/:serial", generarQr)//codigo qr

module.exports=router  