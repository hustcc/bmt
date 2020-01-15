import { Font } from './types';

const div = document.createElement('span');
// 不显示在视窗
div.style.visibility = 'hidden';
div.style.position = 'absolute';
div.style.display = 'inline';
div.style.left = '-1000px';
div.style.top = '-1000px';

document.body.appendChild(div);

/**
 * measure text By DOM
 * @param text
 * @param font
 */
export function measureTextByDOM(text: string, font: Font): number {
  const { fontSize, fontFamily, fontWeight, fontStyle, fontVariant } = font;

  div.style.fontSize = `${fontSize}px`;
  div.style.fontFamily = fontFamily;
  div.style.fontWeight = fontWeight;
  div.style.fontStyle = fontStyle;
  div.style.fontVariant = fontVariant;

  div.innerHTML = text;

  return div.clientWidth;
}
