const _0x26788a=_0x41ab;(function(_0x5cc6fc,_0x50a030){const _0x5b8b79=_0x41ab,_0x18a1be=_0x5cc6fc();while(!![]){try{const _0x2a1ff5=parseInt(_0x5b8b79(0x10c))/0x1*(parseInt(_0x5b8b79(0x139))/0x2)+-parseInt(_0x5b8b79(0x14c))/0x3*(-parseInt(_0x5b8b79(0x118))/0x4)+parseInt(_0x5b8b79(0x140))/0x5*(-parseInt(_0x5b8b79(0xf3))/0x6)+parseInt(_0x5b8b79(0x111))/0x7*(parseInt(_0x5b8b79(0x10e))/0x8)+-parseInt(_0x5b8b79(0x121))/0x9+-parseInt(_0x5b8b79(0x157))/0xa+parseInt(_0x5b8b79(0x155))/0xb;if(_0x2a1ff5===_0x50a030)break;else _0x18a1be['push'](_0x18a1be['shift']());}catch(_0x44ec8b){_0x18a1be['push'](_0x18a1be['shift']());}}}(_0x45b8,0x224db),require(_0x26788a(0x122)));const {useSingleFileAuthState,makeInMemoryStore,makeWALegacySocket,DisconnectReason}=require(_0x26788a(0x16e)),WebSocket=require('ws'),path=require(_0x26788a(0xf4)),pino=require(_0x26788a(0x113)),fs=require('fs'),yargs=require(_0x26788a(0xfe)),cp=require(_0x26788a(0x145)),_=require(_0x26788a(0x158)),syntaxerror=require(_0x26788a(0x120)),os=require('os'),moment=require(_0x26788a(0x144)),time=moment['tz'](_0x26788a(0x10a))['format']('HH:mm:ss'),{color}=require(_0x26788a(0x171));let simple=require('./lib/simple');var low;function _0x45b8(){const _0x12c95b=['-amin','--version','baileys','error\x20require\x20plugin\x20\x27','connect','aqua','message.delete','-frames:v','handler','Asia/Jakarta','then','2bmprMq','Stickers\x20may\x20not\x20work\x20without\x20imagemagick\x20if\x20libwebp\x20on\x20ffmpeg\x20doesnt\x20isntalled\x20(pkg\x20install\x20imagemagick)','48NPfzrz','welcome','prefix','244279xMQhom','convert','pino','find','silent','exitProcess','./lib/mongoDB','4nOsyDX','Connecting...','readdirSync','tmpdir','CONNECTING','stringify','white','freeze','syntax-error','1772739gaJtIJ','./config','requiring\x20new\x20plugin\x20\x27','map','messages.upsert','syntax\x20error\x20while\x20loading\x20\x27','[STATUS]','./handler','./lib/lowdb','Selamat\x20tinggal\x20@user\x20👋','logger','â€ŽxzXZ/i!#$%+Â£Â¢â‚¬Â¥^Â°=Â¶âˆ†Ã—Ã·Ï€âˆšâœ“Â©Â®:;?&.\x5c-','filter','participantsUpdate','close','isInit','receivedPendingNotifications','credsUpdate','write','read','onParticipantsUpdate','push','Quick\x20Test\x20Done','bind','219062PUaCyh','Successfully\x20connected\x20by\x20SansLine','sendMessage','warn','session','chain','PORT','238130lnTnuL','connection.update','autocleartmp','error','moment-timezone','child_process','join','replace','fromEntries','sdemote','\x5c$&','ffmpeg','152169whmqoU','-delete','.data.json','mtimeMs','-hide_banner','magick','child','output','info','2074831wTrzky','existsSync','1874320cyBTwz','lodash','statusCode','watch','all','sort','Please\x20install\x20ffmpeg\x20for\x20sending\x20videos\x20(pkg\x20install\x20ffmpeg)','test','cache','server','ffmpegWebp','hostname','localeCompare','group-participants.update','slice','./tmp','log','forEach','catch','READ','Stickers\x20may\x20not\x20animated\x20without\x20libwebp\x20on\x20ffmpeg\x20(--enable-ibwebp\x20while\x20compiling\x20ffmpeg)','spawn','tmp','@adiwajshing/baileys','makeWASocket','unlinkSync','./lib/color','isFile','6281212035575@s.whatsapp.net','connectionUpdate','data','plugins','-filter_complex','18UXQkae','path','lowdb','database.json','re\x20-\x20require\x20plugin\x20\x27','@user\x20sekarang\x20bukan\x20admin!','off','Hai,\x20kak\x20@user\x20👋\x0aSelamat\x20datang\x20di\x20grup\x20@subject\x20😅\x0aJangan\x20lupa\x20intro\x20kak\x20😅\x0a\x0a*Nama:*\x0a*Umur:*\x0a*Askot:*\x0a\x0a*Deskripsi\x20Grup:*\x0a\x0a@desc\x0a\x0aMade\x20by\x20❤️','onDelete','spromote','env','yargs/yargs','entries','webp'];_0x45b8=function(){return _0x12c95b;};return _0x45b8();}try{low=require(_0x26788a(0xf5));}catch(_0x4c4aa6){low=require(_0x26788a(0x129));}const {Low,JSONFile}=low,mongoDB=require(_0x26788a(0x117));API=(_0x332a44,_0x54060d='/',_0x57fc59={},_0x55b6bd)=>(_0x332a44 in APIs?APIs[_0x332a44]:_0x332a44)+_0x54060d+(_0x57fc59||_0x55b6bd?'?'+new URLSearchParams(Object[_0x26788a(0xff)]({..._0x57fc59,..._0x55b6bd?{[_0x55b6bd]:APIKeys[_0x332a44 in APIs?APIs[_0x332a44]:_0x332a44]}:{}})):''),timestamp={'start':new Date()};const PORT=process[_0x26788a(0xfd)][_0x26788a(0x13f)]||0xbb8;opts=new Object(yargs(process['argv'][_0x26788a(0x165)](0x2))[_0x26788a(0x116)](![])['parse']()),prefix=new RegExp('^['+(opts[_0x26788a(0x110)]||_0x26788a(0x12c))[_0x26788a(0x147)](/[|\\{}()[\]^$+*?.\-\^]/g,_0x26788a(0x14a))+']'),db=new Low(/https?:\/\//['test'](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb/i[_0x26788a(0x15e)](opts['db'])?new mongoDB(opts['db']):new JSONFile((opts['_'][0x0]?opts['_'][0x0]+'_':'')+_0x26788a(0xf6))),DATABASE=db,loadDatabase=async function loadDatabase(){const _0x330c83=_0x26788a;if(db['READ'])return new Promise(_0x4cbf26=>setInterval(function(){const _0x4e04e1=_0x41ab;!db[_0x4e04e1(0x16a)]?(clearInterval(this),_0x4cbf26(db[_0x4e04e1(0x175)]==null?loadDatabase():db[_0x4e04e1(0x175)])):null;},0x1*0x3e8));if(db[_0x330c83(0x175)]!==null)return;db[_0x330c83(0x16a)]=!![],await db[_0x330c83(0x134)](),db[_0x330c83(0x16a)]=![],db[_0x330c83(0x175)]={'users':{},'chats':{},'stats':{},'msgs':{},'sticker':{},'settings':{},...db[_0x330c83(0x175)]||{}},db[_0x330c83(0x13e)]=_['chain'](db[_0x330c83(0x175)]);},loadDatabase(),authFile=(opts['_'][0x0]||_0x26788a(0x13d))+_0x26788a(0x14e);const {state,saveState}=useSingleFileAuthState(authFile),logger=pino({'transport':{'target':'pino-pretty','options':{'colorize':!![],'levelFirst':!![],'ignore':_0x26788a(0x162),'translateTime':!![]}}})[_0x26788a(0x152)]({'class':_0x26788a(0x103)}),connectionOptions={'version':[0x2,0x8b4,0x8],'printQRInTerminal':!![],'auth':state,'logger':pino({'level':_0x26788a(0x115)})};conn=simple[_0x26788a(0x16f)](connectionOptions),conn[_0x26788a(0x130)]=![];if(!opts[_0x26788a(0x15e)]){if(db)setInterval(async()=>{const _0x52ee07=_0x26788a;if(global['db'][_0x52ee07(0x175)])await db[_0x52ee07(0x133)]();if(opts[_0x52ee07(0x142)]&&(support||{})[_0x52ee07(0x114)])tmp=[os[_0x52ee07(0x11b)](),_0x52ee07(0x16d)],tmp[_0x52ee07(0x168)](_0x1e4747=>cp['spawn'](_0x52ee07(0x114),[_0x1e4747,_0x52ee07(0x101),'3','-type','f',_0x52ee07(0x14d)]));},0x1e*0x3e8);}if(opts[_0x26788a(0x160)])require('./server')(conn,PORT);function clearTmp(){const _0x3479a7=_0x26788a,_0x37a36a=[os[_0x3479a7(0x11b)](),path[_0x3479a7(0x146)](__dirname,_0x3479a7(0x166))],_0x5e46b8=[];_0x37a36a['forEach'](_0x27aa90=>fs[_0x3479a7(0x11a)](_0x27aa90)[_0x3479a7(0x168)](_0x44c558=>_0x5e46b8[_0x3479a7(0x136)](path['join'](_0x27aa90,_0x44c558)))),_0x5e46b8[_0x3479a7(0x124)](_0x18fb2a=>(stats=fs['statSync'](_0x18fb2a),stats[_0x3479a7(0x172)]()&&Date['now']()-stats[_0x3479a7(0x14f)]>=0x3e8*0x3c*0x3?fs[_0x3479a7(0x170)](_0x18fb2a):null));}async function connectionUpdate(_0x2e4b07){const _0x67989d=_0x26788a,{connection:_0x1bb691,lastDisconnect:_0x1ae48d,isNewLogin:_0x2f5093}=_0x2e4b07;if(_0x2f5093)conn['isInit']=!![];_0x1ae48d&&_0x1ae48d[_0x67989d(0x143)]&&_0x1ae48d[_0x67989d(0x143)][_0x67989d(0x153)]&&_0x1ae48d[_0x67989d(0x143)]['output'][_0x67989d(0x159)]!==DisconnectReason['loggedOut']&&conn['ws']['readyState']!==WebSocket[_0x67989d(0x11c)]&&(console[_0x67989d(0x167)](reloadHandler(!![])),timestamp[_0x67989d(0x105)]=new Date());if(db[_0x67989d(0x175)]==null)await loadDatabase();console[_0x67989d(0x167)](JSON[_0x67989d(0x11d)](_0x2e4b07,null,0x4));if(_0x2e4b07[_0x67989d(0x131)])conn[_0x67989d(0x13b)](_0x67989d(0x173),{'text':_0x67989d(0x13a)});}process['on']('uncaughtException',console[_0x26788a(0x143)]);function _0x41ab(_0x2172be,_0x1e28b3){const _0x45b869=_0x45b8();return _0x41ab=function(_0x41abb6,_0x687f04){_0x41abb6=_0x41abb6-0xf1;let _0x3b893a=_0x45b869[_0x41abb6];return _0x3b893a;},_0x41ab(_0x2172be,_0x1e28b3);}let isInit=!![],handler=require('./handler');reloadHandler=function(_0x35d3b2){const _0x4e5cb5=_0x26788a;let _0x53cd2d=require(_0x4e5cb5(0x128));if(Object['keys'](_0x53cd2d||{})['length'])handler=_0x53cd2d;if(_0x35d3b2){try{conn['ws'][_0x4e5cb5(0x12f)]();}catch{}conn={...conn,...simple[_0x4e5cb5(0x16f)](connectionOptions)};}return!isInit&&(conn['ev']['off'](_0x4e5cb5(0x125),conn[_0x4e5cb5(0x109)]),conn['ev'][_0x4e5cb5(0xf9)](_0x4e5cb5(0x164),conn['onParticipantsUpdate']),conn['ev'][_0x4e5cb5(0xf9)](_0x4e5cb5(0x107),conn[_0x4e5cb5(0xfb)]),conn['ev'][_0x4e5cb5(0xf9)](_0x4e5cb5(0x141),conn[_0x4e5cb5(0x174)]),conn['ev'][_0x4e5cb5(0xf9)]('creds.update',conn['credsUpdate'])),conn[_0x4e5cb5(0x10f)]=_0x4e5cb5(0xfa),conn['bye']=_0x4e5cb5(0x12a),conn[_0x4e5cb5(0xfc)]='@user\x20sekarang\x20admin!',conn[_0x4e5cb5(0x149)]=_0x4e5cb5(0xf8),conn[_0x4e5cb5(0x109)]=handler[_0x4e5cb5(0x109)][_0x4e5cb5(0x138)](conn),conn[_0x4e5cb5(0x135)]=handler[_0x4e5cb5(0x12e)][_0x4e5cb5(0x138)](conn),conn[_0x4e5cb5(0xfb)]=handler['delete'][_0x4e5cb5(0x138)](conn),conn[_0x4e5cb5(0x174)]=connectionUpdate[_0x4e5cb5(0x138)](conn),conn['credsUpdate']=saveState[_0x4e5cb5(0x138)](conn),conn['ev']['on'](_0x4e5cb5(0x125),conn['handler']),conn['ev']['on'](_0x4e5cb5(0x164),conn[_0x4e5cb5(0x135)]),conn['ev']['on'](_0x4e5cb5(0x107),conn[_0x4e5cb5(0xfb)]),conn['ev']['on']('connection.update',conn[_0x4e5cb5(0x174)]),conn['ev']['on']('creds.update',conn[_0x4e5cb5(0x132)]),isInit=![],!![];};let pluginFolder=path['join'](__dirname,_0x26788a(0xf1)),pluginFilter=_0xb75023=>/\.js$/['test'](_0xb75023);plugins={};for(let filename of fs[_0x26788a(0x11a)](pluginFolder)[_0x26788a(0x12d)](pluginFilter)){try{plugins[filename]=require(path[_0x26788a(0x146)](pluginFolder,filename));}catch(_0x15dc7){conn['logger'][_0x26788a(0x143)](_0x15dc7),delete plugins[filename];}}console[_0x26788a(0x167)](Object['keys'](plugins)),reload=(_0x1d0fed,_0x234c19)=>{const _0xfcbc2a=_0x26788a;if(pluginFilter(_0x234c19)){let _0x4a469a=path['join'](pluginFolder,_0x234c19);if(_0x4a469a in require['cache']){delete require[_0xfcbc2a(0x15f)][_0x4a469a];if(fs[_0xfcbc2a(0x156)](_0x4a469a))conn[_0xfcbc2a(0x12b)][_0xfcbc2a(0x154)](_0xfcbc2a(0xf7)+_0x234c19+'\x27');else return conn[_0xfcbc2a(0x12b)][_0xfcbc2a(0x13c)]('deleted\x20plugin\x20\x27'+_0x234c19+'\x27'),delete plugins[_0x234c19];}else conn['logger'][_0xfcbc2a(0x154)](_0xfcbc2a(0x123)+_0x234c19+'\x27');let _0xb71c7b=syntaxerror(fs['readFileSync'](_0x4a469a),_0x234c19);if(_0xb71c7b)conn[_0xfcbc2a(0x12b)]['error'](_0xfcbc2a(0x126)+_0x234c19+'\x27\x0a'+_0xb71c7b);else try{plugins[_0x234c19]=require(_0x4a469a);}catch(_0x54c02f){conn[_0xfcbc2a(0x12b)]['error'](_0xfcbc2a(0x104)+_0x234c19+'\x0a'+_0x54c02f+'\x27');}finally{plugins=Object[_0xfcbc2a(0x148)](Object[_0xfcbc2a(0xff)](plugins)[_0xfcbc2a(0x15c)](([_0x49b3e2],[_0x9d00c3])=>_0x49b3e2[_0xfcbc2a(0x163)](_0x9d00c3)));}}},Object[_0x26788a(0x11f)](reload),fs[_0x26788a(0x15a)](path[_0x26788a(0x146)](__dirname,_0x26788a(0xf1)),reload),reloadHandler();async function _quickTest(){const _0xae6ce1=_0x26788a;let _0x46409a=await Promise[_0xae6ce1(0x15b)]([cp[_0xae6ce1(0x16c)](_0xae6ce1(0x14b)),cp[_0xae6ce1(0x16c)]('ffprobe'),cp[_0xae6ce1(0x16c)]('ffmpeg',[_0xae6ce1(0x150),'-loglevel',_0xae6ce1(0x143),_0xae6ce1(0xf2),'color',_0xae6ce1(0x108),'1','-f',_0xae6ce1(0x100),'-']),cp['spawn'](_0xae6ce1(0x112)),cp[_0xae6ce1(0x16c)](_0xae6ce1(0x151)),cp[_0xae6ce1(0x16c)]('gm'),cp[_0xae6ce1(0x16c)]('find',[_0xae6ce1(0x102)])][_0xae6ce1(0x124)](_0x21aafe=>{return Promise['race']([new Promise(_0xe3f6f1=>{_0x21aafe['on']('close',_0x19eb89=>{_0xe3f6f1(_0x19eb89!==0x7f);});}),new Promise(_0x3afce6=>{const _0x520845=_0x41ab;_0x21aafe['on'](_0x520845(0x143),_0x3608cb=>_0x3afce6(![]));})]);})),[_0x209cda,_0x53f492,_0x1ecca9,_0x4abe2f,_0x387907,_0x1b881b,_0x38e5be]=_0x46409a;console[_0xae6ce1(0x167)](_0x46409a);let _0x54b875=support={'ffmpeg':_0x209cda,'ffprobe':_0x53f492,'ffmpegWebp':_0x1ecca9,'convert':_0x4abe2f,'magick':_0x387907,'gm':_0x1b881b,'find':_0x38e5be};Object[_0xae6ce1(0x11f)](support);if(!_0x54b875[_0xae6ce1(0x14b)])conn['logger'][_0xae6ce1(0x13c)](_0xae6ce1(0x15d));if(_0x54b875[_0xae6ce1(0x14b)]&&!_0x54b875[_0xae6ce1(0x161)])conn[_0xae6ce1(0x12b)][_0xae6ce1(0x13c)](_0xae6ce1(0x16b));if(!_0x54b875[_0xae6ce1(0x112)]&&!_0x54b875[_0xae6ce1(0x151)]&&!_0x54b875['gm'])conn[_0xae6ce1(0x12b)][_0xae6ce1(0x13c)](_0xae6ce1(0x10d));}_quickTest()[_0x26788a(0x10b)](()=>conn[_0x26788a(0x12b)][_0x26788a(0x154)](_0x26788a(0x137)))[_0x26788a(0x169)](console[_0x26788a(0x143)]),console['log'](color(time,_0x26788a(0x11e)),color(_0x26788a(0x127),'green'),color(_0x26788a(0x119),_0x26788a(0x106)));
