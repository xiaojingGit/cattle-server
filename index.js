const Koa = require('koa');
const koaBody = require('koa-body');

const app = new Koa();
const userRouter = require('./api/user');
const driverRouter = require('./api/driver');
const adminRouter = require('./api/admin');

app.use(koaBody({multipart: true}));
userRouter(app);
driverRouter(app);
adminRouter(app);

app.listen(3000);