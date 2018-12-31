const Koa = require('koa');
const app = new Koa();


app.use(async(ctx) => {
    if (ctx.url === '/index') {
        ctx.cookies.set(
            'myname', 'rao', {
                domain: '127.0.0.1',
                // path: '/',
                maxPage: 1000 * 60 * 24,
                expires: new Date('2019-01-01'),
                httpOnly: false,
                overwrite: false
            });
        ctx.body = 'cookies'
    } else {
        if (ctx.cookies.get('myname')) {
            ctx.body = ctx.cookies.get('myname')
        }
        ctx.body = 'cookie is none';
    }
})

app.listen('3001', () => {
    console.log('监听3001')
})