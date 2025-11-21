const QUOTES = [
"At the end of the day ... it's night.",
"Life is short. Smile while you still have teeth.",
"Never argue, just explain why they are right.",
"Common sense is like deodorant. The people who need it most never use it.",
"Some people graduate with honors, Some are just honored to graduate.",
"Life is like a sewer… what you get out of it depends on what you put into it.",
"Behind every great man is a woman rolling her eyes.",
"Age is merely the number of years the world has been enjoying you. Cheers to you!",
"If at first you don't succeed, then skydiving definitely isn't for you.",
"Insanity is hereditary; you get it from your children.",
"Light travels faster than sound. This is why some people appear bright until you hear them speak.",
"Some cause happiness wherever they go; others whenever they go.",
"I used to think I was indecisive, but now I'm not so sure.",
"Life is like a box of chocolates. It doesn't last long if you're fat.",
"You're never too old to learn something stupid.",
"Everyone has a photographic memory. Some just don't have film.",
"Why do they call it rush hour when nothing moves?",
"To steal ideas from one person is plagiarism; to steal from many is research.",
"I am on a seafood diet. I see food and I eat it.",
"Doing nothing is hard, you never know when you're done.",
"Sometimes when you fall, its not that you are weak, The floor is just slippery.",
"If you think nobody cares if you're alive, try missing a couple of payments.",
"Some people are like clouds. When they disappear, it's a beautiful day.",
"Life is not a fairy tale. If you lose your shoe at midnight, you're drunk.",
"An apple a day keeps anyone away if you throw it hard enough.",
"If you failed at success then don't worry , you are still successful at failing.",
"Experience is something you don't get until just after you need it.",
"Hard work pays off in the future. Laziness pays off now.",
"Change is inevitable, except from a vending machine.",
"Money can't buy happiness, but it sure makes misery easier to live with.",
"Life is like a box of chocolates. It doesn't last long if you're fat.",
"Go F[ERROR] Yourself [FIX] ;)",
"Peace begins with a P and ends with a E.",
"A kid who plays with fire will get burned... or become a firefighter.",
"Death is hereditary.",
"Some people are like Slinkies. Not really good for anything, but you can't help but smile when you see one tumble down the stairs.",
"Sometimes all you need is a litte push ... from a cliff.",
"In French there is a term called 'L'esprit de l'escalier' , I don't know what it means google it.",
"Why crack your fingers when you can just finger your.... [ERROR]",
"Why die trying when you can just try [ERROR]",
"Umm, Interesting...",
"Hah! Pranks on you, there is no quote here!",
"She was right, You are an idiot.",
"Just how much time do you have on your hands?",
"I'm leaking your search history.",
];

const BUTTON_TEXT_SEQUENCE = [
    "Generate",
    "More",
    "More !",
    "More !!",
    "More !!!",
    "MORE !!!!",
    "Hit Me Daddy !",
    "OMG !!!",
    "Oh Yeah !",
    "Wait What?",
    "Daddy ?",
    "DADDY !?!",
    "Daddy Chill",
    "COOLDOWN..." 
];

const BASE_TYPING_DELAY_MIN = 50;
const BASE_TYPING_DELAY_MAX = 80;
const PUNCTUATION_PAUSE = 450;
const PUNCTUATION = ['.', ',', ';', '!', '?', '—', '…'];
const KEY_PRESS_SOUND = new Audio('./key_press.mp3');
const quoteDisplay = document.getElementById('quote-display');
const generateBtn = document.getElementById('generate-btn');
const instaLink = document.getElementById('insta-link');
const quoteBox = document.getElementById('quote-box');

// State variables
let buttonClickCount = 0;
let instaClickCount = 0;
let isTyping = false;

// Function to play sound and reset it immediately
function playKeyPressSound() {
    // Only play sound if the browser allows (after user interaction)
    if (KEY_PRESS_SOUND) {
        // Reset time to 0 to allow fast, repeated playback
        KEY_PRESS_SOUND.currentTime = 0; 
        KEY_PRESS_SOUND.volume = 0.5; // Lower volume for less annoyance
        KEY_PRESS_SOUND.play().catch(e => {
            // Catch error if the browser blocks autoplay
            // console.error("Audio playback blocked:", e);
        });
    }
}

