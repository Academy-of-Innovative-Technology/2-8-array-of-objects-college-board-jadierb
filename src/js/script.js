const colleges = [
  {
    rank: 1,
    name: "New York City College of Technology",
    program: "Google IT Support Certificate",
    address: "300 Jay Street, Brooklyn, NY",
    website: "https://www.citytech.cuny.edu/",
    maps: "https://maps.app.goo.gl/F3SGRFV4zh1yvmcb8",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUufVAsr5OrhWvrcJBkbSFf18LdVVP30wWug&s"
  },
  {
    rank: 2,
    name: "Guttman Community College",
    program: "Information Technology",
    address: "50 West 40th Street, New York, NY",
    website: "https://guttman.cuny.edu/",
    maps: "https://maps.app.goo.gl/W1upHP18Y2y4AsiNA",
    image: "https://cunyhumanitiesalliance.commons.gc.cuny.edu/files/2021/01/Guttman_LOGO_Full_Horizontal_Color-1024x468.png"
  },
  {
    rank: 3,
    name: "LaGuardia Community College",
    program: "Computer Information Systems",
    address: "1-10 Thomson Avenue, Long Island City, NY 11101",
    website: "https://www.laguardia.edu/",
    maps: "https://maps.app.goo.gl/D24onqGCVzZ47h2o9",
    image: "https://keystoneacademic-res.cloudinary.com/image/upload/c_pad,w_640,h_304/dpr_auto/f_auto/q_auto/v1/element/15/159776_Laguardia.jpeg"
  },
  {
    rank: 4,
    name: "York College",
    program: "IT Services Desk Specialist",
    address: "94-20 Guy R. Brewer Blvd, Jamaica, NY 11433",
    website: "https://www.york.cuny.edu/",
    maps: "https://maps.app.goo.gl/D24onqGCVzZ47h2o9",
    image: "https://www.york.cuny.edu/@@site-logo/yc-logo_01r.png"
  },
  {
    rank: 5,
    name: "Queensborough Community College",
    program: "Internet and Information Technology",
    address: "222-05 56th Avenue, Bayside, NY 11364",
    website: "https://www.qcc.cuny.edu/",
    maps: "https://maps.app.goo.gl/3yM8gk1zYFqprTtA9",
    image: "https://www.tonygamino.com/images/portfolio/qcc-logo-old.jpg"
  }
];

const listGroup = document.querySelector('#college-list');
if (listGroup) {
  listGroup.innerHTML = '';

  colleges.forEach(college => {
    const cardHTML = `
      <div class="list-group-item college-card">
        <div class="row">
          <div class="col-2">
            <img src="" alt="Logo of ${college.name}" loading="lazy" width="200" height="200" class="college-image" id="img-${college.rank}">
          </div>
          <div class="col-7 college-info">
            <h5>${college.rank}. ${college.name}</h5>
            <p><strong>Program:</strong> ${college.program || ''}</p>
            <p><strong>Address:</strong> ${college.address}</p>
            <p><strong>Website:</strong> <a href="#" target="_blank" id="site-${college.rank}" aria-label="Visit ${college.name} website (opens in new tab)">${college.website}</a></p>
            <p><strong>Google Maps:</strong> <a href="#" target="_blank" id="maps-${college.rank}" aria-label="Open Google Maps for ${college.name} (opens in new tab)">View on Google Maps</a></p>
          </div>
        </div>
      </div>`;

    listGroup.insertAdjacentHTML('beforeend', cardHTML);

    const imgEl = document.querySelector(`#img-${college.rank}`);
    if (imgEl) {
      imgEl.src = college.image || 'https://via.placeholder.com/100';
      imgEl.alt = `Logo of ${college.name}`;
    }

    const siteEl = document.querySelector(`#site-${college.rank}`);
    if (siteEl) {
      siteEl.href = college.website || '#';
      siteEl.rel = 'noopener noreferrer';
      siteEl.setAttribute('aria-label', `Visit ${college.name} website (opens in new tab)`);
      try {
        siteEl.textContent = new URL(college.website).host;
      } catch (e) {
        siteEl.textContent = college.website;
      }
    }

    const mapsEl = document.querySelector(`#maps-${college.rank}`);
    if (mapsEl) {
      mapsEl.href = college.maps || '#';
      mapsEl.rel = 'noopener noreferrer';
      mapsEl.setAttribute('aria-label', `Open Google Maps for ${college.name} (opens in new tab)`);
    }
  });
}