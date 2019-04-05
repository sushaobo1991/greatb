const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  global.console.log('index2')
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
router.get('/testAsync',async (ctx)=>{
  globle.console.log('start',new Date().getTime())
})
module.exports = router
