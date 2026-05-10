const jerseyData = [
  { name:"Emirate Elite", price:"₦17,000", num:17000, img:"https://img.temucdn.com/thumbnail/s/6549b47ca4181723880b49d6659c0357_bf3c4c90f17d.jpeg?imageView2/2/w/1300/q/80/format/avif", rating:5, stock:12 },
  { name:"Apex Predator", price:"₦15,000", num:15000, img:"https://img.kwcdn.com/thumbnail/s/5733110bbfa2cd5cf18fc768630b817e_db189ccfe6d8.jpeg?imageView2/2/w/1300/q/80/format/avif", rating:5, stock:8 },
  { name:"Golden Era", price:"₦15,000", num:15000, img:"https://img.kwcdn.com/thumbnail/s/3ac3399d865f7b8291bfdfda8f3aff46_05c2bd5c3a78.jpg?imageView2/2/w/1300/q/80/format/avif", rating:4, stock:3 },
  { name:"Neon Racer", price:"₦17,000", num:17000, img:"https://img-1.kwcdn.com/thumbnail/s/b939688bab7551ec0f3f3b8214898dcc_4cc8f868e150.jpg?imageView2/2/w/1300/q/80/format/avif", rating:5, stock:15 },
  { name:"Shadow Camo", price:"₦17,000", num:17000, img:"https://img.kwcdn.com/product/fancy/cd07fe71-77d5-4ca1-bfe6-fa3fe215bd75.jpg?imageView2/2/w/800/q/70/format/avif", rating:4, stock:6 },
  { name:"Frostbite", price:"₦17,000", num:17000, img:"https://img-1.kwcdn.com/thumbnail/s/4f893987507400d88789de6c4537f4bb_b608aa84028e.jpg?imageView2/2/w/1300/q/80/format/avif", rating:5, stock:2 },
  { name:"Vintage 98", price:"₦17,000", num:17000, img:"https://img-1.kwcdn.com/product/fancy/5f8d86d4-ccbd-46dd-b474-b2e4faed81f3.jpg?imageView2/2/w/800/q/70/format/avif", rating:5, stock:10 },
  { name:"Cyber Punk", price:"₦7,000", num:7000, img:"https://img.kwcdn.com/product/open/07f86364e42e426b9c5d8a28aae52dc8-goods.jpeg?imageView2/2/w/800/q/70/format/avif", rating:4, stock:7 },
  { name:"Infrared", price:"₦17,000", num:17000, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTan0yQ2raNTW-pvcK_5anbimHdNlTneS_fUw&s", rating:5, stock:4 },
  { name:"Obsidian", price:"₦7,000", num:7000, img:"https://img.kwcdn.com/product/fancy/e279a36a-fd74-4529-a9d5-c396f7314d92.jpg?imageView2/2/w/800/q/70/format/avif", rating:5, stock:9 },
  { name:"Solar Flare", price:"₦17,000", num:17000, img:"https://img.kwcdn.com/product/open/5d3ceea8667f4b379a9872758fab1d40-goods.jpeg?imageView2/2/w/800/q/70/format/avif", rating:4, stock:11 },
  { name:"Midnight Blitz", price:"₦7,000", num:7000, img:"https://img.kwcdn.com/product/fancy/6ef8ebe3-be6f-495b-8ec3-201b1d787ca0.jpg?imageView2/2/w/800/q/70/format/avif", rating:5, stock:5 },
  { name:"Atomic Refractor", price:"₦7,000", num:7000, img:"https://img.kwcdn.com/product/fancy/d0576fd2-e474-402e-8753-ac21fd0c5e13.jpg?imageView2/2/w/800/q/70/format/avif", rating:4, stock:3 },
  { name:"Classic Pinstripe", price:"₦7,000", num:7000, img:"https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/3ae935e9d6794484ea5d005ba298ed56.jpg?imageView2/2/w/800/q/70/format/avif", rating:5, stock:20 },
  { name:"Carbon Slam", price:"₦5,000", num:5000, img:"https://img.kwcdn.com/product/fancy/4cfc7544-9275-4da5-9166-8d7c8f84dbee.jpg?imageView2/2/w/800/q/70/format/avif", rating:5, stock:2 },
  { name:"Arctic Shift", price:"₦5,000", num:5000, img:"https://img.kwcdn.com/product/fancy/09b2cebb-3437-439f-98d7-c0dc663c4d3b.jpg?imageView2/2/w/800/q/70/format/avif", rating:4, stock:8 },
  { name:"Valor Edition", price:"₦5,000", num:5000, img:"https://img.kwcdn.com/product/fancy/market/a33072a46cb5fab6ae850dd25780b5f4_reuCafYxKzbHf.jpg?imageView2/2/w/800/q/70/format/avif", rating:5, stock:6 },
  { name:"Rush Hour", price:"₦7,000", num:7000, img:"https://img.kwcdn.com/product/fancy/99951491-ce35-4c44-834f-7992bdf3203f.jpg?imageView2/2/w/800/q/70/format/avif", rating:4, stock:4 },
  { name:"Legendary 23", price:"₦5,000", num:5000, img:"https://img.kwcdn.com/product/fancy/3b9707d3-1c14-4168-bee9-d2922b95ff46.jpg?imageView2/2/w/800/q/70/format/avif", rating:5, stock:1 },
  { name:"Glory Seeker", price:"₦5,000", num:5000, img:"https://img.kwcdn.com/product/fancy/8530d34b-baa9-433d-a388-7f0d12de8f60.jpg?imageView2/2/w/800/q/70/format/avif", rating:5, stock:7 },
  { name:"Mystic Aura", price:"₦7,000", num:7000, img:"https://img.kwcdn.com/product/open/466da811295a402dbd65b5008e47de0a-goods.jpeg?imageView2/2/w/800/q/70/format/avif", rating:4, stock:12 }
];

let cart = [], wishlist = [], loyaltyPoints = 0, searchTerm = "", currentUser = null;
let reviews = JSON.parse(localStorage.getItem('capgift_reviews')||'[]');
let currentQuickViewItem = null;

// ==================== TYPING ANIMATION ====================
const phrases = ["Limited to 100 pieces", "Exclusive Drop", "Premium Quality", "Streetwear Icon", "🔥 Limited Edition 🔥"];
let phraseIndex = 0, charIndex = 0, isDeleting = false;
function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  const typedText = document.getElementById('typedText');
  if(!typedText) return;
  if(isDeleting) {
    typedText.innerText = currentPhrase.substring(0, charIndex-1);
    charIndex--;
  } else {
    typedText.innerText = currentPhrase.substring(0, charIndex+1);
    charIndex++;
  }
  if(!isDeleting && charIndex === currentPhrase.length) { isDeleting = true; setTimeout(typeEffect, 2000); return; }
  if(isDeleting && charIndex === 0) { isDeleting = false; phraseIndex = (phraseIndex+1)%phrases.length; }
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}
setTimeout(typeEffect, 500);

