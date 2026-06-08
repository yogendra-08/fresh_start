
Claude is responding

# Build a Cinematic Interactive Birthday Memory Website You are an expert frontend developer and cinematic web experience designer. I want you to build a highly emotional, premium-quality, interactive birthday memory website using modern frontend technologies. This should NOT feel like a no

pasted

and after that write a prompt for ai tool using the created file do the work you just make documentation remaing work i ca n do

20:32

Reading frontend design skill
Reading frontend design skill
Now I'll create the comprehensive PROJECT_GUIDE.md documentation file and then write the AI tool prompt.


Creating the comprehensive PROJECT_GUIDE.md documentation file
Creating the comprehensive PROJECT_GUIDE.md documentation file

Creating the comprehensive PROJECT_GUIDE.md documentation file
PROJECT_GUIDE.md
Done
Now let me create the AI tool prompt file:


Creating the AI tool prompt for building the actual website
Creating the AI tool prompt for building the actual website




Claude is AI and can make mistakes. Please double-check responses.


raw
Ai tool prompt · MD
# 🤖 AI Tool Prompt — Cinematic Birthday Memory Website
## Copy this ENTIRE prompt and paste it into Cursor / Claude / Windsurf / GitHub Copilot
 
---
 
> **Instructions for you:**
> 1. Open your AI coding tool (Cursor IDE is recommended)
> 2. Create a new empty project folder called `birthday-memory-site`
> 3. Open the folder in the AI tool
> 4. Paste the prompt below into the AI chat
> 5. Let it generate all the files
> 6. Follow the PROJECT_GUIDE.md to customize content
 
---
 
## ════════════════════════════════════════════
## THE PROMPT (Copy everything below this line)
## ════════════════════════════════════════════
 
You are an expert frontend developer and cinematic web experience designer.
 
Build a complete, fully working **Cinematic Interactive Birthday Memory Website** as a static HTML/CSS/JS project. I have already planned the architecture — follow it exactly as described below.
 
---
 
## ABSOLUTE RULES
 
1. Use ONLY: HTML5, Tailwind CSS (CDN), Vanilla JavaScript (ES6 modules), GSAP v3, Three.js r128, Typed.js v2, Lenis smooth scroll, StPageFlip
2. DO NOT use React, Vue, Angular, or any JS framework
3. DO NOT use any backend — this is 100% static
4. Create all files with the exact folder structure specified below
5. Every animation must be smooth, cinematic, and premium
6. Mobile-first responsive design — must work perfectly on iPhone and Android
7. Dark luxury aesthetic — no childish or generic UI
8. All JavaScript must use ES6 modules (import/export)
9. No placeholder "lorem ipsum" — write real emotional memory text
---
 
## FOLDER STRUCTURE TO CREATE
 
Create these files exactly:
 
```
index.html
PROJECT_GUIDE.md  ← (already exists, do not overwrite)
 
css/
  main.css
  intro.css
  letters.css
  book.css
  ending.css
  components.css
 
js/
  main.js
  animations/
    gsapAnimations.js
    particles.js
    hearts.js
  components/
    musicPlayer.js
    preloader.js
    modal.js
    book.js
  data/
    memories.js
    bookPages.js
 
assets/
  images/
    memories/       ← (empty folder, add placeholder comment in README)
    book/           ← (empty folder)
    ui/             ← (empty folder)
  videos/
    clips/          ← (empty folder)
  audio/
    README.txt      ← instructions on what audio files to add
```
 
---
 
## DESIGN SYSTEM
 
Apply these globally in `css/main.css` as CSS variables:
 
```css
:root {
  --color-bg: #0f0f0f;
  --color-primary: #ff4d8d;
  --color-soft: #ffb6c1;
  --color-white: #ffffff;
  --color-glass: rgba(255, 255, 255, 0.05);
  --color-glow: rgba(255, 77, 141, 0.3);
  --font-heading: 'Great Vibes', cursive;
  --font-body: 'Poppins', sans-serif;
  --font-quote: 'Playfair Display', serif;
  --transition-smooth: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --blur-glass: blur(20px);
  --shadow-glow: 0 0 30px rgba(255, 77, 141, 0.4);
}
```
 
