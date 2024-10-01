const {Router} = require ("express")
const {postEntry, getlistarPorHolder, getListarPorDia, getListarPorFechas, putEntradaSalida} = require ("../controllers/Entrys")
const router = Router()



router.post("/", postEntry)//insertar


router.get("/holder/:id", getlistarPorHolder)//listar por holder


router.get("/:dia", getListarPorDia)//listar por dia


router.get("/fechas/:fechaInicio/:fechaFinal", getListarPorFechas)//listar por fechas


router.put("/:salida", putEntradaSalida)//entrada o salida

module.exports=router