// ==================== SALE TIMER ====================
let saleTime = 2*3600 + 15*60 + 33;
function updateSaleTimer() { 
  if(saleTime<=0){ document.getElementById('saleTimer').innerText='00:00:00'; return; } 
  saleTime--; 
  const h=Math.floor(saleTime/3600); 
  const m=Math.floor((saleTime%3600)/60); 
  const s=saleTime%60; 
  const timerElem = document.getElementById('saleTimer');
  if(timerElem) timerElem.innerText=`${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`; 
}
setInterval(updateSaleTimer,1000);

// ==================== CUSTOMER REVIEWS ====================
function renderReviews() { 
  const container=document.getElementById('reviewsList'); 
  if(container) container.innerHTML=reviews.map(r=>`<div class="review-item"><div class="review-rating">${'⭐'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div><div class="review-text">${r.text}</div><div class="review-author">— ${r.author}</div></div>`).join(''); 
}
document.getElementById('submitReviewBtn')?.addEventListener('click',()=>{ 
  const name=document.getElementById('reviewName').value; 
  const rating=parseInt(document.getElementById('reviewRating').value); 
  const text=document.getElementById('reviewText').value; 
  if(name&&text){ 
    reviews.unshift({author:name,rating:rating,text:text}); 
    if(reviews.length>10) reviews.pop(); 
    localStorage.setItem('capgift_reviews',JSON.stringify(reviews)); 
    renderReviews(); 
    document.getElementById('reviewName').value=''; 
    document.getElementById('reviewText').value=''; 
    showToast("Review added!"); 
  } else showToast("Fill all fields!"); 
});
renderReviews();

