//访问静态资源
const Koa = require('koa');
const path = require('path');
const static = require('koa-static');

const app = new Koa();

const staticPath = './static';

app.use(static(path.join(__dirname, staticPath)));

app.use(async(ctx) => {
    ctx.body = 'hello word'
});

app.listen('3000', () => {
    console.log('监听3000')
})