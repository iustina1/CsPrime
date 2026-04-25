/* Move text-container lower on the PNG */
.text-container {
    position: absolute;
    top: 79%; /* Adjust this value to move everything lower */
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

/* Move title inside the PNG and lower */
.hero-text {
    color: #0056b3;
    font-size: 32px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    margin-bottom: 15px; /* Space between title and subtext */
}

/* Additional subtext */
.subtext {
    color: rgb(7, 6, 6);
    font-size: 18px;
    font-weight: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-bottom: 15px; /* Space between subtext and button */
}

/* Move button LOWER under the text */
.cta-button {
    background: #0056b3;
    color: rgb(253, 252, 252);
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    font-weight: bold;
}

.cta-button:hover {
    background: #0056b3;
}     