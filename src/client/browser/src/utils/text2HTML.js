/*
 * File: text2HTML.js
 * Description: Convert plain text to HTML
 * Author: Geoffrey Bourne @geoffbourne https://github.com/gbourne1
*/

export function text2HTML(text) {
  // 1: Plain Text Search
  let txt = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // 2: Line Breaks
  txt = txt.replace(/\r\n?|\n/g, "<br>");

  // 3: Paragraphs
  txt = txt.replace(/<br>\s*<br>/g, "</p><p>");

  // 4: Wrap in Paragraph Tags
  txt = `<p>${txt}</p>`;

  return txt;
}