Load these Google Fonts in the `<head>`:
- Great Vibes
- Poppins (weights: 300, 400, 600)
- Playfair Display (regular + italic)
---
 
## SECTION 1 — CINEMATIC INTRO (build in index.html + intro.css + particles.js)
 
### Layout
- Full viewport height section (`100vh`)
- Background: `#0f0f0f` with radial gradient pink glow at center
- Three.js canvas in absolute position behind everything (z-index: 0)
- Content centered with flexbox
### Three.js Particle System (particles.js)
```javascript
// Create 120 small white/pink star particles
// Random positions across the canvas
// Slow upward drift animation
// Particles twinkle (opacity oscillation using Math.sin + time)
// On mobile: reduce to 60 particles
// Export: initParticles(canvasId) and destroyParticles()
```
 
### Center Content
- Heading: font-family Great Vibes, size clamp(2.5rem, 8vw, 5rem), color white
- Text typed by Typed.js: `"I made something for you..."`
- Typed.js config: typeSpeed 60, backSpeed 0, loop false, showCursor true
### Enter Button
```css
/* Glassmorphism style */
background: rgba(255, 77, 141, 0.15);
border: 1px solid rgba(255, 77, 141, 0.4);
backdrop-filter: blur(10px);
box-shadow: 0 0 30px rgba(255, 77, 141, 0.3);
border-radius: 50px;
padding: 14px 48px;
color: white;
font-family: Poppins;
letter-spacing: 3px;
text-transform: uppercase;
font-size: 0.9rem;
```
 
- Hover: scale(1.05), stronger glow shadow
- Click: GSAP timeline — section fades out (opacity 0, y: -30) → Section 2 fades in
### Music Toggle Button
- Floating in top-right corner (position: fixed)
- Glassmorphism circle button (48px × 48px)
- Shows 🎵 icon when music is off, ⏸ when playing
- Click toggles audio play/pause (audio element, no autoplay)
---
 
## SECTION 2 — FLOATING LETTERS (letters.css + modal.js)
 
### Letter Grid
- Section with `min-height: 100vh`, dark background
- Heading: "Our Memories" in Great Vibes font with pink glow text-shadow
- Grid of letter cards: CSS grid, auto-fill, minmax(160px, 1fr), gap 24px
- On mobile: 2 columns. On desktop: 4-5 columns.
### Letter Card Design (generated from memories.js data)
```css
.letter-card {
  background: var(--color-glass);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: var(--blur-glass);
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  /* Random rotation: -3deg to +3deg (set via JS) */
  /* Idle floating: CSS keyframe animation */
  transition: var(--transition-smooth);
}
 
.letter-card:hover {
  transform: translateY(-8px) scale(1.03) rotate(0deg) !important;
  box-shadow: var(--shadow-glow);
  border-color: var(--color-primary);
}
```
 
- Each card has an emoji icon, a label, and a subtle card number
- Cards have staggered GSAP entrance animation when section enters viewport (ScrollTrigger)
- Mouse parallax: on `mousemove`, cards shift slightly in the direction of cursor (GSAP quickTo)
### Memory Data File (js/data/memories.js)
 
Create this file with at least 12 complete memory objects:
 