// ==================== QUICK VIEW ====================
function openQuickView(idx) { 
  currentQuickViewItem=idx; 
  const i=jerseyData[idx]; 
  document.getElementById('qvImage').src=i.img; 
  document.getElementById('qvName').innerText=i.name; 
  document.getElementById('qvRating').innerHTML='⭐'.repeat(i.rating)+'☆'.repeat(5-i.rating); 
  document.getElementById('qvPrice').innerText=i.price; 
  document.getElementById('quickViewModal').classList.add('open'); 
}
document.getElementById('closeQuickView')?.addEventListener('click',()=>document.getElementById('quickViewModal').classList.remove('open'));
document.getElementById('qvAddToCart')?.addEventListener('click',()=>{ if(currentQuickViewItem!==null){ addToCart(currentQuickViewItem); document.getElementById('quickViewModal').classList.remove('open'); } });

// ==================== CART FUNCTIONS ====================
function showToast(msg) { 
  const t=document.getElementById('toastMessage'); 
  if(t){ t.innerText=msg; t.style.opacity='1'; setTimeout(()=>t.style.opacity='0',2000); } 
}
function updateCartUI() { 
  document.getElementById('cartCount').innerText=cart.length; 
  document.getElementById('floatCartCount').innerText=cart.length; 
  renderCartModal(); 
}
function getTotal() { return cart.reduce((s,i)=>s+i.num,0); }
function renderCartModal() { 
  const cont=document.getElementById('cartDetailedItems'), totalSpan=document.getElementById('cartTotalNaira'); 
  if(!cont) return;
  if(cart.length===0){ cont.innerHTML='<div style="padding:15px;">Empty 🔥</div>'; totalSpan.innerText='0'; return; } 
  let html=''; 
  cart.forEach((item,i)=>{ html+=`<div class="cart-item"><span>${item.name}</span><span>${item.price} <button onclick="removeFromCart(${i})">✖</button></span></div>`; }); 
  cont.innerHTML=html; 
  totalSpan.innerText=getTotal().toLocaleString(); 
}
window.removeFromCart = function(i){ cart.splice(i,1); updateCartUI(); showToast("Removed"); };
function flyToCart(btn) { 
  const r=btn.getBoundingClientRect(); 
  const cr=document.getElementById('floatingCartIcon').getBoundingClientRect(); 
  const f=document.createElement('div'); 
  f.className='flying-item'; 
  f.style.position='fixed'; 
  f.style.width='30px'; 
  f.style.height='30px'; 
  f.style.borderRadius='50%'; 
  f.style.background='#ffd700'; 
  f.style.left=r.left+r.width/2+'px'; 
  f.style.top=r.top+r.height/2+'px'; 
  document.body.appendChild(f); 
  setTimeout(()=>{ 
    f.style.left=cr.left+cr.width/2+'px'; 
    f.style.top=cr.top+cr.height/2+'px'; 
    f.style.width='10px'; 
    f.style.height='10px'; 
    f.style.opacity='0.5'; 
  },10); 
  setTimeout(()=>f.remove(),500); 
}
function addToCart(idx) { 
  const i=jerseyData[idx]; 
  cart.push({...i}); 
  const e=Math.floor(i.num/1000); 
  loyaltyPoints+=e; 
  document.getElementById('loyaltyPoints').innerText=loyaltyPoints; 
  updateCartUI(); 
  showToast(`✅ ${i.name} added! +${e} pts`); 
}
window.addToCartAndFly = function(btn,idx){ addToCart(idx); flyToCart(btn); };
document.getElementById('whatsappCartBtn').onclick = () => { 
  if(cart.length===0){ showToast("Empty!"); return; } 
  let msg = "🛍️ *My Capgift Order*%0A"; 
  cart.forEach(i=>{ msg+=`• ${i.name} - ${i.price}%0A`; }); 
  msg+=`%0A📦 Total: ₦${getTotal().toLocaleString()}`; 
  window.open(`https://wa.me/2348138444055?text=${msg}`,'_blank'); 
};

