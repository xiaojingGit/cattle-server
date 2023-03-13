const Router = require('@koa/router');
const router = new Router();
const carList = require('../json/carList');
const cattleSize = require('../json/cattleSize');
const lastDestination = require('../json/lastDestination');
const adrList = require('../json/address');

/**卡车类型 */
router.get('/dev-api/system/carInfo/list', async ctx => {
  ctx.body = carList;
})

/**目的地回显 */
router.get('/dev-api/consumer/lastDestination', async ctx => {
  ctx.body = lastDestination;
})

/**牛规格 */
router.get('/dev-api/system/cattle/findAll', async ctx => {
  ctx.body = cattleSize;
})

/**首页距离费用计算(包含预定金和总计费用、距离) */
router.get('/', async ctx => {
  ctx.body = '';
})

router.get('/dev-api/system/address/list', async ctx => {
  ctx.body = adrList;
})

module.exports = app => {
  app
    .use(router.routes())
    .use(router.allowedMethods());
};
