// --- Updated QUOTES Structure (Array of Objects) ---
const QUOTES = [
    // --- Original Quotes (with sources) ---
    { text: "At the end of the day ... it's night.", source: "Anonymous" },
    { text: "Life is short. Smile while you still have teeth.", source: "Anonymous" },
    { text: "Never argue, just explain why you're right.", source: "Internet Humor" },
    { text: "Common sense is like deodorant. The people who need it most never use it.", source: "Anonymous Quip" },
    { text: "Some people graduate with honors, Some are just honored to graduate.", source: "Academic Humor" },
    { text: "Life is like a sewer… what you get out of it depends on what you put into it.", source: "Tom Lehrer (Likely)" },
    { text: "Behind every great man is a woman rolling her eyes.", source: "Folklore/Jim Carrey" },
    { text: "Age is merely the number of years the world has been enjoying you. Cheers to you!", source: "Proverbial Twist" },
    { text: "If at first you don't succeed, then skydiving definitely isn't for you.", source: "Anonymous" },
    { text: "Insanity is hereditary; you get it from your children.", source: "Sam Levenson" },
    { text: "Light travels faster than sound. This is why some people appear bright until you hear them speak.", source: "Steven Wright (Popularized)" },
    { text: "Some cause happiness wherever they go; others whenever they go.", source: "Oscar Wilde" },
    { text: "I used to think I was indecisive, but now I'm not so sure.", source: "Anonymous" },
    { text: "Life is like a box of chocolates. It doesn't last long if you're fat.", source: "Internet Humor" },
    { text: "You're never too old to learn something stupid.", source: "Anonymous" },
    { text: "Everyone has a photographic memory. Some just don't have film.", source: "Anonymous" },
    { text: "Why do they call it rush hour when nothing moves?", source: "Robin Williams (Popularized)" },
    { text: "To steal ideas from one person is plagiarism; to steal from many is research.", source: "Steven Wright (Popularized)" },
    { text: "I am on a seafood diet. I see food and I eat it.", source: "Dieting Humor" },
    { text: "Doing nothing is hard, you never know when you're done.", source: "Anonymous" },
    { text: "Sometimes when you fall, its not that you are weak, The floor is just slippery.", source: "Internet Meme" },
    { text: "If you think nobody cares if you're alive, try missing a couple of payments.", source: "Dark Humor" },
    { text: "Some people are like clouds. When they disappear, it's a beautiful day.", source: "Anonymous" },
    { text: "Life is not a fairy tale. If you lose your shoe at midnight, you're drunk.", source: "Modern Quip" },
    { text: "An apple a day keeps anyone away if you throw it hard enough.", source: "Anonymous" },
    { text: "If you failed at success then don't worry , you are still successful at failing.", source: "Self-Help Sarcasm" },
    { text: "Experience is something you don't get until just after you need it.", source: "Anonymous Proverb" },
    { text: "Hard work pays off in the future. Laziness pays off now.", source: "Anonymous" },
    { text: "Change is inevitable, except from a vending machine.", source: "Anonymous" },
    { text: "Money can't buy happiness, but it sure makes misery easier to live with.", source: "Anonymous" },
    { text: "Life is like a box of chocolates. It doesn't last long if you're fat.", source: "Internet Humor" }, // Duplicate, kept for completeness
    { text: "Go F[ERROR] Yourself [FIX] ;)", source: "Self-Created" },
    { text: "Peace begins with a P and ends with an E.", source: "Wordplay" },
    { text: "A kid who plays with fire will get burned... or become a firefighter.", source: "Twisted Warning" },
    { text: "Death is hereditary.", source: "Dark Humor" },
    { text: "Some people are like Slinkies. Not really good for anything, but you can't help but smile when you see one tumble down the stairs.", source: "Internet Humor" },
    { text: "Sometimes all you need is a litte push ... from a cliff.", source: "Self-Created" },
    { text: "In French there is a term called 'L'esprit de l'escalier' , I don't know what it means google it.", source: "Self-Created" },
    { text: "Why crack your fingers when you can just finger your.... [ERROR]", source: "Self-Created" },
    { text: "Why die trying when you can just try [ERROR]", source: "Self-Created" },
    { text: "Umm, Interesting...", source: "Self-Created" },
    { text: "Hah! Pranks on you, there is no quote here!", source: "Self-Created" },
    { text: "She was right, You are an idiot.", source: "Self-Created" },
    { text: "Just how much time do you have on your hands?", source: "Self-Created" },
    { text: "I'm leaking your search history.", source: "Self-Created" },

    // --- New Quotes (added in previous response) ---
    { text: "I’m not anti-social. I’m anti-idiot.", source: "Anonymous" },
    { text: "My favorite exercise is a cross between a lunge and a crunch. I call it lunch.", source: "Anonymous" },
    { text: "I want to be remembered as the person who always brought the snacks.", source: "Anonymous" },
    { text: "If I was a dog, I’d be my own best friend.", source: "Anonymous" },
    { text: "I’m not saying I hate you, but I would unplug your life support to charge my phone.", source: "Dark Humor" },
    { text: "I like my passwords how I like my jokes: complex and difficult to understand.", source: "Anonymous" },
    { text: "The difference between genius and stupidity is that genius has its limits.", source: "Anonymous" },
    { text: "I’m so good at sleeping I can do it with my eyes closed.", source: "Anonymous" },
    { text: "I found my purpose in life: to annoy everyone else.", source: "Anonymous" },
    { text: "I love deadlines. I love the whooshing noise they make as they go by.", source: "Douglas Adams (Popularized)" },
    { text: "Procrastination is the art of keeping up with yesterday.", source: "Anonymous" },
    { text: "Adulting is mostly just moving things from one side of the room to the other.", source: "Anonymous" },
    { text: "I’m great at multitasking. I can worry, be useless, and overthink all at once.", source: "Anonymous" },
    { text: "I’m sorry for what I said when I was hungry.", source: "Anonymous" },
    { text: "They say 'Do what you love,' so I quit my job and started sleeping.", source: "Anonymous" },
    { text: "The best way to get a project done faster is to start it later.", source: "Anonymous" },
    { text: "My mind is like a browser with 19 tabs open, 3 of them frozen, and where is that music coming from?", source: "Internet Humor" },
    { text: "Self-control is knowing you should, but not doing it anyway.", source: "Anonymous" },
    { text: "I'm not clumsy, I'm just fighting a gravity battle and losing.", source: "Anonymous" },
    { text: "Life is a soup and I am a fork.", source: "Anonymous" },
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

const BASE_TYPING_DELAY_MIN = 30;
const BASE_TYPING_DELAY_MAX = 50;
const PUNCTUATION_PAUSE = 500;
const PUNCTUATION = ['.', ',', ';', '!', '?', '—', '…'];
const KEY_PRESS_SOUND = new Audio('./key_press.mp3');
const quoteDisplay = document.getElementById('quote-display');
const generateBtn = document.getElementById('generate-btn');
const instaLink = document.getElementById('insta-link');
const quoteBox = document.getElementById('quote-box');
// New element reference for the source
const quoteSourceDisplay = document.getElementById('quote-source-display'); 

// State variables
let buttonClickCount = 0;
let instaClickCount = 0;
let isTyping = false;

// Function to play sound and reset it immediately
function playKeyPressSound() {
    if (KEY_PRESS_SOUND) {
        KEY_PRESS_SOUND.currentTime = 0; 
        KEY_PRESS_SOUND.volume = 0.5; 
        KEY_PRESS_SOUND.play().catch(e => {
            // console.error("Audio playback blocked:", e);
        });
    }
}

// --- 1. Typing Animation Function (Modified to accept text and source)
function typeQuote(quoteText, quoteSource, charIndex = 0) {
    // If typing is already in progress, stop the new call
    if (isTyping && charIndex === 0) return; 

    // Combine text and source for the full typing sequence
    const fullText = `${quoteText}\n— ${quoteSource}`;
    
    // Check if we are starting a new quote sequence
    if (charIndex === 0) {
        isTyping = true;
        generateBtn.disabled = true;
        quoteDisplay.textContent = '';
        if (quoteSourceDisplay) {
            quoteSourceDisplay.textContent = ''; // Clear source display too
        }
    }
    
    if (charIndex < fullText.length) {
        const char = fullText.charAt(charIndex);
        
        // Check if we are typing the main quote or the source
        const isSource = charIndex >= quoteText.length;

        // 1. Play Sound
        if (char !== ' ' && char !== '\n') {
            playKeyPressSound();
        }

        // 2. Append Character
        if (char === '\n') {
            // Newline detected, switch to source display if available
            if (quoteSourceDisplay) {
                // Do nothing to the quoteDisplay content on newline
            }
        } else if (isSource && quoteSourceDisplay) {
            // If it's the source part, append to the source element
            quoteSourceDisplay.textContent += char;
        } else {
            // Otherwise, append to the main quote element
            quoteDisplay.textContent += char;
        }


        // 3. Determine Variable Delay
        let delay;
        const randomBaseDelay = Math.floor(Math.random() * (BASE_TYPING_DELAY_MAX - BASE_TYPING_DELAY_MIN + 1)) + BASE_TYPING_DELAY_MIN;
        delay = randomBaseDelay;

        // Add extra delay for punctuation
        if (PUNCTUATION.includes(char)) {
            delay += PUNCTUATION_PAUSE; 
        }
        
        // Add a slight pause at the end of the quote text before the source starts
        if (charIndex === quoteText.length - 1) {
            delay += 500;
        }

        // 4. Recursive Call for Next Character
        setTimeout(() => {
            typeQuote(quoteText, quoteSource, charIndex + 1);
        }, delay);
        
    } else {
        // Typing finished
        isTyping = false;
        generateBtn.disabled = false;
    }
}

// --- 2. Quote Generation and Button Logic (Modified to handle object)
function handleGenerateClick() {
    if (generateBtn.classList.contains('cooldown') || isTyping) {
        return;
    }

    // Shake Effect Logic
    quoteBox.classList.remove('shake', 'shake-intense'); 
    quoteBox.classList.add('shake');
    
    if (buttonClickCount >= 5) {
        quoteBox.classList.add('shake-intense');
    }

    setTimeout(() => {
        quoteBox.classList.remove('shake', 'shake-intense');
    }, 500); 


    // Pick a random quote object 
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    const quoteObject = QUOTES[randomIndex];
    
    // Start the typing effect using the object properties
    typeQuote(quoteObject.text, quoteObject.source);

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
    event.preventDefault(); 
    
    instaClickCount++;

    const messages = [
        "Not so early.",
        "YOu want to stalk me or what",
        "Dude chill, I'm a guy"
    ];

    if (instaClickCount <= messages.length) {
        alert(messages[instaClickCount - 1]);
    } else {
        window.location.href = "https://www.instagram.com/your_instagram_id"; 
        instaLink.removeEventListener('click', handleInstaClick); 
    }
}

// --- Event Listeners ---
generateBtn.addEventListener('click', handleGenerateClick);

if (instaLink) {
    instaLink.addEventListener('click', handleInstaClick);
}