export async function POST(request) {
    try {
      const body = await request.json();
      console.log("Received Body:", body);
  
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTE_QWEN2_5}`,
          'HTTP-Referer': 'https://sketchcode.dev', // Full URL with https
          'X-Title': 'SketchCode',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: body.model,
          messages: [
            {
              role: 'user',
              content: body.prompt,
            },
          ],
        }),
      });
  
      const reply = await response.json();
      console.log("OpenRouter Response:", reply);
  
      const content = reply?.choices?.[0]?.message?.content || 'No content received.';
  
      return new Response(JSON.stringify({ content }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
  
    } catch (error) {
      console.error("Error in API:", error);
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
  