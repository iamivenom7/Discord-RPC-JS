const RPC = require('discord-rpc')
const rpc = new RPC.Client({
    transport: 'ipc'
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "discord.gg/devs",
        state: "Join discord.gg/devs",
        startTimestamp: new Date(),
        largeImageKey: "halaw",
        largeImageText: "discord.gg/devs",
        smallImageKey: "dog",
        smallImageText: "discord.gg/devs",
        buttons : [{label : "Subscribe" , url : "your channel"},{label : "Discord" , url : "https://discord.gg/devs"}]
    })

    console.log("successfully activated the RPC")
})

rpc.login({
    clientId: '836097436208070656'
})
