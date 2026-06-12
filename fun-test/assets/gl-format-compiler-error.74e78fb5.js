import{s as g}from"./sprintf-js.dbb75685.js";import{l as N}from"./gl-constants.230a4828.js";import{g as E}from"./glsl-shader-name.22e2a07c.js";import{a as w}from"./add-line-numbers.3ae32773.js";var t=g.sprintf,C=N,F=E,b=w,_=c;function c(e,m,i){var u=F(m)||"of unknown name (see npm glsl-shader-name)",l="unknown type";i!==void 0&&(l=i===C.FRAGMENT_SHADER?"fragment":"vertex");for(var s=t(`Error compiling %s shader %s:
`,l,u),d=t("%s%s",s,e),p=e.split(`
`),a={},r=0;r<p.length;r++){var n=p[r];if(!(n===""||n==="\0")){var f=parseInt(n.split(":")[2]);if(isNaN(f))throw new Error(t("Could not parse error: %s",n));a[f]=n}}for(var v=b(m).split(`
`),r=0;r<v.length;r++)if(!(!a[r+3]&&!a[r+2]&&!a[r+1])){var h=v[r];if(s+=h+`
`,a[r+1]){var o=a[r+1];o=o.substr(o.split(":",3).join(":").length+1).trim(),s+=t(`^^^ %s

`,o)}}return{long:s.trim(),short:d.trim()}}export{_ as g};
