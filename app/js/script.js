  const selector = (
    selector1, class1, class2, class3, selector2, class4, class5, class6, class7, class8, class9, count
  ) => {
    let slider = document.querySelector(selector1);

    let container = document.createElement('div');
    container.classList.add(class1);
    slider.insertAdjacentElement('afterbegin', container);

    let track = document.createElement('div');
    track.classList.add(class2);
    container.insertAdjacentElement('afterbegin', track);

    let item = document.createElement('div');
    item.classList.add(class3);
    track.insertAdjacentElement('afterbegin', item);

    let group = document.querySelector(selector2);
    item.insertAdjacentElement('afterbegin', group);

    let btnPrev = document.createElement('button');
    btnPrev.classList.add(class4);
    btnPrev.classList.add(class5);
    container.insertAdjacentElement('afterend', btnPrev);

    let btnNext = document.createElement('button');
    btnNext.classList.add(class4);
    btnNext.classList.add(class6);
    container.insertAdjacentElement('afterend', btnNext);

    let dotsCount = count;
    let elem = dotsCount - 1;

    for (let i = 1; i <= elem; i++) {
      let itemCopy = item.cloneNode(true);
      track.insertAdjacentElement('afterbegin',itemCopy);
    }

    let dots = document.createElement('div');
    dots.classList.add(class7);
    container.insertAdjacentElement('afterend', dots);

    for (let i = 1; i <= count; i++) {
      if(i == 1){
        let dot = document.createElement('a');
        dot.classList.add(class8);
        dot.classList.add(class9);
        dot.innerHTML = i;
        dots.insertAdjacentElement('beforeend', dot);
      } else {
        let dot = document.createElement('a');
        dot.classList.add(class8);
        dot.innerHTML = i;
        dots.insertAdjacentElement('beforeend', dot);
      }
    }
  }

  selector(
    '.work__wrap',
    'work__container',
    'work__track',
    'work__item',
    '.work__group',
    'work__btn',
    'work__btn_next',
    'work__btn_prev',
    'work__dots',
    'work__dot',
    'work__dot_active',
    6
  );

  selector(
    '.projects__wrap',
    'projects__container',
    'projects__track',
    'projects__item',
    '.projects__group',
    'projects__btn',
    'projects__btn_next',
    'projects__btn_prev',
    'projects__dots',
    'projects__dot',
    'projects__dot_active',
    6
  );

  const move = (selector3, selector4, selector5, selector6, selector7, selector8, selector9, class10) => {
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;

    const container = document.querySelector(selector3);
    const track = document.querySelector(selector4);
    const items = document.querySelectorAll(selector5);
    const dots = document.querySelector(selector6);
    const btnPrev = document.querySelector(selector7);
    const btnNext = document.querySelector(selector8);

    const itemsCount = items.length;
    const itemWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    items.forEach((item) => {
      item.style.minWidth = `${itemWidth}px`;
    });

    btnNext.addEventListener('click', () => {
      const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

      position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

      let dot = dots.querySelector(selector9);
      dot.classList.remove(class10);
      dot.nextElementSibling.classList.add(class10);

      setPosition();
      checkBtns();
    });

    btnPrev.addEventListener('click', () => {
      const itemsLeft = Math.abs(position) / itemWidth;

      position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

      let dot = dots.querySelector(selector9);
      dot.classList.remove(class10);
      dot.previousElementSibling.classList.add(class10);

      setPosition();
      checkBtns();
    });

    const setPosition = () => {
      track.style.transform = `translateX(${position}px)`;
    }

    const checkBtns = () => {
      btnPrev.disabled = position == 0;
      btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    }

    checkBtns();
  }

  move(
    '.work__container',
    '.work__track',
    '.work__item',
    '.work__dots',
    '.work__btn_prev',
    '.work__btn_next',
    '.work__dot_active',
    'work__dot_active'
  );

  move(
    '.projects__container',
    '.projects__track',
    '.projects__item',
    '.projects__dots',
    '.projects__btn_prev',
    '.projects__btn_next',
    '.projects__dot_active',
    'projects__dot_active'
  );
