const profile =[
    {
        profilePic:"image 13.jpg",
        displayPic:"image 12.jpg",
        pendingMessage:4,
        location:"Kolkata , IN",
        name:"Sohom",
        age:17,
        interests:["music","poem"],
        bio:"I am an engineering student with a strong foundation in Python programming and a passion for cutting-edge technologies.",
        isfriend:null
    },
    {
        profilePic:"img ab.jpg",
        displayPic:"image 09.jpg",
        pendingMessage:4,
        location:"Kolkata , IN",
        name:"Soumik",
        age:21,
        interests:["listening music"],
        bio:"I am an engineering student with a strong foundation in dev programming and a passion for cutting-edge technologies.",
        isfriend:null
    },
    {
        profilePic:"img ab2.jpg",
        displayPic:"image 05.jpg",
        pendingMessage:4,
        location:"Kolkata , IN",
        name:"Adarsh",
        age:20,
        interests:["basket ball","diffrent sports"],
        bio:"I am an engineering student with a strong foundation in rust programming and a passion for cutting-edge technologies.",
        isfriend:null
    },
    {
        profilePic:"img c.jpg",
        displayPic:"image 01.jpg",
        pendingMessage:4,
        location:"Kolkata , IN",
        name:"Sayan",
        age:19,
        interests:["music","art"],
        bio:"I am an engineering student with a strong foundation in Python programming and a passion for cutting-edge technologies.",
        isfriend:null
    },
    {
        profilePic:"img ta2.jpg",
        displayPic:"img ta.jpg",
        pendingMessage:4,
        location:"Kolkata , IN",
        name:"Tanish",
        age:20,
        interests:["music","writting"],
        bio:"I am an engineering student with a strong foundation in Python programming and a passion for cutting-edge technologies.",
        isfriend:null
    },
    {
        profilePic:"img s.jpg",
        displayPic:"image 03.jpg",
        pendingMessage:4,
        location:"Kolkata , IN",
        name:"Sagnik",
        age:18,
        interests:["music","gaming"],
        bio:"I am an engineering student with a strong foundation in Python programming and a passion for cutting-edge technologies.",
        isfriend:null
    },
    {
        profilePic:"img u.jpg",
        displayPic:"image 04.jpg",
        pendingMessage:4,
        location:"Kolkata , IN",
        name:"Udit",
        age:21,
        interests:["music","art"],
        bio:"I am an engineering student with a strong foundation in Python programming and a passion for cutting-edge technologies.",
        isfriend:null
    },
    {
        profilePic:"img sou.jpg",
        displayPic:"image 06.jpg",
        pendingMessage:4,
        location:"Kolkata , IN",
        name:"Soumeya",
        age:20,
        interests:["music","dancing"],
        bio:"I am an engineering student with a strong foundation in Python programming and a passion for cutting-edge technologies.",
        isfriend:null
    },
    {
        profilePic:"img sm.jpg",
        displayPic:"image 07.jpg",
        pendingMessage:4,
        location:"Kolkata , IN",
        name:"Soumyajit",
        age:19,
        interests:["music","gaming"],
        bio:"I am an engineering student with a strong foundation in Python programming and a passion for cutting-edge technologies.",
        isfriend:null
    },
    {
        profilePic:"image 08.jpg",
        displayPic:"img t.jpg",
        pendingMessage:4,
        location:"Kolkata , IN",
        name:"Talha",
        age:19,
        interests:["music","gaming"],
        bio:"I am an engineering student with a strong foundation in Python programming and a passion for cutting-edge technologies.",
        isfriend:null
    },
    {
        profilePic:"img y.jpg",
        displayPic:"image 10.jpg",
        pendingMessage:4,
        location:"Kolkata , IN",
        name:"Yashvi",
        age:18,
        interests:["music","travelling"],
        bio:"I am an engineering student with a strong foundation in Python programming and a passion for cutting-edge technologies.",
        isfriend:null
    },
    {
        profilePic:"img ty.jpg",
        displayPic:"image 11.jpg",
        pendingMessage:4,
        location:"Kolkata , IN",
        name:"Taniya",
        age:18,
        interests:["music","travelling"],
        bio:"I am an engineering student with a strong foundation in Python programming and a passion for cutting-edge technologies.",
        isfriend:null
    },
];


let currentProfileIndex = 0;

// Get DOM elements
const mainCard = document.querySelector('.maincard');
const incomingCard = document.querySelector('.incomingcard');
const likeButton = document.querySelector('.ri-hearts-line').parentElement;
const dislikeButton = document.querySelector('.ri-close-line').parentElement;

// Handle touch events
let startX = 0;
let currentX = 0;

function updateCards() {
    currentProfileIndex = (currentProfileIndex + 1) % profile.length;
    const currentUser = profile[currentProfileIndex];
    
    // Reset main card position
    gsap.set(mainCard, {
        x: 0,
        rotation: 0
    });
    
    // Update images
    mainCard.querySelector('img').src = currentUser.displayPic;
    incomingCard.innerHTML = `<img class="w-full h-full object-cover" src="${profile[(currentProfileIndex + 1) % profile.length].displayPic}">`;
    
    // Update name and age
    const nameElement = document.querySelector('.details h1');
    const ageElement = nameElement.nextElementSibling;
    nameElement.textContent = currentUser.name;
    ageElement.textContent = currentUser.age;
    
    // Update bio
    document.querySelector('.bio p').textContent = currentUser.bio;
    
    // Update location
    document.querySelector('.details h3').textContent = currentUser.location;
    
    // Update profile picture
    document.querySelector('.prflimg img').src = currentUser.profilePic;
    
    // Update interests
    const tagsContainer = document.querySelector('.tags');
    tagsContainer.innerHTML = '';
    if (currentUser.interests) {
        currentUser.interests.forEach(interest => {
            tagsContainer.innerHTML += `
                <div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
                    <i class="text-sm ri-music-2-line"></i>   
                    <h3 class="text-sm tracking-tight">${interest}</h3>
                </div>
            `;
        });
    }
}

function likeAnimation() {
    gsap.to(mainCard, {
        x: window.innerWidth + 200,
        rotation: 30,
        duration: 0.5,
        onComplete: updateCards
    });
}

function dislikeAnimation() {
    gsap.to(mainCard, {
        x: -window.innerWidth - 200,
        rotation: -30,
        duration: 0.5,
        onComplete: updateCards
    });
}

mainCard.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

mainCard.addEventListener('touchmove', (e) => {
    currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    gsap.to(mainCard, {
        x: diff,
        rotation: diff * 0.1,
        duration: 0
    });
});

mainCard.addEventListener('touchend', () => {
    const diff = currentX - startX;
    if (Math.abs(diff) > 100) {
        if (diff > 0) {
            likeAnimation();
        } else {
            dislikeAnimation();
        }
    } else {
        gsap.to(mainCard, {
            x: 0,
            rotation: 0,
            duration: 0.5
        });
    }
});

// Mouse events
let isDragging = false;

mainCard.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    currentX = e.clientX;
    const diff = currentX - startX;
    gsap.to(mainCard, {
        x: diff,
        rotation: diff * 0.1,
        duration: 0
    });
});

document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    const diff = currentX - startX;
    if (Math.abs(diff) > 100) {
        if (diff > 0) {
            likeAnimation();
        } else {
            dislikeAnimation();
        }
    } else {
        gsap.to(mainCard, {
            x: 0,
            rotation: 0,
            duration: 0.5
        });
    }
});

// Button events
likeButton.addEventListener('click', likeAnimation);
dislikeButton.addEventListener('click', dislikeAnimation);

// Initialize first profile
updateCards();
