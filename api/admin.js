const Router = require('@koa/router');
const router = new Router();

/**测试 */
router.get('/test', async ctx => {
  ctx.body = {
    ec: 200,
    data: "hello world"
  }
})

module.exports = app => {
  app
    .use(router.routes())
    .use(router.allowedMethods());
};
