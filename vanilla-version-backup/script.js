// Dummy data for schemes
const schemes = [
    {
        id: 15,
        title: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
        type: "Course",
        description: "Skill certification scheme to enable youth to take up industry-relevant skill training.",
        eligibility: "Prior learning experience or unemployed youth.",
        benefits: "Free skill training and certification, placement assistance.",
        deadline: "Ongoing",
        state: "All",
        incomeRange: "All",
        documents: ["Aadhaar", "Bank Details", "Passport Size Photo"],
        applyLink: "#"
    },
    {
        id: 16,
        title: "National Apprenticeship Promotion Scheme (NAPS)",
        type: "Internship",
        description: "Promoting apprenticeship training and incentivizing employers to hire apprentices.",
        eligibility: "Minimum 14 years of age, ITI students, graduates, or diploma holders.",
        benefits: "Stipend support from the government, valuable industry experience.",
        deadline: "Ongoing",
        state: "All",
        incomeRange: "All",
        documents: ["Educational Certificates", "Aadhaar", "Bank Details"],
        applyLink: "#"
    },
    {
        id: 17,
        title: "Jan Shikshan Sansthan (JSS)",
        type: "Course",
        description: "Vocational training to non-literate, neo-literate, and school dropouts.",
        eligibility: "Ages 15-45. Unemployed youth, women, SC/ST/OBC.",
        benefits: "Doorstep skill training, minimal fees or free.",
        deadline: "Ongoing",
        state: "All",
        incomeRange: "Below 3L",
        documents: ["Address Proof", "Category Certificate (if any)"],
        applyLink: "#"
    },
    {
        id: 1,
        title: "National Scholarship Portal",
        type: "Scholarship",
        description: "Merit-cum-means scholarship for undergraduate students.",
        eligibility: "Students with family income below 6 lakhs, minimum 80% in 12th.",
        benefits: "Up to ₹30,000 per year.",
        deadline: "2024-08-31",
        state: "All",
        incomeRange: "Below 5L",
        documents: ["Income certificate", "Mark sheets", "Bank details"],
        applyLink: "#"
    },
    {
        id: 2,
        title: "PM Internship Scheme",
        type: "Internship",
        description: "Internship opportunities in government ministries.",
        eligibility: "Students pursuing graduation or post-graduation.",
        benefits: "Stipend of ₹5,000 per month, certificate.",
        deadline: "2024-12-31",
        state: "All",
        incomeRange: "All",
        documents: ["Resume", "ID proof", "Recommendation letter"],
        applyLink: "#"
    },
    {
        id: 3,
        title: "Vidya Lakshmi Education Loan",
        type: "Loan",
        description: "Education loan for higher studies.",
        eligibility: "Indian students, secured admission.",
        benefits: "Loan up to ₹20 lakhs, flexible repayment.",
        deadline: "Ongoing",
        state: "All",
        incomeRange: "All",
        documents: ["Admission letter", "Income proof", "Collateral details"],
        applyLink: "#"
    },
    {
        id: 4,
        title: "Skill India Free Courses",
        type: "Course",
        description: "Free skill development courses.",
        eligibility: "Age 15-35, basic education.",
        benefits: "Certification, job placement assistance.",
        deadline: "2024-10-31",
        state: "All",
        incomeRange: "Below 3L",
        documents: ["Aadhaar", "Education certificate"],
        applyLink: "#"
    },
    {
        id: 5,
        title: "State Merit Scholarship",
        type: "Scholarship",
        description: "State-specific merit scholarship.",
        eligibility: "Top 10% in state board exams.",
        benefits: "₹10,000 annually.",
        deadline: "2024-09-30",
        state: "Maharashtra",
        incomeRange: "Below 5L",
        documents: ["Mark sheet", "Domicile certificate"],
        applyLink: "#"
    },
    {
        id: 6,
        title: "Digital India Internship",
        type: "Internship",
        description: "Internships in digital literacy programs.",
        eligibility: "Computer science students.",
        benefits: "₹4,000 stipend, experience certificate.",
        deadline: "2024-11-30",
        state: "Delhi",
        incomeRange: "All",
        documents: ["Resume", "College ID"],
        applyLink: "#"
    },
    {
        id: 7,
        title: "Pradhan Mantri Awas Yojana Loan",
        type: "Loan",
        description: "Loan for housing under PMAY.",
        eligibility: "Low income families.",
        benefits: "Subsidized interest rates.",
        deadline: "Ongoing",
        state: "All",
        incomeRange: "Below 3L",
        documents: ["Income proof", "Property documents"],
        applyLink: "#"
    },
    {
        id: 8,
        title: "NSDC Free Training",
        type: "Course",
        description: "Vocational training programs.",
        eligibility: "Unemployed youth.",
        benefits: "Free training, placement.",
        deadline: "2024-12-31",
        state: "Karnataka",
        incomeRange: "Below 5L",
        documents: ["Aadhaar", "Unemployment certificate"],
        applyLink: "#"
    },
    {
        id: 9,
        title: "KVPY Fellowship",
        type: "Scholarship",
        description: "Kishore Vaigyanik Protsahan Yojana for students in basic sciences.",
        eligibility: "Students studying in XI, XII, and 1st year of UG in Science.",
        benefits: "Monthly fellowship of ₹5,000 to ₹7,000.",
        deadline: "2024-10-15",
        state: "All",
        incomeRange: "All",
        documents: ["Marksheet", "Category Certificate", "School ID"],
        applyLink: "#"
    },
    {
        id: 10,
        title: "NITI Aayog Internship",
        type: "Internship",
        description: "Internship program matching students with various government verticals.",
        eligibility: "UG/PG students with minimum 85% in 12th standard.",
        benefits: "Real-world policy experience, Internship Certificate.",
        deadline: "Ongoing",
        state: "Delhi",
        incomeRange: "All",
        documents: ["NOC from college", "Resume", "Cover Letter"],
        applyLink: "#"
    },
    {
        id: 11,
        title: "SBI Student Loan Scheme",
        type: "Loan",
        description: "Comprehensive education loan for students pursuing higher education.",
        eligibility: "Indian Nationals with secured admission to recognized institutions.",
        benefits: "Loan up to ₹7.5 lakhs with competitive interest rates.",
        deadline: "Ongoing",
        state: "All",
        incomeRange: "Above 5L",
        documents: ["Admission letter", "PAN Card", "Aadhaar", "Co-applicant income proof"],
        applyLink: "#"
    },
    {
        id: 12,
        title: "SWAYAM Free Online Courses",
        type: "Course",
        description: "Free online courses provided by the Ministry of Education.",
        eligibility: "Any student or professional eager to learn.",
        benefits: "Free learning, option for verified certificate (nominal fee).",
        deadline: "2024-08-30",
        state: "All",
        incomeRange: "All",
        documents: ["None"],
        applyLink: "#"
    },
    {
        id: 13,
        title: "E-District Delhi Scholarship",
        type: "Scholarship",
        description: "Financial assistance for marginalized communities.",
        eligibility: "Residents of Delhi belonging to SC/ST/OBC category.",
        benefits: "Reimbursement of tuition fees and study materials.",
        deadline: "2024-09-15",
        state: "Delhi",
        incomeRange: "Below 3L",
        documents: ["Domicile", "Caste Certificate", "Income Certificate"],
        applyLink: "#"
    },
    {
        id: 14,
        title: "MahaDBT Post Matric Scholarship",
        type: "Scholarship",
        description: "Scholarship for post-matric students in Maharashtra.",
        eligibility: "Students pursuing post-matric courses in recognized colleges in Maharashtra.",
        benefits: "Maintenance allowance and fee reimbursement.",
        deadline: "2024-11-20",
        state: "Maharashtra",
        incomeRange: "Below 5L",
        documents: ["Domicile", "Last year marksheet", "Bank Passbook"],
        applyLink: "#"
    }
];

