(function(){
  'use strict';
  const en=document.documentElement.lang.toLowerCase().startsWith('en');
  document.querySelectorAll('[data-copy-target]').forEach(button=>{
    const status=document.createElement('span');status.className='copy-status';status.setAttribute('role','status');button.insertAdjacentElement('afterend',status);
    button.addEventListener('click',async()=>{
      const target=document.getElementById(button.dataset.copyTarget);
      if(!target){status.textContent=en?'Copy target not found.':'Textul de copiat nu a fost găsit.';return;}
      const destination=button.dataset.copyDestination||target.dataset.copyDestination;
      const where=destination?(en?' Paste into: '+destination+'.':' Lipiți textul '+destination+'.'):'';
      try{if(!navigator.clipboard?.writeText)throw new Error('No clipboard');await navigator.clipboard.writeText(target.textContent);status.textContent=(en?'Copied.':'Textul a fost copiat.')+where;}
      catch(_){const range=document.createRange();range.selectNodeContents(target);const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);status.textContent=(en?'Text selected. Use Ctrl+C or Cmd+C.':'Textul a fost selectat. Folosiți Ctrl+C sau Cmd+C pentru a-l copia.')+where;}
    });
  });
  document.querySelectorAll('[data-print]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('details').forEach(el=>{el.open=true;});window.print();}));
  document.querySelectorAll('[data-expand]').forEach(button=>button.addEventListener('click',()=>{const details=[...document.querySelectorAll('details')];const open=details.some(el=>!el.open);details.forEach(el=>{el.open=open;});button.textContent=open?(en?'Close all examples':'Ascundeți explicațiile'):(en?'Open all examples':'Afișați explicațiile');}));
  // Checkboxes are a temporary reading aid. Work is recorded in evidence.md.
  // Bifarea ajută la urmărirea lecturii în această sesiune. Progresul lucrului se consemnează în evidence.md.
  document.querySelectorAll('[data-checkpoint]').forEach(input=>input.addEventListener('change',()=>{const item=input.closest('li');if(item)item.classList.toggle('checked',input.checked);}));
})();
