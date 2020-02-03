import { Font } from './types';

let span;

function createSpan() {
  if (span) return;
  span = document.createElement('span');
  // 不显示在视窗
  span.style.visibility = 'hidden';
  span.style.position = 'absolute';
  span.style.display = 'inline';
  span.style.left = '-1000px';
  span.style.top = '-1000px';

  document.body.appendChild(span);
}

/**
 * measure text By DOM
 * @param text
 * @param font
 */
export function measureTextByDOM(text: string, font: Font): number {
  // 先创建 span
  createSpan();

  const { fontSize, fontFamily, fontWeight, fontStyle, fontVariant } = font;

  span.style.fontSize = `${fontSize}px`;
  span.style.fontFamily = fontFamily;
  span.style.fontWeight = fontWeight;
  span.style.fontStyle = fontStyle;
  span.style.fontVariant = fontVariant;

  span.innerHTML = text;

  return span.clientWidth;
}
