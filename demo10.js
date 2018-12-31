const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const path = require('path');

//模版引擎
app.use(views(path.join(__dirname, './views/'), {
    extension: 'ejs'
}));

app.use(async(ctx) => {
    let title = 'hello rao';
    await ctx.render('index', { title })
});

app.listen('3000', () => {
    console.log('启动了服务3000')
})