```javascript
export const memories = [
  {
    id: 1,
    cardLabel: "⭐ First Memory",
    cardColor: "#ff4d8d",
    cardIcon: "💌",
    title: "The Day Everything Changed",
    date: "January 1, 2023",
    image: "assets/images/memories/memory1.webp",
    text: "Write a beautiful, emotional memory paragraph here. This text will be typed out slowly when the envelope opens. Make it personal, warm, and genuine. Talk about a real moment that mattered.",
    type: "emotional"
  },
  {
    id: 2,
    cardLabel: "😂 Chaotic Moment",
    cardColor: "#c084fc",
    cardIcon: "🎭",
    title: "The Great Disaster",
    date: "March 7, 2023",
    image: "assets/images/memories/memory2.webp",
    text: "Remember that time everything went completely wrong and we ended up laughing until we cried? Write the funny version of that memory here. Be specific, be real, make them smile.",
    type: "funny"
  },
  {
    id: 3,
    cardLabel: "🌙 Late Night",
    cardColor: "#60a5fa",
    cardIcon: "✨",
    title: "3AM Conversations",
    date: "June 14, 2023",
    image: "assets/images/memories/memory3.webp",
    text: "Some of the best conversations happen at 3am when guards are down and honesty flows freely. Write about a meaningful late-night moment here.",
    type: "wholesome"
  },
  {
    id: 4,
    cardLabel: "💪 You Showed Up",
    cardColor: "#34d399",
    cardIcon: "🤝",
    title: "When It Mattered Most",
    date: "August 20, 2023",
    image: "assets/images/memories/memory4.webp",
    text: "Write about a time they were there for you when you really needed someone. Make it real and specific.",
    type: "emotional"
  },
  {
    id: 5,
    cardLabel: "🎉 Birthday Last Year",
    cardColor: "#fb923c",
    cardIcon: "🎂",
    title: "Last Year's Chaos",
    date: "Your birthday last year",
    image: "assets/images/memories/memory5.webp",
    text: "Write about their last birthday celebration here. What happened? What was the best moment?",
    type: "funny"
  },
  {
    id: 6,
    cardLabel: "🌅 That Trip",
    cardColor: "#fbbf24",
    cardIcon: "✈️",
    title: "When We Got Lost",
    date: "October 2023",
    image: "assets/images/memories/memory6.webp",
    text: "Write about a trip or adventure you went on together. The getting lost part. The laughing about it part.",
    type: "wholesome"
  },
  {
    id: 7,
    cardLabel: "💬 That One Text",
    cardColor: "#f472b6",
    cardIcon: "📱",
    title: "The Message That Meant Everything",
    date: "November 2023",
    image: "assets/images/memories/memory7.webp",
    text: "Write about a meaningful text message or conversation. Maybe the one where they said exactly the right thing.",
    type: "emotional"
  },
  {
    id: 8,
    cardLabel: "🍕 Food Memory",
    cardColor: "#ef4444",
    cardIcon: "🍽️",
    title: "That Place We Always Go",
    date: "Multiple times",
    image: "assets/images/memories/memory8.webp",
    text: "Write about your go-to food spot, or a specific meal that became a memory.",
    type: "wholesome"
  },
  {
    id: 9,
    cardLabel: "😭 The Big Cry",
    cardColor: "#818cf8",
    cardIcon: "🫂",
    title: "When We Both Just Cried",
    date: "Sometime",
    image: "assets/images/memories/memory9.webp",
    text: "Write about a vulnerable moment you shared together. The kind that made your friendship deeper.",
    type: "emotional"
  },
  {
    id: 10,
    cardLabel: "🎵 That Song",
    cardColor: "#2dd4bf",
    cardIcon: "🎶",
    title: "Our Unofficial Anthem",
    date: "Always",
    image: "assets/images/memories/memory10.webp",
    text: "Write about a song that reminds you of them or of a specific moment together.",
    type: "wholesome"
  },
  {
    id: 11,
    cardLabel: "🦋 Growth Moment",
    cardColor: "#a78bfa",
    cardIcon: "🌱",
    title: "Look How Far You've Come",
    date: "This year",
    image: "assets/images/memories/memory11.webp",
    text: "Write about something impressive they've grown through this year. Be specific and proud.",
    type: "emotional"
  },
  {
    id: 12,
    cardLabel: "❤️ Just Because",
    cardColor: "#ff4d8d",
    cardIcon: "💝",
    title: "No Reason, Just Love",
    date: "Always and forever",
    image: "assets/images/memories/memory12.webp",
    text: "Write a pure, simple message of appreciation with no specific event. Just why you love having them in your life.",
    type: "wholesome"
  }
];
```
 
### Letter Modal (modal.js)
 
When a letter card is clicked:
 
```javascript
// GSAP Timeline for opening:
// 1. Overlay fades in (dark backdrop, opacity 0 → 0.85, blur 0 → 8px)
// 2. Modal container scales up (scale 0.8 → 1) with elastic ease
// 3. Envelope SVG animation: flap rotates open (rotateX 0 → -180deg)
// 4. Photo fades in below envelope
// 5. Title and date slide up (y: 20 → 0)
// 6. Typed.js starts typing the memory text
 
// Modal HTML structure:
// - Fullscreen overlay (click to close)
// - Modal card (max-width: 600px, glassmorphism, centered)
//   - Close button (X) top right
//   - Envelope SVG with animated flap (CSS/GSAP)
//   - Photo (border-radius: 12px, max-height: 300px, object-fit: cover)
//   - Memory title (Playfair Display, large)
//   - Date (small, muted pink)
//   - Memory text (Poppins, typed character by character)
 
// GSAP Timeline for closing:
// Reverse of opening — scale out, fade overlay
```
 
