// Example questions for each subject (limited to 2 for each subject)
// You can expand these questions to 50 for each subject
const questions = {
    creative_technologies: [
        { question: "1.What does a green status indicator light signify on a machine?", options: ["The machine needs maintenance", "The machine is running smoothly", "The machine has stopped due to a malfunction", "The machine is turned off"], answer: 1 },
        { question: "2.Explain the relationship between the different colors of status indicator lights and the machine's operational status.?", options: ["Green means the machine is off, yellow means it is running, and red means it is overheating.", "Green means the machine is running smoothly, yellow means it needs maintenance soon, and red means it has malfunctioned or needs an emergency stop.", "Green means the machine is in standby mode, yellow means it is powering up, and red means it is fully operational.", "Green means the machine is ready to be turned on, yellow means it is paused, and red means it is in maintenance mode."], answer: 1 },
        { question: "3.Describe the steps an operator should take when a machine's status indicator changes from green to red.", options: ["Continue normal operations.", "Prepare for routine maintenance.", "Immediately stop the machine, check for the cause of the malfunction, and perform necessary repairs or call for technical support.", "Ignore the light and keep working"], answer: 2 },
        { question: "4.Which of the following scenarios would most likely require the use of a pneumatic actuator over an electric or hydraulic actuator?", options: ["A precision robotic arm in a manufacturing assembly line requiring highly accurate and fine control.", "An industrial valve control system in a remote, explosive-prone environment needing quick response times and safe operation.", "A large construction crane needing to lift heavy loads over long periods of time.", "d.	A small automated home appliance requiring consistent, low power operation."], answer: 1 },
        { question: "5.Which of the following projects would most benefit from using an ultrasonic sensor over a temperature sensor, a light sensor, or a gas sensor when implemented with an Arduino??", options: ["A weather station monitoring the environmental temperature and humidity levels.", "An automated lighting system that adjusts indoor lighting based on ambient light conditions.", "A smart home air quality monitor that detects the presence of harmful gases", "An obstacle-avoiding robot navigating through a dynamically changing environment."], answer: 3 },
        { question: "6.Which of the following scenarios would most benefit from the use of a piezo buzzer over a speaker or a chime as an auditory indicator??", options: ["A public announcement system in a large auditorium requiring clear and high-quality sound for speech and music..", "An alarm system in a factory that needs to alert workers immediately about a critical machine malfunction.", "A doorbell system in a residential home designed to play a pleasant melody when pressed.", "d.	A multimedia installation in an art exhibit where diverse and dynamic sound effects are played to enhance visitor experience."], answer: 1 },
        { question: "7.Which of the following robotic applications would most benefit from using legged locomotion over wheeled or tracked locomotion??", options: ["A warehouse robot designed to transport goods efficiently across smooth floors.", "A search and rescue robot tasked with navigating through rubble and uneven terrain to locate survivors", "An autonomous lawnmower robot responsible for mowing large, flat lawns in residential areas.", "A delivery robot used for transporting packages along city sidewalks and streets."], answer: 1 },
        { question: "8.Which of the following robotic designs would most benefit from the use of hybrid locomotion (combining wheels and legs) over purely wheeled, tracked, or legged locomotion??", options: ["A drone designed to fly and occasionally land on various surfaces for inspection..", "An industrial robot operating on a production line with a need for precise and repetitive movement.", "A planetary exploration rover that must traverse both rocky terrain and smooth surfaces while conserving energy.", "An underwater exploration robot navigating deep-sea environments with varying water currents.."], answer: 2 },
        { question: "9.Which of the following applications would most benefit from using quadcopter drones over fixed-wing drones or hybrid VTOL (Vertical Take-Off and Landing) drones??", options: ["a.	A long-range surveillance mission that requires covering vast areas with minimal energy consumption.", "An agricultural monitoring task that involves scanning large fields for crop health over extended periods.", "An urban delivery service that needs to navigate through densely populated areas, landing precisely on small delivery spots.", "A scientific research mission in the Arctic requiring long-duration flights in strong, consistent wind conditions."], answer: 2 },
        { question: "10.Which of the following scenarios would most benefit from the use of tracked locomotion over wheeled or legged locomotion??", options: ["A hospital robot designed to navigate clean, flat indoor surfaces to deliver supplies to various departments.", "An all-terrain exploration vehicle that must navigate sandy dunes, rocky hills, and dense forests.", "A robotic vacuum cleaner required to maneuver around furniture and other obstacles in a home setting.", "A robot designed for precise surgical procedures requiring highly controlled, minute movements."], answer: 1 },
        { question: "11.For Item 11-13, refer to the situation Objects are moved from one conveyor belt to another at a factory by a robotic arm. An operator can input coordinates for picking up and setting objects using a simple interface that controls the arm sample.In order to control the robotic arm, what does the operator enter into the interface?", options: ["The conveyor belts' speed", "The factory's temperature", "The coordinate system for moving and lifting items", "How the items' colors"], answer: 2 },
        { question: "12.What effects does the robotic arm's operation have when coordinates are entered into the control interface?", options: ["It modifies the robotic arm's movement speed.", "It establishes the exact spots at which the robotic arm picks up and places items.", "It arranges the robotic arm's maintenance windows.it is fully operational.", "It adjusts the robotic arm's power usagens it is in maintenance mode."], answer: 1 },
        { question: "13.What is the primary purpose of a status indicator in an Arduino project?", options: ["To provide power to the Arduino board.", "To display the status of a system or component.", "To upload code to the Arduino board.", "To connect sensors to the Arduino board."], answer: 1 },
        { question: "14.What is the default state of an Arduino pin when it is first initialized??", options: ["HIGH.", "LOW", "INPUT", "OUTPUT"], answer: 2 },
        { question: "15.Which of the following components can be used as a status indicator??", options: ["LED", "LCD screen", "Buzzer", "All of the above"], answer: 3 },
        { question: "16.What does the pinMode() function do in an Arduino sketch?", options: ["It reads the voltage on a pin", "It writes a voltage to a pin.", "It sets a pin as an input or output.", "It initializes serial communication."], answer: 2 },
        { question: "17.What is the typical voltage level for a HIGH state on an Arduino digital pin??", options: ["0V", "3.3V", "5V", "12V"], answer: 2 },
        { question: "18.Which library would you use to control an LCD screen with an Arduino??", options: ["Servo.h", "Wire.h", "LiquidCrystal.h", "SPI.h"], answer: 2 },
        { question: "19.What does PWM (Pulse Width Modulation) allow you to do with an Arduino??", options: ["Read analog signals", "Communicate with I2C devices", "Control the brightness of an LED", "Measure temperature"], answer: 2 },
        { question: "20.What is a servo motor typically used for in an Arduino project??", options: ["Controlling LED brightness", "Moving parts to specific positions.", "Reading temperature", "Storing data"], answer: 1 },
        { question: "21.What is the typical range of motion for a standard servo motor??", options: ["0 to 90 degrees", "b.	0 to 180 degrees", "0 to 270 degrees", "0 to 360 degrees"], answer: 1 },
        { question: "22.Which Arduino library is commonly used to control servo motors??", options: ["Servo.h", "Motor.h", "PWM.h", "Control.h"], answer: 0 },
        { question: "23.What is the function used to attach a servo motor to a pin in the Arduino Servo library?", options: ["servo.connect(pin)", "b.	servo.link(pin)", "servo.attach(pin)", "servo.bind(pin)"], answer: 2 },
        { question: "24.Which of the following pins are typically used to control a servo motor on an Arduino??", options: ["Analog pins", "b.	Digital pins", "I2C pins", "SPI pins"], answer: 1 },
        { question: "25.What type of signal is used to control the position of a servo motor??", options: ["Analog voltage", "Pulse Width Modulation (PWM)", "Frequency modulation", "Digital pulses"], answer: 1 },
        { question: "26.What function is used to set the position of a servo motor in the Servo library??", options: ["servo.write(position)", "servo.set(position)", "servo.move(position)", "servo.turn(position)"], answer: 0 },
        { question: "27.For item 27-28, refer to the situation The high school robotics club is selecting a project for the upcoming year. They need to decide on a project that is feasible within their budget, aligns with the skills of the team members, and addresses a real-world problem. They will present their decision-making process to the school administration for approval,27.	What is one of the main criteria the robotics club should consider when choosing a project?", options: ["The project's alignment with team members' skills", "The color of the robot", "The number of wheels on the robot", "The project's ability to generate profit"], answer: 0 },
        { question: "28.How does considering the team's skills affect the selection of a robotics project??", options: ["It ensures the project can be completed successfully by leveraging the strengths and expertise of the team members.", "It increases the cost of the project.", "c.	It limits the creativity of the project.", "It makes the project less interesting"], answer: 0 },
        { question: "29.Outline the key steps the robotics club should take in their decision-making process for selecting a project. A.Brainstorming potential project ideas B.Evaluating the feasibility of each idea within the budget. C.Assessing how well each idea aligns with team members' skills. D.Considering the impact and relevance of the project to real-world problems. E.Presenting the top choices to the club for a vote. F.Preparing a presentation for the school administration to seek approval.", options: ["a,b,c,d,e,f.", "f,d,e,b,c,a", "f,e,d,c,b,a", "b,a,c,d,f"], answer: 0 },
        { question: "30.When presenting the design of a robotic project, what is the most effective way to communicate the project's technical specifications to a diverse audience?", options: ["Use only technical jargon to ensure precision.", "Include detailed schematics and explain each component in simple terms.", "Focus solely on the end results and outcomes of the project", "Provide a high-level overview without delving into technical details"], answer: 1 },
    ],  
    research: [
        { question: "What is the first step of the scientific method?", options: ["Ask a question", "Make an observation", "Form a hypothesis", "Conduct an experiment"], answer: 0 },
        { question: "Which research method is most used in scientific studies?", options: ["Experimental", "Descriptive", "Analytical", "Quantitative"], answer: 0 }
    ],
    science: [
        { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "NaCl"], answer: 0 },
        { question: "How many planets are there in the solar system?", options: ["8", "9", "10", "7"], answer: 0 }
    ],
    math: [
        { question: "What is the chemical symbol for air?", options: ["H2O", "CO2", "O2", "NaCl"], answer: 0 },
        { question: "How many planets are there in the solar?", options: ["8", "9", "10", "7"], answer: 0 }// Add other subjects similarly...
    ]
    };

