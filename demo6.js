const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router({
    prefix: '/jspang'
});

router
    .get('/', (ctx, next) => {
        ctx.body = 'hello word';
    })
    .get('/todo', (ctx, next) => {
        ctx.body = 'todo page'
    })

app
    .use(router.routes())
    .use(router.allowedMethods());


app.listen(3001, () => {
    console.log('监听3001端口');
})