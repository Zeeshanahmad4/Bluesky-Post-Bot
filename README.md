
`# Bluesky Bot

Bluesky Bot is a simple bot built using TypeScript that posts to the Bluesky social network using the Bluesky API. It can be scheduled to run at specified times using GitHub Actions.

## Prerequisites

Before getting started, make sure you have the following requirements:

- Node.js version 18.16.0
- A Bluesky account

## Getting Started

To set up the bot, follow these steps:

1. Clone this repository to your local machine.
2. Install the required dependencies by running the following command:
   ```shell
   npm install` 

3. Set up the environment variables for your Bluesky account credentials:
    
    - `BSKY_HANDLE`: Your Bluesky identifier (username)
    - `BSKY_PASSWORD`: Your Bluesky password You can set these variables in your development environment or in GitHub Actions secrets.
4. Run the bot script manually by executing the following command:
    
    shellCopy code
    
    `node index.js` 
    
    This will post a sample message to your Bluesky account.
    
5. (Optional) To schedule the bot to run periodically, set up GitHub Actions:
    
    - Push the cloned repository to your own GitHub repository.
    - In the repository settings, go to "Actions" and add the following secrets:
        - `BSKY_HANDLE`: Your Bluesky identifier (username)
        - `BSKY_PASSWORD`: Your Bluesky password
    - Configure the schedule in the `.github/workflows/post.yml` file. Replace the `cron` expression with your desired schedule.
    - Commit and push the changes to GitHub. The bot will now be scheduled to run at the specified times.

## Customizing the Bot

The bot currently posts a sample message, but you can customize it to post any text you want. To modify the message, open the `index.js` file and change the text passed to the `sendPost` function.

javascriptCopy code

`sendPost("Hello from the Bluesky API!");` 

## Resources

- [Bluesky API Documentation](https://blueskyapidocs.com/) - Official documentation for the Bluesky API.
- [Bluesky](https://bsky.social/) - The Bluesky social network.

## License

This project is licensed under the [MIT License](https://chat.openai.com/LICENSE).

cssCopy code

 `Feel free to modify the content as needed.`
