const { BskyAgent, RichText } = require("@atproto/api");

async function sendPost(text) {
    const agent = new BskyAgent({ service: "https://bsky.social" });
    await agent.login({
        identifier: process.env.BSKY_HANDLE,
        password: process.env.BSKY_PASSWORD,
    });
    const richText = new RichText({ text });
    await richText.detectFacets(agent);
    await agent.post({
        text: richText.text,
        facets: richText.facets,
    });
}

sendPost("Hello from the Bluesky API!");
