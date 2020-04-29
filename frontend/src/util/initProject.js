export const initProject = (currentUsername, currentUserId) => {
    const initObj = {
        content: [
            {
                midi: {
                    bpm: 128,
                    pianoRoll: {
                        automation: [],
                        notes: [
                            // {x: 1, y: 20, weight:1},
                            // {x: 3, y: 22, weight:1},
                        ],
                    },
                    timeSig: '4/4',
                },
                name: 'Piano',
            },
        ],
        name: "New Project",
        user: {
            username: currentUsername,
            id: currentUserId,
        },
        collaborators: [],

    }
    return initObj
}