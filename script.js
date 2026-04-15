let data = [];

fetch('data.json')
  .then(res => res.json())
  .then(json => {
    data = json;
    render(data);
  })
  .catch(err => {
    console.error("Lỗi load data:", err);
  });

function render(list) {
  const container = document.getElementById('list');
  if (!container) return;

  container.innerHTML = '';

  list.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <img src="${item.image}" onerror="this.src='https://i.imgur.com/6VBx3io.png'">
        <div>
          <h3>${item.name}</h3>
          <p>${item.birth} - ${item.death}</p>
          <p style="color:#666;font-style:italic">
            "Một đời người – một ký ức còn mãi"
          </p>
          <a href="detail.html?id=${item.id}">Xem chi tiết</a>
        </div>
      </div>
    `;
  });
}

document.getElementById('search').addEventListener('input', e => {
  const keyword = e.target.value.toLowerCase();
  const filtered = data.filter(p =>
    p.name.toLowerCase().includes(keyword)
  );
  render(filtered);
});