// --- 1. Typing Animation Function 
function typeQuote(quote, charIndex = 0) {
    if (isTyping && charIndex === 0) return;
    isTyping = true;
    generateBtn.disabled = true;

    if (charIndex === 0) {
        quoteDisplay.textContent = '';
    }
    
    if (charIndex < quote.length) {
        const char = quote.charAt(charIndex);
        
        // 1. Play Sound (if the character isn't a space, for extra realism)
        if (char !== ' ') {
            playKeyPressSound();
        }

        // 2. Append Character
        quoteDisplay.textContent += char;

        // 3. Determine Variable Delay
        let delay;
        
        // Generate a random delay between MIN and MAX
        const randomBaseDelay = Math.floor(Math.random() * (BASE_TYPING_DELAY_MAX - BASE_TYPING_DELAY_MIN + 1)) + BASE_TYPING_DELAY_MIN;
        
        delay = randomBaseDelay;

        // Add extra delay for punctuation
        if (PUNCTUATION.includes(char)) {
            delay += PUNCTUATION_PAUSE; 
        }

        // 4. Recursive Call for Next Character
        setTimeout(() => {
            typeQuote(quote, charIndex + 1);
        }, delay);
        
    } else {
        // Typing finished
        isTyping = false;
        generateBtn.disabled = false;
    }
}

// --- 2. Quote Generation and Button Logic 
function handleGenerateClick() {
    if (generateBtn.classList.contains('cooldown') || isTyping) {
        return;
    }

    // Shake Effect Logic
    // Remove previous shake classes to allow the animation to restart
    quoteBox.classList.remove('shake', 'shake-intense'); 
    
    // Add the shake class immediately
    quoteBox.classList.add('shake');
    
    // Check if the shake should be intense (e.g., after 5 clicks)
    if (buttonClickCount >= 5) {
        quoteBox.classList.add('shake-intense');
    }

    // Crucial: Remove the class after the animation finishes (0.5s is safe)
    setTimeout(() => {
        quoteBox.classList.remove('shake', 'shake-intense');
    }, 500); 


    // Pick a random quote 
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    const newQuote = QUOTES[randomIndex];
    
    // Start the typing effect
    typeQuote(newQuote);

    // Update button text and count 
    buttonClickCount++;
    const maxIndex = BUTTON_TEXT_SEQUENCE.length - 1;

    if (buttonClickCount < maxIndex) {
        generateBtn.textContent = BUTTON_TEXT_SEQUENCE[buttonClickCount];
    }

    // Enter Cooldown Mode 
    if (buttonClickCount >= maxIndex) {
        generateBtn.textContent = BUTTON_TEXT_SEQUENCE[maxIndex];
        generateBtn.classList.add('cooldown');
        
        setTimeout(() => {
            generateBtn.classList.remove('cooldown');
            generateBtn.textContent = BUTTON_TEXT_SEQUENCE[0];
            buttonClickCount = 0;
        }, 10000); 
    }
}

// --- 3. Stalker Footer Twist Logic ---
function handleInstaClick(event) {
    // Prevent the default link action
    event.preventDefault(); 
    
    instaClickCount++;

    const messages = [
        "Not so early.",
        "YOu want to stalk me or what",
        "Dude chill, I’m a guy"
    ];

    if (instaClickCount <= messages.length) {
        // Display the message temporarily
        alert(messages[instaClickCount - 1]);
    } else {
        // Redirection on the 4th click
        window.location.href = "https://www.instagram.com/your_instagram_id"; 
        instaLink.removeEventListener('click', handleInstaClick); // Remove listener after successful click
    }
}

// --- Event Listeners ---
generateBtn.addEventListener('click', handleGenerateClick);

// Attach the event listener for the Instagram link
if (instaLink) {
    instaLink.addEventListener('click', handleInstaClick);
}