export default async function renderPhoto(data, containerPhotos) {
  containerPhotos.innerHTML += data.map((photo) => {
    return `<li><div class="photo-card">
      <img src="${photo.webformatURL}" alt="${photo.id}" />

      <div class="stats">
        <p class="stats-item">
          <i class="material-icons">thumb_up</i>

          ${photo.likes}
        </p>

        <p class="stats-item">
          <i class="material-icons">visibility</i>

          ${photo.views}
        </p>

        <p class="stats-item">
          <i class="material-icons">comment</i>

          ${photo.comments}
        </p>

        <p class="stats-item">
          <i class="material-icons">cloud_download</i>

          ${photo.downloads}
        </p>
      </div>
    </div></li>`;
  }).join("");
}