// ==================== WISHLIST FUNCTIONS ====================
function addToWishlist(idx) { 
  const i=jerseyData[idx]; 
  if(!wishlist.find(w=>w.name===i.name)){ 
    wishlist.push({...i}); 
    updateWishlistUI(); 
    showToast(`❤️ ${i.name} added`); 
  } 
}
function removeFromWishlist(idx) { 
  wishlist.splice(idx,1); 
  updateWishlistUI(); 
  showToast("Removed"); 
}
function updateWishlistUI() { 
  document.getElementById('wishlistCount').innerText=wishlist.length; 
  const cont=document.getElementById('wishlistItems'); 
  if(!cont) return; 
  if(wishlist.length===0){ cont.innerHTML='<div style="padding:15px;">Empty ❤️</div>'; return; } 
  let html=''; 
  wishlist.forEach((item,i)=>{ html+=`<div class="wishlist-item"><span>${item.name}</span><span>${item.price} <button onclick="removeFromWishlist(${i})">✖</button></span></div>`; }); 
  cont.innerHTML=html; 
}

// ==================== BUILD JERSEY GRID ====================
function buildGrid() {
  const g=document.getElementById('jerseyGrid'); 
  if(!g) return;
  const f=jerseyData.filter(j=>j.name.toLowerCase().includes(searchTerm.toLowerCase())); 
  if(f.length===0){ g.innerHTML='<p style="text-align:center;padding:30px;">No jerseys found 🔍</p>'; return; }
  g.innerHTML=f.map((j,idx)=>{ 
    const o=jerseyData.findIndex(orig=>orig.name===j.name); 
    const stockClass=j.stock<5?'low-stock':''; 
    const stockText=j.stock<5?`⚠️ ${j.stock} left`:'⭐ In Stock'; 
    const exclusiveBadge=j.exclusive?'<div class="capgift-exclusive-badge"><i class="fas fa-crown"></i> EXCLUSIVE</div>':''; 
    return `<div class="jersey-card">${exclusiveBadge}<div class="stock-badge ${stockClass}">${stockText}</div><button class="quick-view-btn" onclick="openQuickView(${o})"><i class="fas fa-eye"></i> Quick View</button><img class="jersey-img" src="${j.img}"><div class="jersey-info"><h3 style="font-size:0.9rem;">${j.name}</h3><div class="rating">${'⭐'.repeat(j.rating)}${j.rating<5?'☆':''}</div><div class="price">${j.price}</div><div class="card-actions"><button class="buy-btn" onclick="addToCartAndFly(this, ${o})"><i class="fas fa-cart-plus"></i> Buy</button><button class="wishlist-btn" onclick="addToWishlist(${o})"><i class="fas fa-heart"></i></button></div></div></div>`; 
  }).join('');
}