---
 
## SECTION 3 — MEMORY BOOK (book.js + book.css)
 
### "Open The Book" Button
- Appears below the letter grid
- Large glowing button, Great Vibes font: "Open The Book →"
- On click: GSAP scales in the book container + book container becomes fixed fullscreen overlay
### Book Container
```css
.book-container {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}
```
 
### StPageFlip Setup (book.js)
```javascript
import { PageFlip } from 'page-flip'; // loaded from CDN
 
const pageFlip = new PageFlip(document.getElementById('book'), {
  width: 500,        // page width
  height: 700,       // page height
  showCover: true,
  mobileScrollSupport: true,
  usePortrait: window.innerWidth < 768,  // single page on mobile
  autoSize: true,
});
 
// Load pages from DOM elements
pageFlip.loadFromHTML(document.querySelectorAll('.page'));
 
// Page turn sound
pageFlip.on('flip', () => {
  const audio = new Audio('assets/audio/page-turn.mp3');
  audio.volume = 0.3;
  audio.play().catch(() => {}); // silent fail if blocked
});
```
 
### Book Pages Data (js/data/bookPages.js)
 
Create at least 10 page definitions:
 
```javascript
export const bookPages = [
  {
    id: 'cover',
    type: 'cover',
    title: '[Name]',
    subtitle: 'A Year of Memories',
    date: '2024',
  },
  {
    id: 'page1',
    type: 'photo-full',
    image: 'assets/images/book/book1.webp',
    caption: 'That smile that starts everything.',
  },
  {
    id: 'page2',
    type: 'letter',
    title: 'Dear [Name],',
    text: `Write a long, heartfelt letter here. This is the most emotional page in the book. 
    Speak directly to them. Tell them what they mean to you. 
    Be vulnerable. Be real. Make them cry (happy tears).
    
    You can write multiple paragraphs here. Each paragraph gets its own spacing.
    
    Talk about their qualities. Their laugh. Their weirdness. 
    Why the world is better with them in it.
    
    With all my love,
    [Your name]`,
  },
  {
    id: 'page3',
    type: 'collage',
    images: [
      'assets/images/book/collage1.webp',
      'assets/images/book/collage2.webp',
      'assets/images/book/collage3.webp',
      'assets/images/book/collage4.webp',
    ],
    caption: 'Four moments I never want to forget.',
  },
  {
    id: 'page4',
    type: 'quote',
    quote: '"Some people make the world more special just by being in it."',
    attribution: '— Unknown',
    subtext: 'You are one of those people.',
  },
  {
    id: 'page5',
    type: 'photo-caption',
    image: 'assets/images/book/book5.webp',
    title: 'Remember This Day?',
    caption: 'Write what happened on this specific day. Make it funny or sweet.',
  },
  {
    id: 'page6',
    type: 'video',
    videoSrc: 'assets/videos/clips/clip1.webm',
    poster: 'assets/images/book/video-poster.webp',
    caption: 'A moment too good not to save.',
  },
  {
    id: 'page7',
    type: 'list',
    title: 'Things I Love About You',
    items: [
      'Your laugh is completely contagious',
      'How you make everyone feel included',
      'The way you handle hard things with grace',
      'Your completely unhinged sense of humor',
      'How fiercely loyal you are to people you love',
      'That you always show up, no matter what',
      'Your taste in [music/food/movies]',
      'The fact that you exist, honestly',
    ],
  },
  {
    id: 'page8',
    type: 'photo-full',
    image: 'assets/images/book/book8.webp',
    caption: 'My favorite kind of day.',
  },
  {
    id: 'page9',
    type: 'letter',
    title: 'On This Birthday...',
    text: `Another year older. Another year of watching you grow into someone even more remarkable.
    
    I want you to know that I see how hard you work. I see how much you care. 
    I see the person you're becoming, and I'm in awe.
    
    This birthday, I hope you feel celebrated not just today — but every single day.
    Because you deserve that.
    
    Happy Birthday. I love you more than words can hold.`,
  },
  {
    id: 'back-cover',
    type: 'back-cover',
    text: 'Made with love. Just for you.',
    year: '2024',
  },
];
```
 