// Utility functions
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Load featured schemes on homepage
function loadFeaturedSchemes() {
    const featuredGrid = document.getElementById('featured-grid');
    if (!featuredGrid) return;

    // Show loading skeleton
    featuredGrid.innerHTML = `
        <div class="scheme-card">
            <div class="skeleton skeleton-title"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text short"></div>
        </div>
        <div class="scheme-card">
            <div class="skeleton skeleton-title"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text short"></div>
        </div>
        <div class="scheme-card">
            <div class="skeleton skeleton-title"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text short"></div>
        </div>
    `;

    // Simulate loading delay
    setTimeout(() => {
        const featured = schemes.slice(0, 3);
        renderSchemes(featured, featuredGrid);
    }, 500);
}

// Render schemes in a grid
function renderSchemes(schemesList, container) {
    container.innerHTML = '';
    schemesList.forEach(scheme => {
        const card = document.createElement('div');
        card.className = 'scheme-card';
        card.innerHTML = `
            <h3>${scheme.title}</h3>
            <span class="scheme-badge">${scheme.type}</span>
            <p>${scheme.description}</p>
            <a href="scheme.html?id=${scheme.id}" class="btn">View Details</a>
        `;
        container.appendChild(card);
    });
}

// Filter schemes based on criteria
function filterSchemes() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const typeFilter = document.getElementById('type').value;
    const stateFilter = document.getElementById('state').value;
    const incomeFilter = document.getElementById('income').value;

    let filtered = schemes.filter(scheme => {
        return (
            (scheme.title.toLowerCase().includes(searchTerm) || scheme.description.toLowerCase().includes(searchTerm)) &&
            (typeFilter === '' || scheme.type === typeFilter) &&
            (stateFilter === '' || scheme.state === stateFilter) &&
            (incomeFilter === '' || scheme.incomeRange === incomeFilter)
        );
    });

    const schemesGrid = document.getElementById('schemes-grid');
    const noResults = document.getElementById('no-results');

    if (filtered.length === 0) {
        schemesGrid.innerHTML = '';
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
        renderSchemes(filtered, schemesGrid);
    }
}

