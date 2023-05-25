const listItems = document.querySelectorAll('li');
const paragraphs = document.querySelectorAll('.answer');

// listItems.forEach(function(item) {
//     item.addEventListener('click', function() {
//         paragraphs.forEach(function(paragraph) {
//             paragraph.style.display = 'none';
//         });

//         const paragraph = item.querySelector('.answer');
//         paragraph.style.display = 'block';
//     })
// })


listItems.forEach(function(item) {
    item.addEventListener('click', function() {
      const paragraph = item.querySelector('.answer');
      const isParagraphVisible = paragraph.classList.contains('show');
  
      // Hide all paragraphs
      paragraphs.forEach(function(para) {
        para.classList.remove('show');
      });
  
      // Show or hide the corresponding paragraph based on its current visibility
      if (!isParagraphVisible) {
        paragraph.classList.add('show');
      }
    });
  });