### Page HTML Generation
Generate HTML for each page type:
- **cover**: Full bleed dark gradient, name in Great Vibes, subtitle in Poppins
- **photo-full**: Full page photo with caption overlay at bottom
- **letter**: Cream/warm tinted background, handwriting-style font, ink texture
- **collage**: 2×2 grid of photos with thin borders
- **quote**: Centered large quote in Playfair Display italic, decorative lines
- **photo-caption**: Top half photo, bottom half text
- **video**: Video player with custom play button overlay
- **list**: Numbered or dotted list with decorative styling
- **back-cover**: Dark, minimal, closing message
### Book Navigation
- Previous/Next arrow buttons floating on left and right sides
- Page counter: "3 / 10" shown at bottom
- Close button (X) in top right — closes book with GSAP scale-out animation
---
 
## SECTION 4 — CINEMATIC ENDING (ending.css + hearts.js)
 
Triggered when the last book page is reached.
 
### Sequence (GSAP Timeline)
 
```javascript
const endingTimeline = gsap.timeline();
 
endingTimeline
  // Book closes (StPageFlip close animation)
  .add(() => pageFlip.flip(0)) // flip back to cover
  .to('.book-container', { opacity: 0, scale: 0.9, duration: 1, delay: 1 })
  .set('.book-container', { display: 'none' })
  
  // Ending section fades in
  .set('.ending-section', { display: 'flex' })
  .to('.ending-section', { opacity: 1, duration: 1.5 })
  
  // Stars emerge
  .call(() => reinitParticles({ count: 200, color: '#ffb6c1', speed: 0.2 }))
  
  // First message types in
  .call(() => new Typed('.ending-line1', {
    strings: ["Out of all the people in this world..."],
    typeSpeed: 50,
    showCursor: false
  }))
  .to({}, { duration: 2.5 }) // wait for typing
  
  // Second line
  .call(() => new Typed('.ending-line2', {
    strings: ["I'm glad I met you."],
    typeSpeed: 50,
    showCursor: false
  }))
  .to({}, { duration: 2.5 })
  
  // Birthday message explodes in
  .to('.birthday-text', {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: 'back.out(1.7)'
  })
  
  // Floating hearts
  .call(() => launchHearts())
  
  // Optional: music swell (increase volume)
  .call(() => swellMusic());
```
 
### Ending Section HTML
```html
<section class="ending-section">
  <!-- Particle canvas background -->
  <canvas id="ending-particles"></canvas>
  
  <!-- Centered content -->
  <div class="ending-content">
    <p class="ending-line1 font-playfair italic text-white/80"></p>
    <p class="ending-line2 font-playfair italic text-white/80"></p>
    
    <h1 class="birthday-text">
      HAPPY BIRTHDAY ❤️
    </h1>
  </div>
  
  <!-- Hearts container (populated by JS) -->
  <div id="hearts-container"></div>
</section>
```
 
### Hearts Animation (hearts.js)
```javascript
export function launchHearts() {
  const container = document.getElementById('hearts-container');
  const heartEmojis = ['❤️', '💕', '💖', '💗', '💝', '🌸', '✨'];
  
  // Create 30 hearts with random positions and delays
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDelay = Math.random() * 3 + 's';
    heart.style.fontSize = (Math.random() * 20 + 16) + 'px';
    container.appendChild(heart);
  }
}
```
 
```css
.floating-heart {
  position: fixed;
  bottom: -50px;
  animation: floatHeart 4s ease-in forwards;
  pointer-events: none;
}
 
@keyframes floatHeart {
  0% { bottom: -50px; opacity: 1; }
  100% { bottom: 110vh; opacity: 0; transform: translateX(calc(var(--drift, 0) * 1px)) rotate(360deg); }
}
```
 
---
 
## MUSIC PLAYER (musicPlayer.js + components.css)
 
