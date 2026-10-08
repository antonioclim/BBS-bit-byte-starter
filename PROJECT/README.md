# Bit & Byte Lab · BTI · S05–S07

## Română

Aplicaţia arată cum reprezentăm un octet şi cum interpretăm aceiaşi biţi.
Foloseşti acelaşi repository propriu în cele trei seminarii.

### Pornire din această copie

1. Deschide folderul repository-ului clonat în VS Code. În Explorer vezi direct `PROJECT`, `GUIDES` şi `START.html`.
2. Din File Explorer / Finder, deschide `PROJECT/index.html` în browser. Dacă vezi cod HTML în editor, ai deschis fişierul pentru editare, nu aplicaţia.
3. Introdu un întreg zecimal între 0 şi 255. Rezultatele se actualizează când schimbi intrarea; aplicaţia nu are un buton Run.
4. Deschide separat `PROJECT/tests.html`. Selectează etapa curentă şi apasă butonul de rulare. Pentru S07 selectează şi varianta even / odd atribuită.
5. După ce modifici şi salvezi un fişier JavaScript, reîncarcă paginile aplicaţiei şi testelor. Browserul nu preia automat codul nou din editor.

Nu este necesar un server local sau instalarea de biblioteci. Instrucţiunile complete sunt în `../GUIDES/RO/index.html`.

### Ce conţine proiectul iniţial

- Validarea intrării, conversia binară şi numărarea biţilor 1 sunt furnizate.
- `toHex8(u)` se completează în S05: exact două caractere hexazecimale majuscule, de exemplu 5 → `05`.
- `asSigned8(u)` conţine defectul investigat în S06. Un test eşuat în această etapă poate fi dovada problemei pe care o cercetezi.
- `parityBit8(u, mode)` se completează în S07 pentru **modul atribuit**, A = even (pară) sau B = odd (impară).
- Intrările valide sunt întregi zecimale între 0 şi 255 inclusiv. Spaţiile de la margini şi zerourile iniţiale sunt acceptate; de exemplu ` 005 ` înseamnă 5.
- Paritatea se adaugă la dreapta: opt biţi de date şi un bit suplimentar. Şirul transmis are nouă biţi.

La început rulezi **baseline**. S05, S06 şi S07 includ şi verificările etapelor anterioare; funcţiile viitoare nu trebuie să fie complete înainte de seminarul lor.

### Progresul meu — completez după verificare

- [ ] S05: hexazecimal pe două caractere, teste, commit şi push.
- [ ] S06: ipoteză proprie, Gemini sau răspunsul de rezervă, testul afirmaţiei, remediere, PR integrat şi copia locală main actualizată.
- [ ] S07: varianta **[A / B]**, trei teste proprii, commit final, push, clonă nouă şi depunere Moodle.

Instrucţiuni suplimentare sau limitări ale versiunii mele: **[completez scurt]**.
Sursa proiectului, adresa şablonului: **[completez URL-ul comunicat în curs]**.
Completez însemnările din `evidence.md` pe parcurs. Copiez SHA-ul final numai în Moodle, după ultimul commit şi push.

## English (UK)

The application shows how a byte is represented and how the same bits can be interpreted.
Use the same personal repository throughout the three seminars.

### Run this copy

1. Open the cloned repository folder in VS Code. Its Explorer should show `PROJECT`, `GUIDES` and `START.html` directly.
2. Use File Explorer / Finder to open `PROJECT/index.html` in a browser. HTML source in the editor means you opened the file for editing, rather than running the application.
3. Enter a decimal integer from 0 to 255. Results update when you change the input; the application has no Run button.
4. Open `PROJECT/tests.html` separately. Select the current stage and use its run button. For S07, also select your assigned even / odd variant.
5. After changing and saving a JavaScript file, reload both the application and test pages. The browser does not automatically load new code from the editor.

No local server or library installation is required. Complete instructions are in `../GUIDES/EN_GB/index.html`.

### What the starter contains

- Input validation, binary conversion and counting 1 bits are supplied.
- Complete `toHex8(u)` in S05: exactly two uppercase hexadecimal characters, for example 5 → `05`.
- `asSigned8(u)` contains the defect investigated in S06. A failing test at this stage can be evidence of the problem you are investigating.
- Complete `parityBit8(u, mode)` in S07 for **your assigned mode**, A = even or B = odd.
- Valid inputs are decimal integers from 0 to 255 inclusive. Surrounding spaces and leading zeroes are accepted; for example ` 005 ` means 5.
- Append parity on the right: eight data bits and one additional bit. The transmitted word has nine bits.

Start with **baseline**. S05, S06 and S07 also check the preceding stages; later functions do not need to be complete before their seminar.

### My progress — complete after checking

- [ ] S05: two-character hexadecimal output, tests, commit and push.
- [ ] S06: my hypothesis, Gemini or the prepared fallback, a test of the claim, a fix, a merged PR and an updated local main branch.
- [ ] S07: variant **[A / B]**, three custom tests, final commit, push, fresh clone and Moodle submission.

Additional instructions or limitations of my version: **[complete briefly]**.
Project source, template address: **[enter the URL shared in the course]**.
Complete `evidence.md` as you work. Record the final SHA only in Moodle, after the last commit and push.
