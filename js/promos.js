//burger

        var sidemenu = document.getElementById("sidemenu");
        
        function openmenu(){
            sidemenu.style.right = "0";
        }
        function closemenu(){
            sidemenu.style.right = "-200px";
        }

function promoCardClicked(card) {
      const imageSrc = card.getAttribute('data-image');
      const title = card.getAttribute('data-title');
      const description = card.getAttribute('data-description');

      updateFeatured(imageSrc, title, description, card);
    }

    function updateFeatured(imageSrc, title, description, clickedCard) {
      const featuredImg = document.getElementById('featured-img');
      const featuredDesc = document.getElementById('featured-desc');
      const promoList = document.getElementById('promo-list');

      // Store current featured details
      const oldImageSrc = featuredImg.src;
      const oldTitle = featuredDesc.querySelector('h2').innerText;
      const oldDescription = featuredDesc.querySelector('p').innerText;

      // Update featured
      featuredImg.src = imageSrc;
      featuredDesc.innerHTML = `<h2>${title}</h2><p>${description}</p>`;

      // Remove clicked card
      clickedCard.remove();

      // Create old featured as a new promo card
      const newCard = document.createElement('div');
      newCard.className = 'promo-card';
      newCard.setAttribute('data-image', oldImageSrc);
      newCard.setAttribute('data-title', oldTitle);
      newCard.setAttribute('data-description', oldDescription);
      newCard.onclick = function () {
        promoCardClicked(newCard);
      };
      newCard.innerHTML = `<img src="${oldImageSrc}" alt="${oldTitle}"><h3>${oldTitle}</h3>`;

      promoList.appendChild(newCard);
    }