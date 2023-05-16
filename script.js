  // Replace with your RapidAPI Bing Image Search API key
  const apiKey = 'c3e7e0f9a2msh9541025fef72972p19b90ejsn2b4a44807bbe';

  const searchForm = document.querySelector('#search-form');
  const imageContainers = [
    document.querySelector('#image-container-1'),
    document.querySelector('#image-container-2'),
    document.querySelector('#image-container-3')
  ];
  
  searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
  
    // Clear previous search results
    imageContainers.forEach(container => container.innerHTML = '');
  
    const searchTerms = [
      document.querySelector('#search-term-1').value,
      document.querySelector('#search-term-2').value,
      document.querySelector('#search-term-3').value
    ];
  
    // Perform image search for each search term
    for (let i = 0; i < searchTerms.length; i++) {
      const searchTerm = searchTerms[i];
      const container = imageContainers[i];
  
      // Perform search using Bing Image Search API
      const response = await fetch(
        `https://bing-image-search1.p.rapidapi.com/images/search?q=${encodeURIComponent(searchTerm)}&count=1`,
  {
  headers: {
  'x-rapidapi-key': apiKey,
  'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com',
  },
  }
  );
  
  const data = await response.json();
  
  // Render search results
  data.value.forEach(result => {
    const img = document.createElement('img');
    img.src = result.thumbnailUrl;
    img.alt = result.name;
    container.appendChild(img);
  });
  
  }
  });
