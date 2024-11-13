// Function to post phone number to the API and display headers
async function postPhoneNumber(phonenumber) {
    try {
        // Make a POST request to the API
        const response = await fetch('https://chimpu.online/api/post.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({ phonenumber })
        });

        // Check if the response is OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Extract headers from the response
        const headers = response.headers;

        // Display headers on the page
        let headersContent = '';
        headers.forEach((value, key) => {
            headersContent += `${key}: ${value}<br>`;
        });
        document.getElementById('header-output').innerHTML = headersContent;
        
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

// Example usage
document.getElementById('submit-btn').addEventListener('click', () => {
    const phonenumber = document.getElementById('phonenumber').value;
    postPhoneNumber(phonenumber);
});
