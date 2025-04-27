
/**
 * Parses AI response text with Markdown-style formatting into HTML with neon styling
 */
const parseResponse = (text: string): string => {
  // Handle bold text with neon styling using website's color palette
  let formatted = text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="neon-text-bold">$1</strong>')
    .replace(/__(.*?)__/g, '<strong class="neon-text-bold">$1</strong>');
  
  // Handle paragraphs
  formatted = formatted
    .split('\n\n')
    .map(paragraph => 
      paragraph.trim() ? `<p>${paragraph.trim()}</p>` : ''
    )
    .join('');
  
  return formatted;
};

export default parseResponse;
