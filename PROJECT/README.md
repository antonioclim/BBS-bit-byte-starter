# Bit & Byte Lab · BTI · S05–S07

## Română

Aplicația ilustrează reprezentarea unui octet și interpretarea aceleiași succesiuni de biți în mai multe moduri.
Veți lucra în același repository personal pe parcursul celor trei seminarii.

### Cum porniți aplicația din această copie

1. Deschideți în VS Code folderul în care ați clonat repository-ul. În panoul Explorer trebuie să apară direct `PROJECT`, `GUIDES` și `START.html`.
2. Din File Explorer sau Finder, deschideți `PROJECT/index.html` într-un browser. Dacă vedeți codul HTML în editor, fișierul este deschis pentru editare; pentru a utiliza aplicația, deschideți-l în browser.
3. Introduceți un număr întreg în baza zece, cuprins între 0 și 255. Rezultatele se actualizează la modificarea valorii introduse. Aplicația nu are un buton Run.
4. Deschideți separat `PROJECT/tests.html`. Selectați etapa curentă și apăsați butonul de rulare a testelor. Pentru S07, selectați și varianta atribuită: paritate pară (even) sau impară (odd).
5. După ce modificați și salvați un fișier JavaScript, reîncărcați atât pagina aplicației, cât și pagina testelor. Browserul nu încarcă automat modificările salvate în editor.

Nu aveți nevoie de un server local sau de instalarea unor biblioteci. Instrucțiunile complete se găsesc în `../GUIDES/RO/index.html`.

### Ce conține proiectul inițial

- Validarea datelor de intrare, conversia în baza doi și numărarea biților cu valoarea 1 sunt deja implementate.
- Completați `toHex8(u)` în S05. Funcția trebuie să returneze exact două caractere hexazecimale, cu litere majuscule; de exemplu, pentru 5, rezultatul este `05`.
- `asSigned8(u)` conține eroarea introdusă în scop didactic pe care o investigați în S06. Un test eșuat poate evidenția tocmai problema cercetată.
- Completați `parityBit8(u, mode)` în S07 pentru **varianta atribuită**: A = paritate pară (even), B = paritate impară (odd).
- Sunt acceptate numere întregi în baza zece, cuprinse între 0 și 255 inclusiv. Spațiile de la începutul și sfârșitul intrării, precum și zerourile de la începutul numărului, sunt acceptate. De exemplu, ` 005 ` reprezintă valoarea 5.
- Bitul de paritate se adaugă la dreapta celor opt biți de date. Șirul transmis conține astfel nouă biți.

La început, rulați verificările codului de bază furnizat, alegând **Codul de bază furnizat** (baseline). Testele S05, S06 și S07 includ verificările etapelor anterioare. Funcțiile prevăzute pentru un seminar ulterior pot rămâne necompletate până la acel seminar.

### Progresul meu — completez după verificare

- [ ] S05: conversie hexazecimală pe două caractere, teste, înregistrarea modificărilor (commit) și trimiterea lor în repository-ul de pe GitHub (push).
- [ ] S06: ipoteză proprie, consultarea Gemini sau a răspunsului de rezervă, verificarea unei afirmații printr-un test, remediere, integrarea cererii de modificare (pull request, PR) și actualizarea copiei locale a ramurii main.
- [ ] S07: varianta **[A / B]**, trei teste proprii, commit final, push, verificare dintr-o clonă nouă și predare în Moodle.

Instrucțiuni suplimentare sau limitări ale versiunii mele: **[completez pe scurt]**.
Adresa șablonului din care am creat proiectul: **[completez URL-ul comunicat în curs]**.
Completez `evidence.md` pe parcursul lucrului. Copiez identificatorul SHA al commitului final numai în Moodle, după ultimul commit și push.

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