// Start the exam when the user clicks "Start Exam"
document.getElementById('startExamBtn').addEventListener('click', () => {
    const formData = new FormData(document.getElementById('userForm'));
    const subjectSelected = formData.get('subject');
    document.getElementById('subjectTitle').textContent = subjectSelected.charAt(0).toUpperCase() + subjectSelected.slice(1).replace('_', ' ');

    // Generate questions dynamically
    let questionHtml = '';
    questions[subjectSelected].forEach((q, index) => {
        questionHtml += `
            <div class="question">
                <p>${q.question}</p>
                <div class="options">
                    ${q.options.map((opt, i) => `
                        <label>
                            <input type="radio" name="q${index}" value="${i}"> ${opt}
                        </label><br>
                    `).join('')}
                </div>
            </div>
        `;
    });
    document.getElementById('questions').innerHTML = questionHtml;
    document.getElementById('examSection').style.display = 'block';
    document.getElementById('userForm').style.display = 'none';
});

// Submit the exam and calculate score
document.getElementById('examForm').addEventListener('submit', (e) => {
    e.preventDefault();
    let score = 0;
    const resultList = [];

    const formData = new FormData(document.getElementById('examForm'));
    questions[document.getElementById('subject').value].forEach((q, index) => {
        const selectedOption = formData.get(`q${index}`);
        if (selectedOption && parseInt(selectedOption) === q.answer) {
            score++;
            resultList.push(`<li class="correct">Q${index + 1}: Correct Answer: ${q.options[parseInt(selectedOption)]}</li>`);
        } else if (selectedOption) {
            resultList.push(`<li class="incorrect">Q${index + 1}: Incorrect Answer: ${q.options[parseInt(selectedOption)]}</li>`);
        } else {
            resultList.push(`<li class="incorrect">Q${index + 1}: No answer selected</li>`);
        }
    });

    // Show the result
    document.getElementById('totalScore').textContent = `${score} out of ${questions[document.getElementById('subject').value].length}`;
    document.getElementById('resultList').innerHTML = resultList.join('');
    document.getElementById('result').style.display = 'block';

    // Disable further exam submission
    document.getElementById('submitExamBtn').disabled = true;
    document.getElementById('startExamBtn').disabled = true;
});

