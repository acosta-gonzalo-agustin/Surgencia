"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const swagger_1 = __importDefault(require("./docs/swagger"));
const handlerError_1 = require("./utils/handlerError");
// Create Express server
const app = (0, express_1.default)();
// Express configuration
app.set('port', (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3001);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, compression_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
// Root endpoint
app.get('/', (req, res) => {
    res.send({
        name: 'Devsafio API',
        environment: app.get('env'),
    });
});
/*este es un ejemplo de como usar el middleware para subir imagenes
el campo se nombra en el argumento de single en este caso de
ejemplo se uso file y en la siguiente ruta pasa un objeto que tiene
las siguientes caracteristicas
{
  fieldname: 'file',
  originalname: 'casa.jpeg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: 'public/images',
  filename: 'casa-1697070475797.jpeg',
  path: 'public/images/casa-1697070475797.jpeg',
  size: 1305396
}
path lo que hay que tomar en caso de servir la carpeta se debe
tomar solo el nombre del archivo y completar la ruta
*/
// app.post('/test',multerUpload.single('file'),(req,res,next)=>{
//   try {
//     console.log(req.file);
//     res.send('guarda foto')
//   } catch (error) {
//     console.error(error);
//     next('fkkdssl')
//   }
// })
// Api routes
app.use('/api', routes_1.default);
(0, swagger_1.default)(app, 3001);
// Handler Errors
app.use(handlerError_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map