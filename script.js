// Sample data for multiple-choice questions
const mcqQuestions = [
    {
        question: "Who invented the battery?",
        options: ["Thomas Edison", "Alessandro Volta", "Nikola Tesla", "Michael Faraday"],
        correctAnswer: "Alessandro Volta"
    },
    {
        question: "What is the SI unit of electric potential?",
        options: ["Ampere", "Volt", "Ohm", "Watt"],
        correctAnswer: "Volt"
    },
    {
        question: "Who invented the electric dynamo?",
        options: ["Thomas Edison", "Alessandro Volta", "Nikola Tesla", "Michael Faraday"],
        correctAnswer: "Michael Faraday"
    },
    {
        question: "What did Nikola Tesla invent?",
        options: ["Battery", "Electric Dynamo", "Alternating Current Motor", "Incandescent Light Bulb"],
        correctAnswer: "Alternating Current Motor"
    },
    {
        question: "What was the first commercial gas turbine used for?",
        options: ["Electric Power Generation", "Aircraft Propulsion", "Railway Locomotives", "Industrial Heating"],
        correctAnswer: "Electric Power Generation"
    },
    {
        question: "What is the main challenge of integrating variable renewable energy sources (VRES)?",
        options: ["High Cost", "Intermittency", "Low Efficiency", "Complex Technology"],
        correctAnswer: "Intermittency"
    },
    {
        question: "Who discovered the photovoltaic (PV) effect, and in what year?",
        options: ["Thomas Edison in 1879", "Alessandro Volta in 1800", "Edmond Becquerel in 1839", "Nikola Tesla in 1888"],
        correctAnswer: "Edmond Becquerel in 1839"
    }
];

// Sample data for fill-in-the-gap questions
const fillGapQuestions = [
    {
        question: "The first commercially viable electric light bulb was invented by __________.",
        correctAnswer: "Thomas Edison"
    },
    {
        question: "The War of the Currents was between __________ and __________.",
        correctAnswer: "Edison, Tesla"
    },
    {
        question: "In 1882, Thomas Edison achieved his vision of a full-scale central power station called __________, which distributed electricity to end-users in New York City.",
        correctAnswer: "Pearl Street Station"
    },
    {
        question: "The first 110 kV transmission line in Europe was built in the __________.",
        correctAnswer: "German Empire"
    },
    {
        question: "The first reactor to produce electricity from nuclear energy was __________.",
        correctAnswer: "Experimental Breeder Reactor I"
    },
    {
        question: "The first utility-scale wind farms appeared in __________ in the 1980s.",
        correctAnswer: "California"
    },
    {
        question: "The first offshore wind farm was installed in __________ in 1991.",
        correctAnswer: "Denmark"
    },
    {
        question: "In an oligopoly, when firms agree to fix prices or limit production, it is known as __________.",
        correctAnswer: "collusion"
    },
    {
        question: "A formal agreement among competing firms to control prices or limit production is called a __________.",
        correctAnswer: "cartel"
    },
    {
        question: "A __________ is a person, group, or organization that has an interest in a system since it is a member of its environment, influences it, and is affected by it in a direct or indirect way.",
        correctAnswer: "stakeholder"
    },
    {
        question: "A __________ is an individual decision maker that accepts the rules and constraints of the game(s) that participates in and behaves strategically given the information available, his preferences and his objectives.",
        correctAnswer: "player"
    },
    {
        question: "An __________ is a persistent individual or collective entity with physical, social or economic substance that interacts with other entities in a dynamic system framework.",
        correctAnswer: "agent"
    },
    {
        question: "The legal entity that owns and operates for commercial purposes, from a single to a portfolio of different technologies generation/storage assets is called a __________.",
        correctAnswer: "producer"
    },
    {
        question: "The entity that buys electricity from the wholesale market or directly from the producers and sells it to the end users is called a __________.",
        correctAnswer: "supplier"
    },
    {
        question: "The entity that aggregates a number of end-users that own resources, like prosumers, producers or a mix of them is called an __________.",
        correctAnswer: "aggregator"
    },
    {
        question: "The entity that can represent large energy volumes into the wholesale markets and achieve better positioning and reduced non-energy costs is called a __________.",
        correctAnswer: "trader/ESCO"
    },
    {
        question: "The entity responsible for the operation of its system, which can have either a physical or an economic interpretation is called an __________.",
        correctAnswer: "operator"
    },
    {
        question: "The entity that is legally entitled to supervise the energy industry and is concerned about its sustainability is called a __________.",
        correctAnswer: "regulator"
    },
    {
        question: "The four desirable properties of a market clearing mechanism are __________, __________, __________, and __________.",
        correctAnswer: ["Market efficiency (social welfare maximization)", "cost recovery", "incentive compatibility", "revenue adequacy"]
    },
    {
        question: "In a __________ auction, multiple identical items are sold, and all winning bidders pay the same price, which is typically the highest rejected bid (the 'losing' bid).",
        correctAnswer: "uniform-price"
    },
    {
        question: "In a __________ auction, the highest bid wins, but the winner pays the second-highest bid amount.",
        correctAnswer: "second-price sealed-bid"
    },
    {
        question: "In a __________ auction, bidders typically bid slightly below their true valuation to maximize profit while maintaining a chance of winning. Highest bidder wins.",
        correctAnswer: "first-price sealed-bid"
    }

];