// Download the results as CSV
document.getElementById('downloadBtn').addEventListener('click', () => {
    const data = [
        ['Name', 'Grade', 'Section', 'Teacher', 'Subject', 'Quarter', 'Date', 'Score'],
        [document.getElementById('name').value, document.getElementById('grade').value, document.getElementById('section').value, document.getElementById('teacher').value, document.getElementById('subject').value, document.getElementById('quarter').value, document.getElementById('date').value, document.getElementById('totalScore').textContent]
    ];

    let csvContent = data.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'exam_results.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});

// Go back to the subject selection page
document.getElementById('backToSubjectsBtn').addEventListener('click', () => {
    document.getElementById('userForm').reset();
    document.getElementById('examSection').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('userForm').style.display = 'block';
    document.getElementById('startExamBtn').disabled = false;
});
// script.js

// Check if service worker is supported
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  }
// script.js

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the default installation prompt
  e.preventDefault();
  // Save the event so it can be triggered later
  deferredPrompt = e;
  // Show the install button
  document.querySelector('#installButton').style.display = 'block';
});

// Trigger the prompt when the user clicks the install button
document.querySelector('#installButton').addEventListener('click', () => {
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the installation prompt');
    } else {
      console.log('User dismissed the installation prompt');
    }
    deferredPrompt = null;
  });
});
  