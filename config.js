module.exports = {
    app: {
        token: 'MTAxNTY5MzIwNDYyMTg5MzYzMg.GvpBAJ.cGUf2kOvsdcr6YGGmVENelwivYC5Cj8lb-qFwk',
        playing: 'by Rin_#6846',
        global: true,
        guild: '872924509349482516'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
