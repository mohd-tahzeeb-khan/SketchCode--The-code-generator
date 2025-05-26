export async function POST() {
    fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.OPENROUTE_QWEN2_5}`,
            'HTTP-Referer': 'https://yourwebsite.com', // Optional, for tracking request source
            'X-Title': 'YourSiteName',                // Optional, for display/ranking
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'qwen/qwen-2.5-coder-32b-instruct:free', // Specifies the model to use
            messages: [
                {
                    role: 'user',
                    content: 'What is the meaning of life?',
                },
            ],
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            const reply = data.choices[0].message.content;
            // console.log(reply);
            console.log('Response from OpenRouter:', reply);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}