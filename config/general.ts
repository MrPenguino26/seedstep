const config = {
    domain: "seedsteptalent.com",
    title: "SeedStep Talent Search",
    description: "Join the waiting list for updates and exclusive access.",
    subscribeForm: "https://dashboard.mailerlite.com/forms/631411/101265918935434456/share",

    socials: {
        twitter: "https://x.com/beratbozkurt0",
    },

    contents: {
        title: "simplifying your talent search",
        description: `need an internship? join our waitlist.`,

        about: [
            {
                id: 1,
                emoji: "🔌",
                title: "Disconnect",
                description: "There is a disconnect between students looking for internships and startups looking to hire."
            },
            {
                id: 2,
                emoji: "📖",
                title: "Inadequate Career Resources",
                description: "The majority of Vanderbilt students are dissatisfied with the career resources available to them."
            },
            {
                id: 3,
                emoji: "🕒",
                title: "Startups Have No Time",
                description: "Startups are too busy running the day-to-day operations of their business to search for college interns."
            }
        ],

        support: {
            title1: "For Students",
            title2: "For Startups",
            description1: "Connect with innovative startups and gain real-world experience while you're still in college. Explore internships, part-time roles, and project-based work that aligns with your career goals.",
            description2: "Connect with motivated college students eager to gain real-world experience. Get tailored insights specific to your industry and business needs.",
            button1: "Browse Startups",
            button2: "Sign Up"
        },

        clientsText: {
            title: "We've helped 250+ clients find the right student interns among thousands of applicants",
            description: "and just to name a few..."
        },

        clients: [
            { name: 'Client A', duration: '1 year', logo: '/client-a.png' },
            { name: 'Client B', duration: '6 months', logo: '/client-b.png' },
            { name: 'Client C', duration: '2 years', logo: '/client-c.png' },
            { name: 'Client D', duration: '3 months', logo: '/client-d.png' },
            { name: 'Client E', duration: '1.5 years', logo: '/client-e.png' },
            { name: 'Client F', duration: '4 months', logo: '/client-f.png' },
            { name: 'Client G', duration: '2.5 years', logo: '/client-g.png' },
            { name: 'Client H', duration: '8 months', logo: '/client-h.png' },
            { name: 'Client I', duration: '1 year', logo: '/client-i.png' },
            { name: 'Client J', duration: '3 years', logo: '/client-j.png' },
        ],

        companies: [
            {
                name: "Company A",
                findingDeveloper: { value: "abcd", check: true },
                cost: { value: "$50-$100/hour", check: false },
                flexibility: { value: "High", check: true },
                processStandards: { value: "Agile methodology", check: true },
                thirdPartyAccountability: { value: "Yes", check: true },
                transparencyControl: { value: "High", check: true },
                switchingTeams: { value: "Easy", check: true },
            },
            {
                name: "Company B",
                findingDeveloper: { value: "In-house recruitment team", check: true },
                cost: { value: "$80-$150/hour", check: false },
                flexibility: { value: "Medium", check: true },
                processStandards: { value: "Waterfall methodology", check: false },
                thirdPartyAccountability: { value: "No", check: false },
                transparencyControl: { value: "Medium", check: true },
                switchingTeams: { value: "Moderate difficulty", check: true },
            },
            {
                name: "Company C",
                findingDeveloper: { value: "Freelancer platforms", check: false },
                cost: { value: "$30-$60/hour", check: true },
                flexibility: { value: "Very High", check: true },
                processStandards: { value: "Kanban", check: true },
                thirdPartyAccountability: { value: "Varies by freelancer", check: false },
                transparencyControl: { value: "Low", check: false },
                switchingTeams: { value: "Difficult", check: false },
            }
        ],

        factors: [
            { key: 'findingDeveloper', label: "Finding your developer" },
            { key: 'cost', label: "Cost" },
            { key: 'flexibility', label: "Flexibility" },
            { key: 'processStandards', label: "Process & standards" },
            { key: 'thirdPartyAccountability', label: "3rd party accountability" },
            { key: 'transparencyControl', label: "Transparency / control" },
            { key: 'switchingTeams', label: "Switching developers / teams" }
        ],

        comparison: {
            title1: "But there's more...",
            title2: "We bring the best parts of the student intern market 👇"
        },

        services: {
            title: "We serve our clients in 3 ways",
            subtitle1: "Student-run Connections",
            subtitle2: "Tailored Matches",
            subtitle3: "Direct Market Research",
            bp11: "Bullet point 1",
            bp12: "Bullet point 2",
            bp13: "Bullet point 3",
            bp21: "Bullet point 1",
            bp22: "Bullet point 2",
            bp23: "Bullet point 3",
            bp31: "Bullet point 1",
            bp32: "Bullet point 2",
            bp33: "Bullet point 3"
        },

        hirestudents: {
            title1: "Ready to learn more?",
            title2: "Hire tailored student interns today.",
            description: "Find the best student interns tailored to your needs and grow your startup with fresh talent.",
            button: "Hire Your Team",
            call: "or call (123) 456-789"
        }
    }
}


export default config;