// Sample data for drag-and-drop questions
const dragDropQuestions = [
    {
        question: "Match the following inventors with their inventions:",
        draggables: ["Alessandro Volta", "Michael Faraday", "Nikola Tesla"],
        dropTargets: ["Inventor of the Battery: __________", "Inventor of the Electric Dynamo: __________", "Inventor of the Alternating Current Motor: __________"],
        correctAnswers: ["Alessandro Volta", "Michael Faraday", "Nikola Tesla"]
    },
    {
        question: "Match the following events with their years:",
        draggables: ["1882", "1839", "1893"],
        dropTargets: ["Year of Pearl Street Station: __________", "Year of PV effect discovery: __________", "Year of World's Columbian Exposition: __________"],
        correctAnswers: ["1882", "1839", "1893"]
    },
    {
        question: "Match the following terms with their correct descriptions:",
        draggables: ["Monopoly", "Liberalization", "Privatization"],
        dropTargets: [
            "__________: The only supplier of electricity in a given service territory, where consumers do not have a choice of supplier.",
            "__________: The process of removing government restrictions and regulations to encourage competition, efficiency, and economic growth.",
            "__________: The transfer of ownership of public utilities from the government to private companies. Encourages competition and reduces government spending"
        ],
        correctAnswers: ["Monopoly", "Liberalization", "Privatization"]
    },
    {
        question: "Match the following terms with their correct descriptions:",
        draggables: [
            "Exclusive control over a market by a single company",
            "Transfer of ownership from public to private sector",
            "Economies of scale leading to lower costs",
            "Potential for higher prices and reduced consumer choice",
            "Efficiency improvements and innovation incentives",
            "Risk of reduced public accountability and potential job losses"
        ],
        dropTargets: [
            "Monopoly: __________",
            "Privatisation: __________",
            "Pros of Monopoly: __________",
            "Cons of Monopoly: __________",
            "Pros of Privatisation: __________",
            "Cons of Privatisation: __________"
        ],
        correctAnswers: [
            ["Exclusive control over a market by a single company", "Monopoly: __________"],
            ["Transfer of ownership from public to private sector", "Privatisation: __________"],
            ["Economies of scale leading to lower costs", "Pros of Monopoly: __________"],
            ["Potential for higher prices and reduced consumer choice", "Cons of Monopoly: __________"],
            ["Efficiency improvements and innovation incentives", "Pros of Privatisation: __________"],
            ["Risk of reduced public accountability and potential job losses", "Cons of Privatisation: __________"]
        ]
    },
    {
        question: "Match the following market structures with their correct descriptions:",
        draggables: [
            "Single seller with no close substitutes",
            "Few dominant firms with high barriers to entry",
            "Many firms selling identical products",
            "Many firms selling differentiated products"
        ],
        dropTargets: [
            "Monopoly: __________",
            "Oligopoly: __________",
            "Perfect Competition: __________",
            "Monopolistic Competition: __________"
        ],
        correctAnswers: [
            ["Single seller with no close substitutes", "Monopoly: __________"],
            ["Few dominant firms with high barriers to entry", "Oligopoly: __________"],
            ["Many firms selling identical products", "Perfect Competition: __________"],
            ["Many firms selling differentiated products", "Monopolistic Competition: __________"]
        ]
    },
    {
        question: "Match the following trading mechanisms with their correct descriptions:",
        draggables: [
            "Bilateral trade (traders exchange in pairs)",
            "Pool (traders submit multi-part bids to auctions with complex rules)"
        ],
        dropTargets: [
            "Least centralized: __________",
            "Most centralized: __________"
        ],
        correctAnswers: [
            ["Bilateral trade (traders exchange in pairs)", "Least centralized: __________"],
            ["Pool (traders submit multi-part bids to auctions with complex rules)", "Most centralized: __________"]
        ]
    },
    {
        question: "Monopoly, privatisation: what is it and what are the pros and cons?",
        draggables: [],
        dropTargets: [],
        correctAnswers: []
    }
];

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to get a random subset of questions (max 5)
function getRandomQuestions(questions, maxQuestions) {
    shuffleArray(questions); // Shuffle the questions
    return questions.slice(0, maxQuestions); // Return only the first `maxQuestions`
}

