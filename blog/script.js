// Fetch blogs from Dev.to API
fetch("https://dev.to/api/articles?username=shreelaxmihegde")
  .then(response => response.json())
  .then(articles => {
    const categories = {
      core: [],
      journey: []
    };

    // Separate blogs based on their tags or custom logic
    articles.forEach(article => {
      if (article.tags.includes("devjournal")) {
        categories.journey.push(article);
      }
      else {
        categories["core"].push(article);
      }
    });

    // Render each category section
    Object.keys(categories).forEach(category => {
      renderCarousel(category, categories[category]);
    });

  })
.catch(error => console.error("Error fetching articles:", error));

function renderCarousel(category, blogs) {
  const container = document.querySelector(`#${category} .carousel-container`);
  
  container.innerHTML = `
    <div class="carousel wrapper">
      ${blogs.map(blog => 
        `<div class="blog-card-a">
          <img src="${blog.cover_image}" alt="${blog.title}">
          <h3>${blog.title}</h3>
          <p>${blog.description}</p>
          <a href="${blog.url}" target="_blank">Read More →</a>
        </div>`
      ).join("")}
    </div>
  `;
}