// Load all schemes on schemes page
function loadAllSchemes() {
    const schemesGrid = document.getElementById('schemes-grid');
    if (!schemesGrid) return;

    // Show loading skeleton
    schemesGrid.innerHTML = Array(6).fill().map(() => `
        <div class="scheme-card">
            <div class="skeleton skeleton-title"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text short"></div>
        </div>
    `).join('');

    setTimeout(() => {
        renderSchemes(schemes, schemesGrid);
    }, 500);
}

// Load scheme details
function loadSchemeDetails() {
    const id = getURLParameter('id');
    const content = document.getElementById('scheme-content');
    if (!content || !id) return;

    const scheme = schemes.find(s => s.id == id);
    if (!scheme) {
        content.innerHTML = '<p>Scheme not found.</p>';
        return;
    }

    content.innerHTML = `
        <h1>${scheme.title}</h1>
        <span class="scheme-badge">${scheme.type}</span>
        <section>
            <h2>Description</h2>
            <p>${scheme.description}</p>
        </section>
        <section>
            <h2>Eligibility</h2>
            <p>${scheme.eligibility}</p>
        </section>
        <section>
            <h2>Benefits</h2>
            <p>${scheme.benefits}</p>
        </section>
        <section>
            <h2>Deadline</h2>
            <p>${scheme.deadline}</p>
        </section>
        <section>
            <h2>Documents Required</h2>
            <ul>
                ${scheme.documents.map(doc => `<li>${doc}</li>`).join('')}
            </ul>
        </section>
        <section>
            <a href="${scheme.applyLink}" class="btn" target="_blank">Apply Now</a>
            <button onclick="saveScheme(${scheme.id})" class="btn btn-save" style="margin-left: 10px;">Save to Dashboard</button>
        </section>
    `;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Homepage
    if (document.getElementById('featured-grid')) {
        loadFeaturedSchemes();
    }

    // Schemes page
    if (document.getElementById('schemes-grid')) {
        loadAllSchemes();
        document.getElementById('search').addEventListener('input', filterSchemes);
        document.getElementById('type').addEventListener('change', filterSchemes);
        document.getElementById('state').addEventListener('change', filterSchemes);
        document.getElementById('income').addEventListener('change', filterSchemes);
    }

    // Scheme detail page
    if (document.getElementById('scheme-content')) {
        loadSchemeDetails();
    }

    // Dashboard page
    if (document.getElementById('saved-schemes-grid')) {
        loadSavedSchemes();
    }

    // Check Auth on every page load
    checkAuth();
});

