document.addEventListener('DOMContentLoaded', () => {
  const editor = document.getElementById('editor');
  const editorText = localStorage.editorText;

  if (editorText) {
    editor.value = editorText;
  }

  editor.onchange = () => {
    const text = editor.value.trim();
    console.log(text);
    if (text) {
      localStorage.editorText = text;
      return true;
    }
    localStorage.removeItem('editorText');
  }
})