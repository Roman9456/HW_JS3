// Получаем ссылки на элементы управления размером шрифта
const fontSizes = document.querySelectorAll('.font-size');

// Получаем ссылку на элемент книги
const book = document.getElementById('book');

// Обработчик события при клике на элемент размера шрифта
function handleFontSizeClick(event) {
  event.preventDefault();

  // Удаляем класс font-size_active у всех элементов размера шрифта
  fontSizes.forEach(fontSize => {
    fontSize.classList.remove('font-size_active');
  });

  // Добавляем класс font-size_active текущему элементу
  event.target.classList.add('font-size_active');

  // Получаем значение атрибута data-size текущего элемента
  const size = event.target.getAttribute('data-size');

  // Удаляем классы book_fs-big и book_fs-small у элемента книги
  book.classList.remove('book_fs-big', 'book_fs-small');

  // В зависимости от значения size добавляем соответствующий класс к элементу книги
  if (size === 'big') {
    book.classList.add('book_fs-big');
  } else if (size === 'small') {
    book.classList.add('book_fs-small');
  }
}

// Добавляем обработчик события клика на каждый элемент размера шрифта
fontSizes.forEach(fontSize => {
  fontSize.addEventListener('click', handleFontSizeClick); 
});


const textColors = document.querySelectorAll('[data-text-color]');
const bgColors = document.querySelectorAll('[data-bg-color]');

// Обработчик события при клике на элемент цвета текста
function handleTextColorClick(event) {
    event.preventDefault();
  
    const textColor = event.target.getAttribute('data-text-color');
    
    // Удаляем класс color_active у всех элементов цвета текста
    textColors.forEach(textColor => {
      textColor.classList.remove('color_active');
    });
    
    // Добавляем класс color_active текущему элементу
    event.target.classList.add('color_active');
    
    // Устанавливаем цвет текста для элемента книги
    book.style.color = textColor;
  }
  
  // Обработчик события при клике на элемент цвета фона
  function handleBgColorClick(event) {
    event.preventDefault();
  
    const bgColor = event.target.getAttribute('data-bg-color');
    
    // Удаляем класс color_active у всех элементов цвета фона
    bgColors.forEach(bgColor => {
      bgColor.classList.remove('color_active');
    });
    
    // Добавляем класс color_active текущему элементу
    event.target.classList.add('color_active');
    
    // Устанавливаем цвет фона для элемента книги
    book.style.backgroundColor = bgColor;
  }
  
  // Добавляем обработчик события клика на каждый элемент цвета текста
  textColors.forEach(textColor => {
    textColor.addEventListener('click', handleTextColorClick);
  });
  
  // Добавляем обработчик события клика на каждый элемент цвета фона
  bgColors.forEach(bgColor => {
    bgColor.addEventListener('click', handleBgColorClick);
  });
