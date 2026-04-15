let data = [];

fetch('data.json')
  .then(res => res.json())
  .then(json => {
    data = json;
    render(data);
  });

function render(list) {
  const container = document.getElementById('list');
  container.innerHTML = '';
<p style="color:#666;font-style:italic">
  "Một đời người – một ký ức còn mãi"
</p>
  list.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <img src="${item.image}">
        <div>
          <h3>${item.name}</h3>
          <p>${item.birth} - ${item.death}</p>
          <a href="detail.html?id=${item.id}">Xem chi tiết</a>
        </div>
      </div>
    `;
  });
}

document.getElementById('search').addEventListener('input', e => {
  const keyword = e.target.value.toLowerCase();
  const filtered = data.filter(p => p.name.toLowerCase().includes(keyword));
  render(filtered);
});
