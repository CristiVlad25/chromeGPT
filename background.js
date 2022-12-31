chrome.contextMenus.create({ title: 'Summarize', contexts: ['selection'], onclick: summarizeSelection });

function summarizeSelection(info, tab) {

    let selectedText = info.selectionText.trim();
    fetch('https://api.openai.com/v1/completions', {

        method: 'POST',
        headers: {
            Authorization: `Bearer <OpenAI_API_Key`,
            'Content-Type': 'application/json'

        },

        body: JSON.stringify({
            prompt: "Briefly summarize the following text:" + selectedText,
            max_tokens: 150,
            model: "text-davinci-003",
            frequency_penalty: 0.5,
            presence_penalty: 0.5,
            temperature: 0.35,
            top_p: 1
        })

    })

    .then(response => response.json())
        .then(data => alert(data['choices'][0]['text']))
}
