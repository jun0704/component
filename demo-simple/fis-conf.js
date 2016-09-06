fis.set('namespace', 'test');

fis.match('*.{js,css,png}', {
  useHash: false
});

fis.match('::package', {
  spriter: fis.plugin('csssprites')
}).match('**/static/*.js', {
	parser: fis.plugin('babel2'),
	// isMod: true
})

fis.match('**/static/*.js', {
  // 要支持 es6 和 jsx， typescript 也能胜任，最主要是编译速度要快很多。
  parser: fis.plugin('typescript'),
  rExt: '.js'
})

fis.match('*.less',{
  parser: fis.plugin('less'),
  rExt: '.css'
})
fis.match('*',{
	release: '/output/$0',
	useHash: false
})
// fis.match('*.js',{
// 	release: '/dist/js/$0',
// 	useHash: false
// })

fis.media('local').match('*', {
    // optimizer: fis.plugin('uglify-js')
});