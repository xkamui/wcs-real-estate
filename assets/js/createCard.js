export default function createCard(card, elem) {

    const cardWrapper = document.createElement('div')
    cardWrapper.classList.add('card')
    cardWrapper.setAttribute('data-available', card.available)

    cardWrapper.innerHTML = `<div class="card-header">
                               <div class="card-img"
                                 style="background-image:url('${(card.img ? card.img : 'assets/images/blank-square.webp')}') ">
                               </div>
                               <span class="availability">${(card.available === true ? '🟢' : '🔴')}</span>
                             </div>
                             <div class="card-body">
                               <h2 class="card-title">${card.name}</h2>
                               <p class="card-description">${card.desc}</p>
                               <button class="card-button">I want it!</button>
                             </div>`

    elem.appendChild(cardWrapper)

}
