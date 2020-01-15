import { Font } from './types';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

/**
 * measure text by canvas
 * @param text
 * @param font
 */
export function measureTextByCanvas(text: string, font: Font): number {
  const { fontSize, fontFamily, fontWeight, fontStyle, fontVariant } = font;
  ctx.font = [fontStyle, fontVariant, fontWeight, `${fontSize}px`, fontFamily].join(' ');
  return ctx.measureText(text).width;
}
