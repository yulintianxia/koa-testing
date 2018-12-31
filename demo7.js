const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();

//父极路由
let home = new Router();

home.get('/jspang', async(ctx) => {
    ctx.body = 'home Jspang page'
}).get('/todo', async(ctx) => {
    ctx.body = 'home todo page'
})

let page = new Router();

page.get('/jspang', async(ctx) => {
    ctx.body = 'page Jspang page'
}).get('/todo', async(ctx) => {
    ctx.body = 'page todo page'
})

//装载所有子极路由
let router = new Router();
router.use('/home', home.routes(), home.allowedMethods());
router.use('/page', page.routes(), page.allowedMethods());


app
    .use(router.routes())
    .use(router.allowedMethods());


app.listen(3001, () => {
    console.log('监听3001端口');
})