// Store the current set of questions
let currentMCQs = [];
let currentFillGaps = [];
let currentDragDrops = [];

// Function to display multiple-choice questions
function displayMCQQuestions() {
    const mcqContainer = document.getElementById('mcq-questions');
    mcqContainer.innerHTML = ''; // Clear previous questions

    currentMCQs = getRandomQuestions(mcqQuestions, 5); // Get 5 random MCQs
    currentMCQs.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            ${q.options.map(option => `
                <label>
                    <input type="radio" name="mcq${index}" value="${option}">
                    ${option}
                </label><br>
            `).join('')}
            <p class="correct-answer" id="mcq-correct-answer${index}" style="display: none;">Correct Answer: ${q.correctAnswer}</p>
        `;
        mcqContainer.appendChild(questionDiv);
    });
}

// Function to display fill-in-the-gap questions
function displayFillGapQuestions() {
    const fillGapContainer = document.getElementById('fill-gap-questions');
    fillGapContainer.innerHTML = ''; // Clear previous questions

    currentFillGaps = getRandomQuestions(fillGapQuestions, 5); // Get 5 random fill-in-the-gap questions
    currentFillGaps.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            <input type="text" id="fill-gap${index}">
            <p class="correct-answer" id="fill-gap-correct-answer${index}" style="display: none;">Correct Answer: ${q.correctAnswer}</p>
        `;
        fillGapContainer.appendChild(questionDiv);
    });
}

