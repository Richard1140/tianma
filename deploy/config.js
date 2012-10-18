/**
 * Default config for Alibaba-B2B-ICBU-F2E develop environment.
 * Auto-generated by Tianma v<%=version%>
 */

var tianma = require('tianma'),
	pipe = tianma.pipe;

tianma
	.init({ silent: <%=silent%>, log: <%=log%> })
	.createHost({ port: 80, portssl: 443, key: 'key/unicorn.key', cert: 'key/unicorn.cer' })
		.mount('/', [ // static & unicorn service
			pipe.combo(),
			pipe.static({ root: './htdocs' }),
			pipe.proxy({
				'http://110.75.216.150/$1': /(?:(?:style|img)\.(?:alibaba|aliexpress)\.com|aliimg\.com)\/(.*)/
			}),
			pipe.beautify()
		])
		.start();