// ==================== ACCOUNT MODAL ====================
let users = JSON.parse(localStorage.getItem('capgift_users')||'{}');
function updateAccountUI() { 
  if(currentUser){ 
    document.getElementById('loginPage').style.display='none'; 
    document.getElementById('signupPage').style.display='none'; 
    document.getElementById('accountInfo').style.display='block'; 
    document.getElementById('userName').innerText=currentUser; 
    document.getElementById('userPoints').innerText=loyaltyPoints; 
    const tabsDiv = document.querySelector('.account-tabs');
    if(tabsDiv) tabsDiv.style.display='none';
  } else { 
    document.getElementById('loginPage').style.display='block'; 
    document.getElementById('signupPage').style.display='block'; 
    document.getElementById('accountInfo').style.display='none'; 
    const tabsDiv = document.querySelector('.account-tabs');
    if(tabsDiv) tabsDiv.style.display='flex';
    document.getElementById('loginPage').classList.add('active');
    document.getElementById('signupPage').classList.remove('active');
  } 
}
document.getElementById('loginBtn').onclick=()=>{ 
  const em=document.getElementById('loginEmail').value; 
  const pw=document.getElementById('loginPassword').value; 
  if(users[em]&&users[em].password===pw){ 
    currentUser=em; 
    localStorage.setItem('capgift_currentUser',currentUser); 
    updateAccountUI(); 
    showToast(`Welcome!`); 
    document.getElementById('accountModal').classList.remove('open'); 
  } else if(em&&pw){ showToast("Invalid"); } 
  else showToast("Enter email&password"); 
};
document.getElementById('signupBtn').onclick=()=>{ 
  const name = document.getElementById('signupName').value;
  const em=document.getElementById('signupEmail').value; 
  const pw=document.getElementById('signupPassword').value; 
  const confirm = document.getElementById('signupConfirm').value;
  if(!name || !em || !pw){ showToast("Fill all fields"); return; }
  if(pw !== confirm){ showToast("Passwords don't match"); return; }
  if(users[em]){ showToast("Email exists"); return; }
  users[em]={password:pw, name:name}; 
  localStorage.setItem('capgift_users',JSON.stringify(users)); 
  currentUser=em; 
  localStorage.setItem('capgift_currentUser',currentUser); 
  updateAccountUI(); 
  showToast(`Welcome ${name}!`); 
  document.getElementById('accountModal').classList.remove('open'); 
};
document.getElementById('logoutBtn').onclick=()=>{ 
  currentUser=null; 
  localStorage.removeItem('capgift_currentUser'); 
  document.getElementById('loginEmail').value=''; 
  document.getElementById('loginPassword').value=''; 
  document.getElementById('signupName').value='';
  document.getElementById('signupEmail').value='';
  document.getElementById('signupPassword').value='';
  document.getElementById('signupConfirm').value='';
  updateAccountUI(); 
  showToast("Logged out"); 
  document.getElementById('accountModal').classList.remove('open'); 
};
const savedUser=localStorage.getItem('capgift_currentUser'); 
if(savedUser){ currentUser=savedUser; updateAccountUI(); } else updateAccountUI();

// ==================== ACCOUNT MODAL TOGGLES ====================
const accountModal = document.getElementById('accountModal');
document.getElementById('openAccountModal').onclick = () => accountModal.classList.add('open');
document.getElementById('closeAccountModal').onclick = () => accountModal.classList.remove('open');
const tabBtns = document.querySelectorAll('.account-tab');
const loginPage = document.getElementById('loginPage');
const signupPage = document.getElementById('signupPage');
tabBtns.forEach(btn => {
  btn.onclick = () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if(btn.dataset.page === 'login') {
      loginPage.classList.add('active');
      signupPage.classList.remove('active');
    } else {
      signupPage.classList.add('active');
      loginPage.classList.remove('active');
    }
  };
});

// ==================== COUNTERS ====================
let fans=1284567, designs=500, editions=100, sold=99999;
setInterval(()=>{ fans+=Math.floor(Math.random()*10); document.getElementById('counterFans').innerText=fans.toLocaleString(); },20000);
setInterval(()=>{ designs+=Math.floor(Math.random()*2); document.getElementById('counterDesigns').innerText=designs; },25000);
setInterval(()=>{ sold+=Math.floor(Math.random()*50); document.getElementById('counterSold').innerText=sold.toLocaleString(); },15000);

function updateCountdown() { 
  const target=new Date(); 
  target.setDate(target.getDate()+14); 
  target.setHours(0,0,0,0); 
  const diff=target-new Date(); 
  document.getElementById('days').innerText=Math.floor(diff/(86400000)); 
  document.getElementById('hours').innerText=String(Math.floor((diff%86400000)/3600000)).padStart(2,'0'); 
  document.getElementById('minutes').innerText=String(Math.floor((diff%3600000)/60000)).padStart(2,'0'); 
  document.getElementById('seconds').innerText=String(Math.floor((diff%60000)/1000)).padStart(2,'0'); 
}
setInterval(updateCountdown,1000); updateCountdown();

