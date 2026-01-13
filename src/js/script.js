const colleges = [
  {
    rank: 1,
    name: "new york city college of technology",
    program: "google IT support certificate",
    address: "300 Jay Street, Brooklyn, NY",
    website: "https://www.citytech.cuny.edu/",
    maps: "https://maps.app.goo.gl/F3SGRFV4zh1yvmcb8",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUufVAsr5OrhWvrcJBkbSFf18LdVVP30wWug&s"
  },
  {
    rank: 2,
    name: "guttman communty college",
    program: "information technology",
    address: "50 West 40th Street, New York,",
    website: "https://guttman.cuny.edu/",
    maps: "https://maps.app.goo.gl/W1upHP18Y2y4AsiNA",
    image: "https://cunyhumanitiesalliance.commons.gc.cuny.edu/files/2021/01/Guttman_LOGO_Full_Horizontal_Color-1024x468.png"
  },
  {
    rank: 3,
    name: "la guardia communtiy college",
    program: "computer information systems",
    address: "1-10 Thomson Avenue, Long Island City, NY 11101",
    website: "https://www.laguardia.edu/",
    maps: "https://maps.app.goo.gl/D24onqGCVzZ47h2o9",
    image: "https://keystoneacademic-res.cloudinary.com/image/upload/c_pad,w_640,h_304/dpr_auto/f_auto/q_auto/v1/element/15/159776_Laguardia.jpeg"
  },
  {
    rank: 4,
    name: "york collge",
    program: "it services desk specialist",
    address: "94-20 Guy R. Brewer Blvd, Jamaica, NY 11433",
    website: "https://www.york.cuny.edu/",
    maps: "https://maps.app.goo.gl/D24onqGCVzZ47h2o9",
    image: "https://www.york.cuny.edu/@@site-logo/yc-logo_01r.png"
  },
  {
    rank: 5,
    name: "queensborough community college",
    program: "internet and information technology",
    address: "222-05 56th Avenue, Bayside, NY 11364",
    website: "https://www.qcc.cuny.edu/",
    maps: "https://maps.app.goo.gl/3yM8gk1zYFqprTtA9",
    image: "https://www.tonygamino.com/images/portfolio/qcc-logo-old.jpg"
  }
];

const listGroup = document.querySelector('.list-group');
if (listGroup) {
  
  listGroup.innerHTML = '';

  colleges.forEach(college => {
    const cardHTML = `
      <div class="list-group-item college-card">
        <div class="row">
          <div class="col-2">
            <img src="" alt="${college.name} Logo" class="college-image" id="img-${college.rank}">
          </div>
          <div class="col-7 college-info">
            <h5>${college.rank}. ${college.name}</h5>
            <p><strong>Program:</strong> ${college.program || ''}</p>
            <p><strong>Address:</strong> ${college.address}</p>
            <p><strong>Website:</strong> <a href="#" target="_blank" id="site-${college.rank}">${college.website}</a></p>
            <p><strong>Google Maps:</strong> <a href="#" target="_blank" id="maps-${college.rank}">View on Google Maps</a></p>
          </div>
        </div>
      </div>`;

  
    listGroup.insertAdjacentHTML('beforeend', cardHTML);

   
    const imgEl = document.querySelector(`#img-${college.rank}`);
    if (imgEl) imgEl.src = college.image || 'https://via.placeholder.com/100';

    const siteEl = document.querySelector(`#site-${college.rank}`);
    if (siteEl) {
      siteEl.href = college.website;
      try {
        siteEl.textContent = new URL(college.website).host; // show friendly host text
      } catch (e) {
        siteEl.textContent = college.website;
      }
    }

    const mapsEl = document.querySelector(`#maps-${college.rank}`);
    if (mapsEl) mapsEl.href = college.maps || '#';
  });
}