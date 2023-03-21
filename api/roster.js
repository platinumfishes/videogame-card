export default async function handler(request, res) {
    const roster = [
        {
            "accentColor": "teamfortress",
            "picture": "https://i.ytimg.com/vi/jHgZh4GV9G0/maxresdefault.jpg",
            "name": "Heavy",
            "opened": false,
            "toptext": "I am Heavy Weapons guy",
            "detailstext": "Details",
            "paragraph1": "Some people think they can outsmart me. Maybe, maybe... I've yet to meet one that can outsmart bullet."
        },
        {
            "accentColor": "pink",
            "picture": "https://i.ytimg.com/vi/z8crH4zBPbk/maxresdefault.jpg",
            "name": "Soldier",
            "opened": false,
            "toptext": "God bless America",
            "detailstext": "Details",
            "paragraph1": "This is a screenshot from a 3D rendered animation posted to Youtube by Valve Corporation to promote the video-game Team Fortress 2. The video is called 'Meet the Pyro'"
        },
        {
            "accentColor": "pink",
            "picture": "https://i.ytimg.com/vi/bgs9OhjAE2g/maxresdefault.jpg",
            "name": "Spy",
            "opened": false,
            "toptext": "Kill me",
            "detailstext": "Details",
            "paragraph1": "This is a screenshot from a 3D rendered animation posted to Youtube by Valve Corporation to promote the video-game Team Fortress 2. The video is called 'Meet the Pyro'"
        }
    ];
    res.json(roster);
}