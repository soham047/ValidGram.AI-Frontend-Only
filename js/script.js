document.getElementById("submitBtn").addEventListener("click", function () {
    // Show the loader
    const loader = document.getElementById("loadingSpinner");
    const resultSection = document.getElementById("result");
    const predictionSection = document.getElementById("real_or_fake");
    
    loader.style.display = "block";
    resultSection.style.display = "none";
    predictionSection.style.display = "none";

    const t = Math.round(Math.random() * 11)

    setTimeout(() => {
        // Randomly generate values for the results
        const username = document.getElementById("username").value || "Unknown User";
        const fullName = "John Doe";
        const bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae orci vel dui cursus ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";
        const profilePic = Math.random() > 0.5 ? "Available" : "Not available";
        const accountType = Math.random() > 0.5 ? "Public" : "Private";
        const followers = Math.floor(Math.random() * 10000);
        const following = Math.floor(Math.random() * 5000);
        const posts = Math.floor(Math.random() * 200);
        const prediction = Math.random() > 0.5 ? "Real" : "Fake";
        const ext = Math.random() > 0.5 ? "Available" : "Not Available";
        
        // Populate the results section
        document.getElementById("result-username").textContent = username;
        document.getElementById("result-fullname").textContent = fullName;
        document.getElementById("result-bio").textContent = bio;
        document.getElementById("result-profile-pic").textContent = profilePic;
        document.getElementById("result-account-type").textContent = accountType;
        document.getElementById("result-followers").textContent = followers;
        document.getElementById("result-following").textContent = following;
        document.getElementById("result-posts").textContent = posts;
        document.getElementById("result-ext").textContent = ext;

        // Update the prediction
        document.getElementById("prediction-text").textContent = prediction;

        // Hide the loader and show the results
        loader.style.display = "none";
        resultSection.style.display = "block";
        predictionSection.style.display = "block";
    }, (t*1000)); // 2-second delay
});

document.getElementById("showResultsBtn").addEventListener("click", function () {
    // Switch to the detailed results tab
    document.getElementById("results").classList.add("show", "active");
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 700; // Duration in milliseconds
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    });
});
