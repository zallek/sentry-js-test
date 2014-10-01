"use strict";

Raven.config('https://6865f2f42d6a4beaa9cb6d2a2abeb186@app.getsentry.com/31064', {
  	tags: {
  		version: 'beta'
  	},
    //whitelistUrls: ['example.com/scripts/'],
    //ignoreUrls: [/graph\.facebook\.com/, 'http://example.com/script2.js']
    //includePaths: [/https?:\/\/getsentry\.com/, /https?:\/\/cdn\.getsentry\.com/]
    //ignoreErrors: ['fb_xd_fragment']
}).install();

/*Raven.setUserContext({
    email: 'matt@example.com',
    id: '123'
});*/