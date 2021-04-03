const RPC = require('discord-rpc')
const rpc = new RPC.Client({
    transport: 'ipc'
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "discord.gg/devs",
        state: "Join discord.gg/devs",
        startTimestamp: new Date(),
        largeImageKey: "large",
        largeImageText: "discord.gg/devs",
        smallImageKey: "small",
        smallImageText: "discord.gg/devs",
        buttons : [{label : "Subscribe" , url : "your channel"},{label : "Discord" , url : "https://discord.gg/devs"}]
    })

    console.log("successfully activated the RPC")
})

rpc.login({
    clientId: 'your client id'
})