### Floating Player UI
```html
<!-- Fixed position, top-right corner -->
<div id="music-player" class="music-player">
  <button id="music-toggle" class="music-btn">
    <span class="music-icon">🎵</span>
  </button>
  <!-- Optional: track name -->
  <span class="track-name">Birthday Memories</span>
</div>
```
 
```javascript
// musicPlayer.js
export function initMusicPlayer() {
  const audio = new Audio('assets/audio/background.mp3');
  audio.loop = true;
  audio.volume = 0.4;
  
  const btn = document.getElementById('music-toggle');
  let isPlaying = false;
  
  btn.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      btn.querySelector('.music-icon').textContent = '🎵';
    } else {
      audio.play().catch(e => console.log('Audio blocked:', e));
      btn.querySelector('.music-icon').textContent = '⏸';
    }
    isPlaying = !isPlaying;
  });
  
  // Pulse animation when playing
  // Volume fade in on start
  
  return { audio, fadeIn: () => { /* gsap volume fade */ }, swell: () => { /* increase volume */ } };
}
```
 
---
 
## PRELOADER (preloader.js)
 
Show for 2-3 seconds while fonts and scripts load:
 
```html
<div id="preloader">
  <!-- Full screen dark overlay -->
  <!-- Center: animated logo or text -->
  <!-- "Loading memories..." text -->
  <!-- Thin progress bar at bottom (animate width 0 → 100%) -->
</div>
```
 
```javascript
export function initPreloader() {
  const preloader = document.getElementById('preloader');
  
  // Simulate loading progress
  gsap.to('.preloader-bar', { width: '100%', duration: 2.5, ease: 'power1.inOut' });
  
  // Hide after 2.8 seconds
  setTimeout(() => {
    gsap.to(preloader, {
      opacity: 0,
      duration: 0.8,
      onComplete: () => preloader.remove()
    });
  }, 2800);
}
```
 
---
 
## MAIN.JS — Entry Point
 
```javascript
// js/main.js
 
import { initParticles } from './animations/particles.js';
import { initMusicPlayer } from './components/musicPlayer.js';
import { initPreloader } from './components/preloader.js';
import { openLetterModal, closeLetterModal } from './components/modal.js';
import { initBook } from './components/book.js';
import { launchHearts } from './animations/hearts.js';
import { memories } from './data/memories.js';
import { bookPages } from './data/bookPages.js';
 
// Initialize Lenis smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});
 
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
 
// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(true);
 
// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initParticles('intro-canvas');
  initMusicPlayer();
  renderLetterCards();
  initBook(bookPages);
  
  // Enter button
  document.getElementById('enter-btn').addEventListener('click', enterSite);
});
 
function renderLetterCards() {
  const grid = document.getElementById('letters-grid');
  memories.forEach((memory, index) => {
    const card = createLetterCard(memory, index);
    grid.appendChild(card);
  });
  animateCardsIn();
}
 
function createLetterCard(memory, index) {
  const card = document.createElement('div');
  card.className = 'letter-card';
  card.style.setProperty('--card-color', memory.cardColor);
  card.style.transform = `rotate(${(Math.random() - 0.5) * 6}deg)`;
  card.innerHTML = `
    <span class="card-icon">${memory.cardIcon}</span>
    <span class="card-label">${memory.cardLabel}</span>
    <span class="card-number">#${String(memory.id).padStart(2, '0')}</span>
  `;
  card.addEventListener('click', () => openLetterModal(memory));
  return card;
}
```
 
---
 
## ADDITIONAL REQUIREMENTS
 
### Glassmorphism Utility Class
```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
```
 
### Glow Text Effect
```css
.glow-text {
  text-shadow: 0 0 20px rgba(255, 77, 141, 0.6), 0 0 60px rgba(255, 77, 141, 0.3);
}
```
 
### Smooth Page Transitions
Use GSAP to transition between sections:
```javascript
function showSection(sectionId) {
  const section = document.getElementById(sectionId);
  gsap.fromTo(section,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
  );
}
```
 
