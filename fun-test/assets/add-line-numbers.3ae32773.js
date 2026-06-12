import{p as u}from"./pad-left.1bdbcb38.js";var v=u,m=d;function d(a,n,r){n=typeof n=="number"?n:1,r=r||": ";var e=a.split(/\r?\n/),t=String(e.length+n-1).length;return e.map(function(p,o){var i=o+n,f=String(i).length,g=v(i,t-f);return g+r+p}).join(`
`)}export{m as a};
