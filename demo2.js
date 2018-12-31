const Koa = require('koa');
const app = new Koa();

app.use(async(ctx) => {
    if (ctx.url === '/' && ctx.method === 'GET') {
        //显示表单页面
        let html = `
       <h1>Koa2 request post demo</h1>
       <form method="POST"  action="/">
        <p>userName</p>
        <input name="userName" /> <br/>
        <p>age</p>
        <input name="age" /> <br/>
        <p>webSite</p>
        <input name='webSite' /><br/>
        <button type="submit">submit</button>
      </form>
    `;
        ctx.body = html;
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        //  ctx.body = '接收到请求';
        let postData = await parsePostData(ctx);
        ctx.body = postData;
    } else {
        ctx.body = '<h1>404!</h1>'
    }

});

function parsePostData(ctx) {
    return new Promise((resolve, reject) => {
        try {
            let postdata = "";
            ctx.req.on('data', (data) => {
                postdata += data;
            })
            ctx.req.addListener('end', () => {
                let parseSetData = parseQuery(postdata);
                resolve(parseSetData);
            })
        } catch (error) {
            reject(error);
        }
    })
}

//转化字符串为json对象
function parseQuery(queryStr) {
    let queryData = {};
    let queryStrList = queryStr.split('&');
    console.log(queryStrList);
    for (let [index, queryStr] of queryStrList.entries()) {
        let itemList = queryStr.split('=');
        console.log(itemList);
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData;
}


app.listen('3000', () => {
    console.log('监听3000端口')
})