const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

const buttons = document.querySelectorAll('.btn-outline-primary');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

const properties = [
    {
      name: 'The Minimalist House',
      location: 'Sta. Maria, Zamboanga City',
      price: '₱10,000',
      beds: 5,
      baths: 3,
      size: '4.2m²',
      images: ['https://picsum.photos/id/1018/400/200', 'https://picsum.photos/id/1022/400/200']
    },
    {
      name: 'The Cozy House',
      location: 'Divisoria, Zamboanga City',
      price: '₱12,000',
      beds: 6,
      baths: '1-3',
      size: '4.2m²',
      images: ['https://picsum.photos/id/1015/400/200', 'https://picsum.photos/id/1016/400/200']
    },
    {
      name: 'Best Starter House',
      location: 'Tumaga, Zamboanga City',
      price: '₱15,000',
      beds: '4-6',
      baths: '2-3',
      size: '4.2m²',
      images: ['https://picsum.photos/id/1020/400/200', 'https://picsum.photos/id/1021/400/200']
    },
    {
      name: 'Family House',
      location: 'Guiwan, Zamboanga City',
      price: '₱8,000',
      beds: 5,
      baths: 2,
      size: '3.5m²',
      images: ['https://picsum.photos/id/1025/400/200', 'https://picsum.photos/id/1031/400/200']
    },
    {
      name: 'Urban Smart Home',
      location: 'Tetuan, Zamboanga City',
      price: '₱14,000',
      beds: 4,
      baths: 2,
      size: '3.8m²',
      images: ['https://picsum.photos/id/1040/400/200', 'https://picsum.photos/id/1042/400/200']
    },
    {
      name: 'Luxury Villa',
      location: 'Baliwasan, Zamboanga City',
      price: '₱25,000',
      beds: 7,
      baths: 4,
      size: '5.0m²',
      images: ['https://picsum.photos/id/1050/400/200', 'https://picsum.photos/id/1051/400/200']
    }
  ];
  
  let currentIndex = 0;
  const cardsPerPage = 4;
  
  function renderProperties() {
    const container = document.getElementById('propertyList');
    container.innerHTML = '';
  
    const slice = properties.slice(currentIndex, currentIndex + cardsPerPage);
    slice.forEach((property, index) => {
      const card = document.createElement('div');
      card.className = 'col-md-3 mb-4';
  
      const carouselId = `carousel-${currentIndex + index}`;
  
      card.innerHTML = `
        <div class="card shadow-sm h-100">
          <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              ${property.images.map((img, idx) => `
                <div class="carousel-item ${idx === 0 ? 'active' : ''}">
                  <img src="${img}" class="d-block w-100" alt="House Image">
                </div>
              `).join('')}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>
          <div class="card-body">
            <h6 class="text-muted mb-1">${property.price}</h6>
            <h5 class="card-title">${property.name}</h5>
            <p class="text-muted mb-2">${property.location}</p>
            <div class="property-info d-flex justify-content-between">
              <div><i class="fa fa-bed"></i> ${property.beds}</div>
              <div><i class="fa fa-bath"></i> ${property.baths}</div>
              <div><i class="fa fa-expand"></i> ${property.size}</div>
            </div>
          </div>
          <div class="card-footer bg-transparent text-center">
            <button class="btn btn-success w-100">View</button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex + cardsPerPage < properties.length) {
      currentIndex += cardsPerPage;
    } else {
      currentIndex = 0;
    }
    renderProperties();
  });
  
  document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex - cardsPerPage >= 0) {
      currentIndex -= cardsPerPage;
    } else {
      currentIndex = properties.length - cardsPerPage;
    }
    renderProperties();
  });
  
  renderProperties();