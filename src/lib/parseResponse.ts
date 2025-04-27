
/**
 * Parses AI response text with Markdown-style formatting into HTML
 */
const parseResponse = (text: string): string => {
  // Handle bold text (both ** and __ formats)
  let formatted = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.*?)__/g, '<strong>$1</strong>');
  
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
