const photos = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
    'https://images.unsplash.com/photo-1527489377706-5bf97e608852?w=600&q=80',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=80',
    'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80',
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80',
    'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=600&q=80',
    ].map((src, i) => ({
    src,
    title: 'Today',
    date: '9-08-2016',
    likes: 128,
    views: 67,
    comments1: 31,
    comments2: 22,
    action: 'Image upload',
    actionDate: '11-04-2016'
}));

    const PAGE = 8;
    let visible = PAGE;

    const heart = `<svg viewBox="0 0 12 12" fill="none"><path d="M6 10.2S1 6.7 1 3.7A2.5 2.5 0 016 2.3 2.5 2.5 0 0111 3.7c0 3-5 6.5-5 6.5z" fill="#929292"/></svg>`;
    const eye   = `<svg viewBox="0 0 12 12" fill="none"><ellipse cx="6" cy="6" rx="5" ry="3.2" stroke="#929292" stroke-width="1.2"/><circle cx="6" cy="6" r="1.5" fill="#929292"/></svg>`;
    const chat  = `<svg viewBox="0 0 12 12" fill="none"><rect x="1" y="1.5" width="10" height="7" rx="1.5" stroke="#929292" stroke-width="1.2"/><path d="M3.5 10.5L5.5 8.5H9" stroke="#929292" stroke-width="1.2" stroke-linecap="round"/></svg>`;

    function cardHTML(item) {
    return `<div class="card">
    <img class="card-img" src="${item.src}" alt="${item.title}" loading="lazy"/>
    <div class="card-meta">
      <div class="card-top-row">
        <span class="card-title">${item.title}</span>
        <span class="card-date">${item.date}</span>
      </div>
      <div class="card-stats">
        <div class="card-stat-col">
          <span class="card-stat">${heart} ${item.likes}</span>
          <span class="card-stat">${chat} ${item.comments1}</span>
        </div>
        <div class="card-stat-col">
          <span class="card-stat">${eye} ${item.views}</span>
          <span class="card-stat">${chat} ${item.comments2}</span>
        </div>
      </div>
      <div class="card-bottom-row">
        <span class="card-action">${item.action}</span>
        <span class="card-action-date">${item.actionDate}</span>
      </div>
    </div>
  </div>`;
}

    function render() {
    const el = document.getElementById('content');
    el.innerHTML = photos.slice(0, visible).map(cardHTML).join('');
    document.getElementById('load-more').style.display = visible >= photos.length ? 'none' : '';
}

    // Flatpickr
    const fpFrom = flatpickr('#date-from', { dateFormat:'d_m_Y', allowInput:false });
    const fpTo   = flatpickr('#date-to',   { dateFormat:'d_m_Y', defaultDate:'2016-08-09', allowInput:false });

    document.getElementById('cal-from').onclick  = () => fpFrom.toggle();
    document.getElementById('cal-to').onclick    = () => fpTo.toggle();
    document.getElementById('clear-from').onclick = () => fpFrom.clear();
    document.getElementById('clear-to').onclick   = () => fpTo.clear();

    document.getElementById('btn-grid').onclick = () => {
    document.getElementById('content').className = 'grid-view';
    document.getElementById('btn-grid').classList.add('active');
    document.getElementById('btn-list').classList.remove('active');
    render();
};
    document.getElementById('btn-list').onclick = () => {
    document.getElementById('content').className = 'list-view';
    document.getElementById('btn-list').classList.add('active');
    document.getElementById('btn-grid').classList.remove('active');
    render();
};

    document.getElementById('load-more').onclick = () => { visible += PAGE; render(); };

    render();
