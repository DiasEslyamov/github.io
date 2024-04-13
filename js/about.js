document.addEventListener("DOMContentLoaded", function() {
    let openWindow = document.getElementById("openWindow");
    openWindow.addEventListener("click", function(event) {
        event.preventDefault();
        let newWindow = window.open('', '_blank', 'width=600,height=400');
        newWindow.document.write("<h1>Добро пожаловать! Это новое окно!</h1>");
        newWindow.document.write("<p>Текст в новом окне.</p>");
    });
});

let xValues = ["Английский", "Мандаринский (китайский)", "Хинди", "Испанский", "Французский", "Немецкий"];
    let yValues = [13.95, 13.80, 7.59, 6.59, 3.46, 1.63]; // Проценты, сумма которых составляет 100
    let barColors = ["red", "green","blue","orange","brown", "gray"];

    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues // Процентные значения
        }]
      },
      options: {
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
            },
            ticks: {
              beginAtZero: true,
              min: 0,
              max: 15,
               stepSize: 1.5,
              callback: function(value) {
                return value + "%";
              }
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
            }
          }]
        },
        legend: {display: false},
        title: {
          display: true,
          text: "Количество носителей языка на 2024"
        }
      }
    });

    const highlightWords = document.querySelectorAll('.highlight');

    highlightWords.forEach(word => {
        word.addEventListener('mouseover', () => {
            const img = document.querySelector('#flag');
            word.style.display = 'none';
            img.style.display = 'inline';
        });

        word.addEventListener('mouseout', () => {
            const img = document.querySelector('#flag');
            img.style.display = 'none';
            word.style.display = 'inline';
        });
    });

  let countries = document.querySelectorAll('.countries');
  let popupBg = document.querySelector('.info__bg');
  let popup__photo = document.querySelector('.info__photo');
  let popup__title = document.querySelector('.info__title');
  let popup__text = document.querySelector('.info__text');
  let tooltip = document.querySelector('.tooltip');

  countries.forEach((item) => {
        item.addEventListener('click', function() {
            popup__title.textContent = this.getAttribute('data-title');
            popup__photo.setAttribute('src', this.getAttribute('data-photo'));
            popup__text.textContent = this.getAttribute('data-text');
            popupBg.classList.add('active');
        });
    
        item.addEventListener('mouseenter', function() {
            tooltip.textContent = item.getAttribute('data-title');
            tooltip.style.display = 'block';
        });
    
        item.addEventListener('mouseleave', function() {
            tooltip.textContent = item.getAttribute('data-title');
            tooltip.style.display = 'none';
        });
    
        item.addEventListener('mouseover', function(e) {
            tooltip.style.top = (e.y + 250) + 'px';
            tooltip.style.left = (e.x - 20) + 'px';
        });
    });
    
    document.addEventListener('click', (e) => {
        if(e.target === popupBg) {
            popupBg.classList.remove('active');
        }
    });