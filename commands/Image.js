var Scraper = require('images-scraper');
const google = new Scraper({
    puppeteer: {
      headless: true,
    },
  });

module.exports = {
    name: "image",
    description: "Finds a image online",
    async execute(message, args){

        const image_query = args.join(" ");
        if(!image_query) return message.channel.send("Searching for nothing? Look at a mirror and don't annoy me");

        const image_results = await google.scrape(image_query, 100);
        let x = (Math.round(Math.random() * 100));//.toString;
        message.channel.send(image_results[x].url);
        
    }
}