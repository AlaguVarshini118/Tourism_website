// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Form Validation and Submission
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const destination = document.getElementById('destination').value;

    if (name === '' || email === '' || phone === '' || date === '' || destination === '') {
        alert('Please fill out all fields.');
        return;
    }

  
    alert(`Thank you, ${name}! Your booking for ${destination} on ${date} has been received. We will contact you at ${email}.`);


    document.getElementById('bookingForm').reset();
});