// ==================== LIVE SALES ====================
const liveNames=["Chidi O.","Adaeze K.","Tunde A.","Blessing E.","Michael R."];
function showLiveSale(){ 
  const n=liveNames[Math.floor(Math.random()*liveNames.length)]; 
  const i=jerseyData[Math.floor(Math.random()*jerseyData.length)]; 
  const d=document.getElementById('liveSale'); 
  if(d){ d.innerHTML=`🔥 ${n} bought ${i.name}!`; d.style.opacity='1'; setTimeout(()=>d.style.opacity='0',4000); } 
}
setTimeout(showLiveSale,5000); setInterval(showLiveSale,14000);

// ==================== CUSTOM CURSOR ====================
const cursor=document.getElementById('customCursor'); 
document.addEventListener('mousemove',(e)=>{ if(cursor){ cursor.style.left=e.clientX+'px'; cursor.style.top=e.clientY+'px'; } });
document.querySelectorAll('button, .buy-btn, .cart-preview, .floating-cart, .whatsapp-float, .loyalty-btn, .search-toggle, .theme-toggle, .wishlist-toggle, .account-btn').forEach(el=>{ 
  el.addEventListener('mouseenter',()=>cursor?.classList.add('hover')); 
  el.addEventListener('mouseleave',()=>cursor?.classList.remove('hover')); 
});
document.getElementById('floatingCartIcon')?.addEventListener('mouseenter',()=>cursor?.classList.add('cart-hover')); 
document.getElementById('floatingCartIcon')?.addEventListener('mouseleave',()=>cursor?.classList.remove('cart-hover'));

// ==================== INTRO ANIMATION ====================
const introOverlay=document.getElementById('introOverlay'), mainSite=document.getElementById('mainSite');
setTimeout(()=>{ 
  introOverlay.style.opacity='0'; 
  introOverlay.style.visibility='hidden'; 
  mainSite.classList.add('visible'); 
  setTimeout(()=>introOverlay.style.display='none',800); 
},2000);

// ==================== SEARCH ====================
document.getElementById('searchToggle').onclick=()=>{ const c=document.getElementById('searchContainer'); if(c) c.style.display=c.style.display==='none'?'flex':'none'; };
document.getElementById('searchBtn').onclick=()=>{ searchTerm=document.getElementById('searchInput').value; buildGrid(); };
document.getElementById('clearSearchBtn').onclick=()=>{ searchTerm=''; document.getElementById('searchInput').value=''; buildGrid(); };

// ==================== MODAL TOGGLES ====================
const cartModal=document.getElementById('cartModal'), paymentModal=document.getElementById('paymentModal'), termsModal=document.getElementById('termsModal'), loyaltyModal=document.getElementById('loyaltyModal'), sizeGuideModal=document.getElementById('sizeGuideModal'), wishlistModal=document.getElementById('wishlistModal');
document.getElementById('cartBtn').onclick=()=>{ cartModal.classList.add('open'); renderCartModal(); };
document.getElementById('closeCartBtn').onclick=()=>cartModal.classList.remove('open');
document.getElementById('floatingCartIcon').onclick=()=>{ cartModal.classList.add('open'); renderCartModal(); };
document.getElementById('viewTermsLink').onclick=(e)=>{ e.preventDefault(); termsModal.classList.add('open'); };
document.getElementById('closeTermsBtn').onclick=()=>termsModal.classList.remove('open');
document.getElementById('loyaltyBtn').onclick=()=>{ document.getElementById('modalPoints').innerText=loyaltyPoints; loyaltyModal.classList.add('open'); };
document.getElementById('closeLoyaltyBtn').onclick=()=>loyaltyModal.classList.remove('open');
document.getElementById('wishlistBtn').onclick=()=>{ wishlistModal.classList.add('open'); updateWishlistUI(); };
document.getElementById('closeWishlistBtn').onclick=()=>wishlistModal.classList.remove('open');
document.getElementById('closeSizeGuideBtn')?.addEventListener('click',()=>sizeGuideModal.classList.remove('open'));

