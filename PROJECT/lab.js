(function (global) {
  'use strict';

  // RO: Funcţiile primesc un număr deja validat, nu textul câmpului.
  // EN: Functions receive a validated number, not the text from the input field.
  function validateByte(u) {
    if (typeof u !== 'number' || !Number.isInteger(u) || u < 0 || u > 255) {
      throw new Error('INVALID_BYTE_NUMBER');
    }
    return u;
  }

  function parseByte(raw) {
    const text = String(raw).trim();
    if (!/^\d+$/.test(text)) throw new Error('INVALID_BYTE_INPUT');
    const u = Number(text);
    if (!Number.isInteger(u) || u < 0 || u > 255) throw new Error('BYTE_RANGE');
    return u;
  }

  function toBinary8(u) {
    validateByte(u);
    return u.toString(2).padStart(8, '0');
  }

  function toHex8(u) {
    validateByte(u);
    // S05 TODO: exact two uppercase hexadecimal characters. Example: 5 -> '05'.
    // S05 TODO: exact două caractere hexazecimale majuscule. Exemplu: 5 -> '05'.
    return null;
  }

  function asSigned8(u) {
    validateByte(u);
    // S06: known teaching defect. Investigate it with boundary tests.
    // S06: defect didactic declarat. Investigăm prin teste la limită.
    return u > 128 ? u - 256 : u;
  }

  function countOnes8(u) {
    validateByte(u);
    return [...toBinary8(u)].filter(bit => bit === '1').length;
  }

  function parityBit8(u, mode) {
    validateByte(u);
    if (mode !== 'even' && mode !== 'odd') throw new Error('INVALID_PARITY_MODE');
    // Helper supplied / Funcţie auxiliară furnizată: countOnes8(u).
    if (mode === 'even') {
      // S07 A TODO: return the even-parity bit / bitul pentru paritate pară.
      return null;
    }
    if (mode === 'odd') {
      // S07 B TODO: return the odd-parity bit / bitul pentru paritate impară.
      return null;
    }
  }

  global.ByteLab = Object.freeze({parseByte, toBinary8, toHex8, asSigned8, countOnes8, parityBit8});
})(typeof globalThis !== 'undefined' ? globalThis : window);
