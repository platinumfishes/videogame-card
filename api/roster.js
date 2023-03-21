
export default async function handler(request, res) {
    
    const roster = [
        {
            "accentColor": "teamfortress",
            "picture": "https://i.ytimg.com/vi/jHgZh4GV9G0/maxresdefault.jpg",
            "name": "Heavy",
            "toptext": "I am Heavy Weapons guy",
            "detailstext": "Details",
            "paragraph1": "Some people think they can outsmart me. Maybe, maybe... I've yet to meet one that can outsmart bullet."
        },
        {
            "accentColor": "pink",
            "picture": "https://i.ytimg.com/vi/z8crH4zBPbk/maxresdefault.jpg",
            "name": "Soldier",
            "toptext": "God bless America",
            "detailstext": "Details",
            "paragraph1": "This is a screenshot from a 3D rendered animation posted to Youtube by Valve Corporation to promote the video-game Team Fortress 2. The video is called 'Meet the Pyro'"
        },
        {
            "accentColor": "pink",
            "picture": "https://i.ytimg.com/vi/bgs9OhjAE2g/maxresdefault.jpg",
            "name": "Spy",
            "toptext": "Kill me pls",
            "detailstext": "Details",
            "paragraph1": "This is a screenshot from a 3D rendered animation posted to Youtube by Valve Corporation to promote the video-game Team Fortress 2. The video is called 'Meet the Pyro'"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(roster);
}