// Function to display drag-and-drop questions
function displayDragDropQuestions() {
    const dragDropContainer = document.getElementById('drag-drop-questions');
    dragDropContainer.innerHTML = ''; // Clear previous questions

    currentDragDrops = getRandomQuestions(dragDropQuestions, 5); // Get 1 random drag-and-drop question
    currentDragDrops.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            <div id="draggable-items${index}">
                ${q.draggables.map((draggable, i) => `
                    <div class="draggable" draggable="true" data-answer="${q.correctAnswers[i]}">${draggable}</div>
                `).join('')}
            </div>
            <div id="drop-targets${index}">
                ${q.dropTargets.map((target, i) => `
                    <div class="drop-target-container">
                        <div class="drop-target" data-answer="${q.correctAnswers[i]}">${target}</div>
                        <button class="clear-button" onclick="clearDropTarget(this)">Clear</button>
                    </div>
                `).join('')}
            </div>
        `;
        dragDropContainer.appendChild(questionDiv);
    });

    // Add drag-and-drop event listeners
    addDragDropListeners();
}

// Function to clear a drop target
function clearDropTarget(button) {
    const dropTarget = button.previousElementSibling; // Get the drop target element
    const draggableItem = dropTarget.querySelector('.draggable'); // Get the draggable item inside the drop target

    if (draggableItem) {
        // Move the draggable item back to the draggable area
        const draggableItemsContainer = document.getElementById('draggable-items0'); // Assuming only one question is displayed
        draggableItemsContainer.appendChild(draggableItem);

        // Reset the drop target content
        dropTarget.innerHTML = dropTarget.getAttribute('data-original-text') || dropTarget.innerHTML;
    }
}

// Function to add drag-and-drop event listeners
function addDragDropListeners() {
    const draggableItems = document.querySelectorAll('.draggable');
    const dropTargets = document.querySelectorAll('.drop-target');

    let draggedItem = null;

    draggableItems.forEach(item => {
        item.addEventListener('dragstart', () => {
            draggedItem = item;
            item.classList.add('dragging');
        });

        item.addEventListener('dragend', () => {
            draggedItem = null;
            item.classList.remove('dragging');
        });
    });

    dropTargets.forEach(target => {
        // Store the original text of the drop target
        target.setAttribute('data-original-text', target.innerHTML);

        target.addEventListener('dragover', (e) => {
            e.preventDefault(); // Allow dropping
        });

        target.addEventListener('drop', (e) => {
            e.preventDefault();
            if (draggedItem && target.innerHTML.includes('__________')) {
                target.innerHTML = target.innerHTML.replace('__________', draggedItem.textContent);
                target.setAttribute('data-dropped', draggedItem.getAttribute('data-answer'));
            }
        });
    });
}

// Function to check drag-and-drop answers
function checkDragDropAnswers() {
    let correct = 0;
    const dropTargets = document.querySelectorAll('.drop-target');
    dropTargets.forEach(target => {
        const correctAnswer = target.getAttribute('data-answer');
        const userAnswer = target.getAttribute('data-dropped');
        if (correctAnswer === userAnswer) {
            correct++;
            target.style.backgroundColor = '#2ecc71'; // Green for correct
        } else {
            target.style.backgroundColor = '#e74c3c'; // Red for incorrect
        }
    });
    return correct; // Return the number of correct answers
}

// Function to check answers and display results
function checkAnswers() {
    // Check drag-and-drop answers
    const correctDragDrop = checkDragDropAnswers();

    // Check multiple-choice answers
    let correctMCQ = 0;
    currentMCQs.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="mcq${index}"]:checked`);
        const correctAnswerElement = document.getElementById(`mcq-correct-answer${index}`);
        correctAnswerElement.style.display = 'block'; // Show the correct answer

        if (selectedOption && selectedOption.value === q.correctAnswer) {
            correctMCQ++;
            correctAnswerElement.classList.add('correct'); // Add class for correct answer
            correctAnswerElement.classList.remove('incorrect');
        } else {
            correctAnswerElement.classList.add('incorrect'); // Add class for incorrect answer
            correctAnswerElement.classList.remove('correct');
        }
    });

    // Check fill-in-the-gap answers
    let correctFillGap = 0;
    currentFillGaps.forEach((q, index) => {
        const userAnswer = document.getElementById(`fill-gap${index}`).value.trim();
        const correctAnswerElement = document.getElementById(`fill-gap-correct-answer${index}`);
        correctAnswerElement.style.display = 'block'; // Show the correct answer

        if (userAnswer.toLowerCase() === q.correctAnswer.toLowerCase()) {
            correctFillGap++;
            correctAnswerElement.classList.add('correct'); // Add class for correct answer
            correctAnswerElement.classList.remove('incorrect');
        } else {
            correctAnswerElement.classList.add('incorrect'); // Add class for incorrect answer
            correctAnswerElement.classList.remove('correct');
        }
    });

    // Display results
    const results = document.getElementById('results');
    results.innerHTML = `
        <p>Multiple Choice Questions: ${correctMCQ} out of ${currentMCQs.length} correct</p>
        <p>Fill in the Gap Questions: ${correctFillGap} out of ${currentFillGaps.length} correct</p>
        <p>Drag-and-Drop Questions: ${correctDragDrop} out of ${document.querySelectorAll('.drop-target').length} correct</p>
    `;
}

// Function to refresh all questions
function refreshAllQuestions() {
    displayMCQQuestions(); // Refresh MCQs
    displayFillGapQuestions(); // Refresh fill-in-the-gap questions
    displayDragDropQuestions(); // Refresh drag-and-drop questions
    document.getElementById('results').innerHTML = ''; // Clear previous results
}

// Display questions when the page loads
window.onload = function() {
    displayMCQQuestions();
    displayFillGapQuestions();
    displayDragDropQuestions();

    // Add a button to check answers
    const checkButton = document.createElement('button');
    checkButton.textContent = 'Check Answers';
    checkButton.onclick = checkAnswers;
    document.getElementById('buttons-section').appendChild(checkButton);

    // Add a button to refresh all questions
    const refreshButton = document.createElement('button');
    refreshButton.textContent = 'Refresh All Questions';
    refreshButton.onclick = refreshAllQuestions;
    refreshButton.style.marginLeft = '10px'; // Add some spacing between buttons
    document.getElementById('buttons-section').appendChild(refreshButton);
};

// Function to clear a drop target
function clearDropTarget(button) {
    // Find the drop target associated with the "Clear" button
    const dropTarget = button.previousElementSibling;

    // Check if there's a draggable item inside the drop target
    const draggableItem = dropTarget.querySelector('.draggable');

    if (draggableItem) {
        // Move the draggable item back to the draggable area
        const draggableItemsContainer = document.getElementById('draggable-items0'); // Assuming only one question is displayed
        draggableItemsContainer.appendChild(draggableItem);

        // Reset the drop target to its original state
        dropTarget.innerHTML = dropTarget.getAttribute('data-original-text');
    }
}