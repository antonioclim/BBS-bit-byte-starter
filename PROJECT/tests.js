(function(global){
  'use strict';
  const labels={
    ro:{parse:'Intrare validă',invalid:'Respinge intrarea',binary:'Binar',ones:'Număr biţi 1',hex:'Hexazecimal',signed:'Interpretare cu semn',parity:'Bit de paritate',binaryAll:'Binar: toate cele 256 de valori',hexAll:'Hexazecimal: toate cele 256 de valori',signedAll:'Cu semn: toate cele 256 de valori',parityAll:'Paritate: toate cele 256 de valori',mode:'Respinge un mod invalid',number:'Funcţiile resping argumentele numerice invalide',all:'256/256 corecte',pending:'Neimplementat',custom:'Test propriu',customMissing:'custom-tests.js nu s-a încărcat',customInvalid:'Structura testului propriu este invalidă'},
    en:{parse:'Valid input',invalid:'Reject input',binary:'Binary',ones:'Number of 1 bits',hex:'Hexadecimal',signed:'Signed interpretation',parity:'Parity bit',binaryAll:'Binary: all 256 values',hexAll:'Hexadecimal: all 256 values',signedAll:'Signed: all 256 values',parityAll:'Parity: all 256 values',mode:'Reject invalid mode',number:'Functions reject invalid numeric arguments',all:'256/256 correct',pending:'Not implemented',custom:'Custom test',customMissing:'custom-tests.js did not load',customInvalid:'Invalid custom test structure'}
  };
  function run(stage,variant,language){
    if(!['baseline','S05','S06','S07'].includes(stage))throw new Error('INVALID_STAGE');
    if(!['even','odd'].includes(variant))throw new Error('INVALID_VARIANT');
    const t=labels[language==='en'?'en':'ro'],out=[],L=global.ByteLab;
    if(!L)throw new Error('LAB_NOT_LOADED');
    function check(label,expected,fn){
      try{const actual=fn();out.push({label,expected,actual:actual===null?t.pending:actual,status:actual===null?'pending':Object.is(actual,expected)?'pass':'fail'});}
      catch(e){out.push({label,expected,actual:'ERROR: '+e.message,status:'fail'});}
    }
    function rejects(fn){try{fn();return 'ACCEPTED';}catch(_){return 'ERROR';}}
    function countOracle(n){let count=0;for(let i=0;i<8;i++)count+=(n>>i)&1;return count;}
    function binaryOracle(n){return Array.from({length:8},(_,i)=>String((n>>(7-i))&1)).join('');}
    function hexOracle(n){const digits='0123456789ABCDEF';return digits[Math.floor(n/16)]+digits[n%16];}
    function exhaustive(label,fn,expected){
      let ok=0,pending=0,first='';
      for(let n=0;n<256;n++){
        try{const actual=fn(n);if(actual===null){pending++;continue;}if(Object.is(actual,expected(n)))ok++;else if(!first)first=n+': '+String(actual)+' / '+String(expected(n));}
        catch(e){if(!first)first=n+': ERROR '+e.message;}
      }
      out.push({label,expected:t.all,actual:ok===256?t.all:pending===256?t.pending:ok+'/256; '+first,status:ok===256?'pass':pending===256?'pending':'fail'});
    }
    for(const [input,expected]of [[0,0],['005',5],[' 128 ',128],[255,255]])check(t.parse+' '+JSON.stringify(input),expected,()=>L.parseByte(input));
    for(const input of ['', ' ', '-1', '256', '1.5', '15x', '0xFF','2e2','+5'])check(t.invalid+' '+JSON.stringify(input),'ERROR',()=>rejects(()=>L.parseByte(input)));
    for(const n of [0,5,127,128,255])check(t.binary+' '+n,binaryOracle(n),()=>L.toBinary8(n));
    exhaustive(t.binaryAll,L.toBinary8,binaryOracle);
    for(const n of [0,3,7,128,255])check(t.ones+' '+n,countOracle(n),()=>L.countOnes8(n));
    const numericFunctions=[L.toBinary8,L.toHex8,L.asSigned8,L.countOnes8,u=>L.parityBit8(u,variant)];
    check(t.number,'ERROR',()=>numericFunctions.every(fn=>[-1,256,1.5,'5',NaN,Infinity].every(n=>rejects(()=>fn(n))==='ERROR'))?'ERROR':'ACCEPTED');
    if(stage!=='baseline'){
      for(const n of [0,5,128,255])check(t.hex+' '+n,hexOracle(n),()=>L.toHex8(n));
      exhaustive(t.hexAll,L.toHex8,hexOracle);
    }
    if(stage==='S06'||stage==='S07'){
      for(const n of [127,128,129,255])check(t.signed+' '+n,n<128?n:n-256,()=>L.asSigned8(n));
      exhaustive(t.signedAll,L.asSigned8,n=>n<128?n:n-256);
    }
    if(stage==='S07'){
      for(const n of [0,3,5,7,128,255])check(t.parity+' '+variant+' '+n,variant==='even'?countOracle(n)%2:1-countOracle(n)%2,()=>L.parityBit8(n,variant));
      exhaustive(t.parityAll,n=>L.parityBit8(n,variant),n=>variant==='even'?countOracle(n)%2:1-countOracle(n)%2);
      check(t.mode,'ERROR',()=>rejects(()=>L.parityBit8(3,'invalid')));
    }
    if(!Array.isArray(global.CustomTests))out.push({label:t.customMissing,expected:'CustomTests array',actual:'Missing / invalid',status:'fail'});
    else global.CustomTests.forEach((test,i)=>{
      const valid=test&&typeof test==='object'&&typeof test.label==='string'&&typeof test.operation==='string'&&Object.prototype.hasOwnProperty.call(test,'input')&&Object.prototype.hasOwnProperty.call(test,'expected');
      if(!valid){out.push({label:t.custom+' #'+(i+1),expected:'label/input/operation/expected',actual:t.customInvalid,status:'fail'});return;}
      check(t.custom+': '+test.label,test.expected,()=>{
        if(test.operation==='parse-error')return rejects(()=>L.parseByte(test.input));
        const u=L.parseByte(test.input);
        switch(test.operation){case 'binary':return L.toBinary8(u);case 'hex':return L.toHex8(u);case 'signed':return L.asSigned8(u);case 'parity-even':return L.parityBit8(u,'even');case 'parity-odd':return L.parityBit8(u,'odd');default:throw new Error('UNKNOWN_OPERATION');}
      });
    });
    return out;
  }
  global.BTITests=Object.freeze({run});
})(typeof globalThis!=='undefined'?globalThis:window);
