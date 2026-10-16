(function () {
  'use strict';
  const text = {
    ro:{subtitle:'Un octet de date, mai multe interpretări și un bit de paritate.',language:'Limba',guide:'Ghidul de lucru',tests:'Teste locale',start:'Pornire',inputTitle:'1. Introduceți valoarea octetului',decimal:'Număr întreg fără semn, în baza zece: 0…255',parityMode:'Paritate',even:'Pară · varianta A',odd:'Impară · varianta B',inputHelp:'Exemple: 0, 5, 127, 128, 255. Sunt acceptate spațiile de la începutul și sfârșitul intrării și zerourile de la începutul numărului. Valorile fracționare nu sunt acceptate.',resultsTitle:'2. Citiți rezultatele',unsigned:'Fără semn',binary:'Reprezentare binară · exact opt biți',hex:'Reprezentare hexazecimală · două caractere',signed:'Interpretare cu semn · complement față de doi',ones:'Numărul biților cu valoarea 1 din date',parityBit:'Bitul de paritate',word:'Date și bit de paritate · nouă biți',knownBug:'În proiectul inițial, conversia hexazecimală se completează în S05, iar calculul bitului de paritate, în S07. Interpretarea cu semn conține o eroare introdusă în scop didactic, pe care o investigați în S06. Verificați rezultatele afișate; simpla lor afișare nu garantează corectitudinea.',nineBits:'Cei opt biți de date se păstrează, iar bitul de paritate se adaugă la dreapta lor. Șirul transmis conține nouă biți. Verificarea simplă a parității nu localizează și nu corectează eroarea.',nextTitle:'3. Verificați înainte de publicare',nextText:'Deschideți tests.html și selectați etapa curentă. Salvarea păstrează modificările în fișier; commitul înregistrează o versiune în repository-ul local; comanda push trimite commiturile în repository-ul de pe GitHub. După modificarea și salvarea fișierului lab.js, reîncărcați pagina.',state:'Valorile introduse și limba selectată nu sunt salvate. Consemnați verificările și informațiile necesare reluării lucrului în evidence.md.',todo:'De completat',fatal:'Fișierul lab.js nu s-a încărcat. Verificați numele fișierului și eventualele erori de sintaxă, apoi reîncărcați pagina.',INVALID_BYTE_INPUT:'Introduceți un număr întreg în baza zece, cuprins între 0 și 255.',BYTE_RANGE:'Valoarea trebuie să fie cuprinsă între 0 și 255 inclusiv.',INVALID_BYTE_NUMBER:'Argumentul funcției trebuie să fie un număr întreg cuprins între 0 și 255.',INVALID_PARITY_MODE:'Selectați paritate pară sau impară.',unexpected:'Eroare la executarea funcției: '},
    en:{subtitle:'One data byte, several interpretations and one check bit.',language:'Language',guide:'Student guide',tests:'Local tests',start:'Start',inputTitle:'1. Enter the byte value',decimal:'Unsigned decimal integer: 0…255',parityMode:'Parity',even:'Even · variant A',odd:'Odd · variant B',inputHelp:'Examples: 0, 5, 127, 128, 255. Leading and trailing spaces and leading zeroes are accepted; fractions are not.',resultsTitle:'2. Read the results',unsigned:'Unsigned',binary:'Binary · exactly eight bits',hex:'Hexadecimal · two characters',signed:'Signed · two’s complement',ones:'Number of 1 bits in the data',parityBit:'Separate parity bit',word:'Data + parity · nine bits',knownBug:'Initial state: hexadecimal and parity are completed in S05/S07. Signed interpretation contains a declared teaching defect, investigated in S06. A displayed result is not automatically correct.',nineBits:'We keep eight data bits and append the parity bit on the right. The transmitted word has nine bits. Simple parity neither locates nor corrects an error.',nextTitle:'3. Check before publishing',nextText:'Open tests.html and choose the current stage. Saving changes the file; a commit records the local version; pushing publishes commits. Reload the page after changing lab.js.',state:'Inputs and language are not saved. Record evidence and the resumption card in evidence.md.',todo:'Not implemented yet',fatal:'lab.js did not load. Check the filename and syntax errors, then reload the page.',INVALID_BYTE_INPUT:'Enter a decimal integer between 0 and 255 only.',BYTE_RANGE:'The value must be between 0 and 255 inclusive.',INVALID_BYTE_NUMBER:'The function must receive an integer number between 0 and 255.',INVALID_PARITY_MODE:'Choose even or odd parity.',unexpected:'Function error: '}
  };
  const langSelect=document.getElementById('language');
  const requested=new URLSearchParams(location.search).get('lang');
  langSelect.value=requested==='en'?'en':'ro';
  function lang(){return langSelect.value==='en'?'en':'ro';}
  function update(){
    const t=text[lang()];
    document.documentElement.lang=lang()==='en'?'en-GB':'ro';
    document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=t[el.dataset.i18n];});
    document.getElementById('guide-link').href='../GUIDES/'+(lang()==='en'?'EN_GB':'RO')+'/index.html';
    document.getElementById('tests-link').href='tests.html?lang='+lang();
    const fatal=document.getElementById('fatal');
    if(!globalThis.ByteLab){fatal.hidden=false;fatal.textContent=t.fatal;return;}
    fatal.hidden=true;
    const error=document.getElementById('error');
    const input=document.getElementById('byte');
    try{
      const u=ByteLab.parseByte(input.value);
      const binary=ByteLab.toBinary8(u),p=ByteLab.parityBit8(u,document.getElementById('mode').value);
      const values={'unsigned':u,'binary':binary,'hex':ByteLab.toHex8(u),'signed':ByteLab.asSigned8(u),'ones':ByteLab.countOnes8(u),'parity-bit':p,'word':p===null?null:binary+p};
      error.textContent='';input.removeAttribute('aria-invalid');
      Object.entries(values).forEach(([id,val])=>{const out=document.getElementById(id);out.textContent=val===null?t.todo:String(val);out.classList.toggle('pending',val===null);});
    }catch(e){error.textContent=t[e.message]||t.unexpected+e.message;input.setAttribute('aria-invalid','true');document.querySelectorAll('output').forEach(out=>{out.textContent='—';out.classList.remove('pending');});}
  }
  langSelect.addEventListener('change',update);
  document.getElementById('byte').addEventListener('input',update);
  document.getElementById('mode').addEventListener('change',update);
  update();
})();
