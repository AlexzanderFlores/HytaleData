const features = [
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
      "Track your competitor's player count, recent updates, vote count, package prices, and more. Customizable notifications and tracking will help you stay ontop of your competitor's progress."
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
      "Test out different wordings and colors on alerts, MOTDs, and more. Provide multiple messages to split test and see how players react to them. Use this to continuously optimize the amount of players clicking on Voting or Shop links."
  },
  {
    name: "Complete Staffing Solution",
    description:
      "Keep your staff members connected through chat and ticketing systems over your website, Discord server, and your Hytale server. Staff logs can be viewed in the dashboard."
  },
  {
    name: "Discord & Social Media Integrations",
    description:
      'Manage and post from your Discord, Twitter, and Instagram all in one dashboard. Use our "Team Member" feature to give admins limited access to these accounts without sharing any passwords.'
  },
  {
    name: "Embeddable Graphs & Charts",
    description:
      "Embed charts of player and vote counts on your website. Vote counts will be across all server listing websites. Partnered server listing websites will gain access to graphs that only show their website's vote count."
  },
  {
    name: "Team Members / Sub Accounts",
    description:
      "Give your admins access to your Hytale Data account without sharing any passwords. You have full control over what features they can access."
  },
  {
    name: "Developer's API",
    description:
      "Your developers can use our RESTful API to track custom data points, add custom staffing system functionality, access specific metrics, and more."
  },
  {
    name: "Affiliate / Referral Program",
    description:
      "Earn monthly commissions for each server owner you send to Hytale Data. Great to increase the lifetime value of your customers if you own a server list, hosting company, or any other similar website who's customer is a server owner."
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