// --- Authentication Logic ---

function registerUser(e) {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    
    const user = { name, email, password };
    localStorage.setItem('udaanpathUser', JSON.stringify(user));
    alert('Registration successful! Please login.');
    window.location.href = 'login.html';
}

function loginUser(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const savedUserStr = localStorage.getItem('udaanpathUser');
    if (savedUserStr) {
        const savedUser = JSON.parse(savedUserStr);
        if (savedUser.email === email && savedUser.password === password) {
            localStorage.setItem('udaanpathLoggedIn', 'true');
            alert('Login successful!');
            window.location.href = 'dashboard.html';
            return;
        }
    }
    alert('Invalid email or password.');
}

function logoutUser(e) {
    if(e) e.preventDefault();
    localStorage.removeItem('udaanpathLoggedIn');
    alert('Logged out successfully.');
    window.location.href = 'index.html';
}

function checkAuth() {
    const isLoggedIn = localStorage.getItem('udaanpathLoggedIn') === 'true';
    const loginLink = document.getElementById('nav-login');
    const logoutLink = document.getElementById('nav-logout');
    const dashboardLink = document.getElementById('nav-dashboard');

    if (isLoggedIn) {
        if (loginLink) loginLink.style.display = 'none';
        if (logoutLink) logoutLink.style.display = 'block';
        if (dashboardLink) dashboardLink.style.display = 'block';
        
        // Update dashboard name if exists
        const nameDisplay = document.getElementById('user-name-display');
        if(nameDisplay) {
            const user = JSON.parse(localStorage.getItem('udaanpathUser'));
            if(user) nameDisplay.innerText = user.name;
        }
    }
}

// --- Bookmarking (Dashboard) Logic ---

function saveScheme(id) {
    const isLoggedIn = localStorage.getItem('udaanpathLoggedIn') === 'true';
    if (!isLoggedIn) {
        alert('Please login to save schemes.');
        window.location.href = 'login.html';
        return;
    }

    let saved = JSON.parse(localStorage.getItem('udaanpathSavedSchemes') || '[]');
    if (!saved.includes(id)) {
        saved.push(id);
        localStorage.setItem('udaanpathSavedSchemes', JSON.stringify(saved));
        alert('Scheme saved to Dashboard!');
    } else {
        alert('This scheme is already saved.');
    }
}

function loadSavedSchemes() {
    const isLoggedIn = localStorage.getItem('udaanpathLoggedIn') === 'true';
    if (!isLoggedIn) {
        window.location.href = 'login.html';
        return;
    }

    const savedIds = JSON.parse(localStorage.getItem('udaanpathSavedSchemes') || '[]');
    const grid = document.getElementById('saved-schemes-grid');
    const noSaved = document.getElementById('no-saved-schemes');

    if (savedIds.length === 0) {
        grid.innerHTML = '';
        noSaved.style.display = 'block';
    } else {
        noSaved.style.display = 'none';
        const savedSchemes = schemes.filter(s => savedIds.includes(s.id));
        renderSchemes(savedSchemes, grid);
    }
}

// --- Eligibility Logic ---

function checkEligibility(e) {
    e.preventDefault();
    const state = document.getElementById('elig-state').value;
    const income = document.getElementById('elig-income').value;
    const type = document.getElementById('elig-type').value;

    let matched = schemes.filter(scheme => {
        return (
            (state === 'All' || scheme.state === 'All' || scheme.state === state) &&
            (income === '' || scheme.incomeRange === 'All' || scheme.incomeRange === income) &&
            (type === '' || scheme.type === type)
        );
    });

    const resultsGrid = document.getElementById('eligibility-results');
    if (matched.length === 0) {
        resultsGrid.innerHTML = '<p class="no-results">No exact matches found. Try broadening your criteria.</p>';
    } else {
        renderSchemes(matched, resultsGrid);
    }
}