// ==================== PAYMENT ====================
const agreeCB=document.getElementById('agreeTerms'); const paymentDetailsDiv=document.getElementById('paymentDetails');
document.getElementById('checkoutBtn').onclick=()=>{ 
  if(cart.length===0){ showToast("Cart empty!"); return; } 
  if(!agreeCB.checked){ showToast("Accept Terms!"); return; } 
  document.getElementById('paymentSummary').innerHTML=`<ul>${cart.map(i=>`<li>${i.name} - ${i.price}</li>`).join('')}</ul><p><strong>Total: ₦${getTotal().toLocaleString()}</strong></p>`; 
  paymentDetailsDiv.innerHTML="Select method"; 
  document.querySelectorAll('input[name="paymentMethod"]').forEach(r=>r.checked=false); 
  paymentModal.classList.add('open'); 
};
document.querySelectorAll('input[name="paymentMethod"]').forEach(r=>r.onchange=()=>{ 
  const v=r.value, total=getTotal(); 
  if(v==='card') paymentDetailsDiv.innerHTML=`<div class="card-input-form"><input placeholder="Card Number"><input placeholder="Name"><div class="card-row"><input placeholder="MM/YY"><input placeholder="CVV"></div></div>`; 
  else if(v==='transfer') paymentDetailsDiv.innerHTML=`<div>🏦 Transfer to Capgift, Acc:0123456789, Amount: ₦${total.toLocaleString()}</div>`; 
  else paymentDetailsDiv.innerHTML=`<div>📱 Dial *894*160#, Amount: ₦${total.toLocaleString()}</div>`; 
});
document.getElementById('confirmPaymentBtn').onclick=()=>{ 
  const s=document.querySelector('input[name="paymentMethod"]:checked'); 
  if(!s){ showToast("Select method"); return; } 
  const e=Math.floor(getTotal()/1000); 
  loyaltyPoints+=e; 
  document.getElementById('loyaltyPoints').innerText=loyaltyPoints; 
  showToast(`✅ Order confirmed! +${e} points`); 
  cart=[]; updateCartUI(); 
  paymentModal.classList.remove('open'); 
  cartModal.classList.remove('open'); 
  agreeCB.checked=false; 
};
document.getElementById('cancelPaymentBtn').onclick=()=>paymentModal.classList.remove('open');
window.onclick=(e)=>{ 
  if(e.target===paymentModal) paymentModal.classList.remove('open'); 
  if(e.target===termsModal) termsModal.classList.remove('open'); 
  if(e.target===cartModal) cartModal.classList.remove('open'); 
  if(e.target===loyaltyModal) loyaltyModal.classList.remove('open'); 
  if(e.target===sizeGuideModal) sizeGuideModal.classList.remove('open'); 
  if(e.target===wishlistModal) wishlistModal.classList.remove('open'); 
  if(e.target===accountModal) accountModal.classList.remove('open'); 
  if(e.target===document.getElementById('quickViewModal')) document.getElementById('quickViewModal').classList.remove('open'); 
};

// ==================== CONTACT & NEWSLETTER ====================
document.getElementById('contactForm').onsubmit=(e)=>{ e.preventDefault(); showToast("✨ Message sent!"); e.target.reset(); };
document.getElementById('newsletterBtn').onclick=()=>{ const em=document.getElementById('newsletterEmail').value; if(em) showToast(`📧 Welcome! Coupon sent`); else showToast("Enter email!"); };

// ==================== BACK TO TOP ====================
const backBtn=document.getElementById('backToTop'); 
window.addEventListener('scroll',()=>{ if(window.scrollY>300) backBtn.style.display='flex'; else backBtn.style.display='none'; }); 
backBtn.onclick=()=>{ window.scrollTo({top:0,behavior:'smooth'}); };

// ==================== DARK MODE ====================
let isLight=false; const toggle=document.getElementById('darkLightToggle'); 
toggle.onclick=()=>{ isLight=!isLight; document.body.classList.toggle('light',isLight); toggle.innerHTML=isLight?'<i class="fas fa-sun"></i>':'<i class="fas fa-moon"></i>'; };

// ==================== INITIALIZE ====================
buildGrid(); updateCartUI();