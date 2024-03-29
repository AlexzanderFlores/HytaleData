const features = [
  {
    name: "Player Sessions",
    description:
      "Keep detailed logs for each player. Track playtime, punishments, chat logs, duration of each play session, alt accounts, and more. Access this data through our dashboard, API, or Discord bot."
  },
  {
    name: "Income Data",
    description:
      "Understanding your conversion rate, average income per player, cost to acquire a player, and other similar stats is critical to making your server more profitable. Our solution helps you track and manage your revenue in a single dashboard."
  },
  {
    name: "Game Play Stats",
    description:
      "Insights into what your players enjoy will help you create more content that keeps them online. View metrics such as map votes, kits selected, map rating, and more. Our API will allow you track custom data points in your games."
  },
  {
    name: "Competitor Tracking & Comparison",
    description:
      "Track your competitor's player count, recent updates, package prices, and more. Customizable notifications and tracking will help you stay ontop of your competitor's progress."
  },
  {
    name: "Influencer Management",
    description:
      "Log your brand deals and get estimates on players to expect from future brand deals. We'll even track how many estimated players an influencer brought to another server network in past deals."
  },
  {
    name: "Projections Based off Previous Data",
    description:
      "See what the next 3, 6, and 12 months look like for your server in terms of average player count, new players joining, daily votes, and more. New customers of ours won't be provided projections while our software gathers data on your server."
  },
  {
    name: "A/B Testing",
    description:
      "Test out different wordings and colors on alerts, MOTDs, and more. Provide multiple messages to split test and see how players react to them. Use this to continuously optimize the amount of players clicking on Shop links."
  },
  {
    name: "Complete Staffing Solution",
    description:
      "Keep your staff members connected through chat and ticketing systems over your Discord and Hytale servers. Manage chat filters, staff permissions, and staff logs in the dashboard."
  },
  {
    name: "Leaderboards & Stats Solution",
    description:
      "Easily and quickly get stats setup in your games. This will give players more of a reason to keep playing to try and make it to the top ranks. Host stats on your own database or in our cloud."
  },
  {
    name: "Discord Bot",
    description:
      "Host referral contests, sync ranks between your Discord and Hytale servers, moderate chat, view server statistics, and more with the Hytale Data Discord bot."
  },
  {
    name: "Team Members / Sub Accounts",
    description:
      "Give your admins limit access to your Hytale Data account without sharing any passwords. You have full control over what features they can access."
  },
  {
    name: "Developer's API",
    description:
      "Your developers can use our RESTful API to track custom data points, add custom staffing system functionality, access specific metrics, and more."
  },
  {
    name: "Affiliate / Referral Program",
    description:
      "Earn monthly commissions for each server owner you send to Hytale Data. Great to increase the lifetime value of your customers if you own a marketplace, hosting company, or another similar website who has server owners as customers."
  }
];

features.forEach((feature, index) => {
  features[index].id = feature.name
    .replace(/[-,&%()']/g, "")
    .replace(/[ /]/g, "-")
    .replace(/--/g, "-")
    .replace(/--/g, "-")
    .toLowerCase();
});

export default features;