### Mouse Parallax on Letter Cards
```javascript
document.addEventListener('mousemove', (e) => {
  const cards = document.querySelectorAll('.letter-card');
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const moveX = (e.clientX - centerX) / centerX;
  const moveY = (e.clientY - centerY) / centerY;
  
  cards.forEach((card, i) => {
    const depth = (i % 3 + 1) * 8; // different depths for parallax
    gsap.to(card, {
      x: moveX * depth,
      y: moveY * depth,
      duration: 0.5,
      ease: 'power1.out'
    });
  });
});
```
 
### Mobile Touch Gestures
```javascript
// Swipe detection for book pages
let touchStartX = 0;
document.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX);
document.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    diff > 0 ? pageFlip.flipNext() : pageFlip.flipPrev();
  }
});
```
 
---
 
## HIDDEN EASTER EGG
 
Add a Konami code easter egg:
 
```javascript
// Konami code: ↑ ↑ ↓ ↓ ← → ← → B A
const konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let konamiIndex = 0;
 
document.addEventListener('keydown', (e) => {
  if (e.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      showSecretMessage();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});
 
function showSecretMessage() {
  // Show a fullscreen hidden message in Great Vibes font
  // "You found the secret. Just like I found you. 💕"
  // Fade in, display for 4 seconds, fade out
}
```
 
---
 
## PERFORMANCE REQUIREMENTS
 
Implement all of these:
1. All `<img>` tags: add `loading="lazy"` and `decoding="async"`
2. All video elements: `preload="none"` attribute
3. Three.js: use `BufferGeometry` for particles
4. Add `will-change: transform` to `.letter-card` and `.modal-container`
5. On mobile (`window.innerWidth < 768`): reduce particle count by 50%
6. Kill GSAP timelines on modal close: `timeline.kill()`
7. Use `gsap.set()` for initial states
8. Fonts: use `font-display: swap` (handled by Google Fonts `&display=swap`)
---
 
## COMPLETE index.html STRUCTURE
 
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Happy Birthday 💕</title>
  <!-- Google Fonts, Tailwind, CSS files -->
</head>
<body class="overflow-x-hidden bg-[#0f0f0f]">
  
  <!-- Preloader -->
  <div id="preloader">...</div>
  
  <!-- Music Player (Fixed) -->
  <div id="music-player">...</div>
  
  <!-- Section 1: Intro -->
  <section id="intro-section">
    <canvas id="intro-canvas"></canvas>
    <div class="intro-content">
      <h1><span id="typed-text"></span></h1>
      <button id="enter-btn">Enter</button>
    </div>
  </section>
  
  <!-- Section 2: Letters -->
  <section id="letters-section">
    <h2>Our Memories</h2>
    <div id="letters-grid"></div>
    <button id="open-book-btn">Open The Book →</button>
  </section>
  
  <!-- Letter Modal -->
  <div id="letter-modal" class="hidden">...</div>
  
  <!-- Book Container -->
  <div id="book-container" class="hidden">
    <div id="book"><!-- Pages injected by JS --></div>
    <button id="book-prev">←</button>
    <button id="book-next">→</button>
    <button id="book-close">✕</button>
  </div>
  
  <!-- Section 4: Ending -->
  <section id="ending-section" class="hidden">
    <canvas id="ending-canvas"></canvas>
    <div class="ending-content">
      <p class="ending-line1"></p>
      <p class="ending-line2"></p>
      <h1 class="birthday-text">HAPPY BIRTHDAY ❤️</h1>
    </div>
    <div id="hearts-container"></div>
  </section>
  
  <!-- All CDN Scripts -->
  <!-- Your JS modules -->
  
</body>
</html>
```
 
---
 
## FINAL INSTRUCTIONS FOR THE AI
 
1. Build ALL files listed in the folder structure
2. Write COMPLETE, working code — no placeholder comments like "// add animation here"
3. Every animation must have real GSAP code with proper easing values
4. Every CSS class must have real styles (not empty)
5. Test mentally: the site should work by simply opening index.html
6. The memory text in memories.js should feel real and emotional, not generic
7. The book pages should feel like a real scrapbook — varied layouts, emotional content
8. Mobile must work perfectly — test every interaction for touch
9. The preloader, music player, modal, and book should all function end-to-end
10. DO NOT leave any TODO comments in the final code
This is a gift. Make it beautiful. Make it emotional. Make it unforgettable.
 
## ════════════════════════════════════════════
## END OF PROMPT
## ════════════════════════════════════════════
 
