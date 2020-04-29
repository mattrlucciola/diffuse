export const seedProfile = {
    "pk": 1,
    "data": {
        "password": "pbkdf2_sha256$150000$atgT6rcrUUYY$43iS8KnUgF6zMHHGmE5DwqvzOc1mQMYup3ZsF9KsPw0=",
        "last_login": "2019-11-12T18:26:23.805Z",
        "is_superuser": true,
        "username": "matthias",
        "first_name": "",
        "last_name": "",
        "email": "",
        "is_staff": true,
        "is_active": true,
        "date_joined": "2019-11-12T18:25:28.016Z",
        "dob": null,
        "phone": "",
        "profile_picture": "",
        "groups": [],
        "user_permissions": []
    }
}

export const projectArr = [
    {
        "pk": 1,
        "fields": {
            "name": "projey 1",
            "content": [
                {
                    "name": "kick",
                    "midi": {
                        "timeSig": "4/4",
                        "bpm": 120,
                        "tracks": [
                            [
                                { "eventType": "note", "absTime": 0, "duration": 1, "midinote": 60 },
                                { "eventType": "note", "absTime": 2, "duration": 1, "midinote": 64 },
                                { "eventType": "note", "absTime": 2, "duration": 1, "midinote": 55 },
                                { "eventType": "note", "absTime": 4, "duration": 1, "midinote": 60 },
                                { "eventType": "note", "absTime": 4, "duration": 1, "midinote": 65 },
                                { "eventType": "note", "absTime": 6, "duration": 1, "midinote": 70 },
                                { "eventType": "note", "absTime": 6, "duration": 1, "midinote": 75 },
                            ],
                            [
                                { "eventType": "note", "absTime": 0, "duration": 3, "midinote": 60 },
                            ]
                        ]
                    }
                },
                {
                    "name": "piano",
                    "midi": {
                        "timeSig": "4/4",
                        "bpm": 120,
                        "tracks": [
                            [
                                { "eventType": "note", "absTime": 1, "duration": 1/2, "midinote": 60 },
                                { "eventType": "note", "absTime": 3, "duration": 1/2, "midinote": 64 },
                                { "eventType": "note", "absTime": 3, "duration": 1/2, "midinote": 55 },
                                { "eventType": "note", "absTime": 5, "duration": 1/2, "midinote": 60 },
                                { "eventType": "note", "absTime": 5, "duration": 1/2, "midinote": 65 },
                                { "eventType": "note", "absTime": 7, "duration": 1/2, "midinote": 70 },
                                { "eventType": "note", "absTime": 7, "duration": 1/2, "midinote": 75 },
                            ],
                            [
                                { "eventType": "note", "absTime": 0, "duration": 3, "midinote": 60 },
                            ]
                        ]
                    }
                }
            ]
            ,
            "created_dt": "2019-11-12T18:26:23.805Z",
            "updated_dt": "2019-11-12T18:26:23.805Z",
            "author": 3,
            "collaborators": ['billy', 'mikey', 'jimmy'],
            "history": [
                {
                    name: 'added more kick',
                    author:1,
                    midi: [
                        {
                            "name": "kick",
                            "midi": {
                                "timeSig": "4/4",
                                "bpm": 120,
                                "tracks": [
                                    [
                                        { "eventType": "note", "absTime": 0, "duration": 1, "midinote": 60 },
                                        { "eventType": "note", "absTime": 2, "duration": 1, "midinote": 64 },
                                        { "eventType": "note", "absTime": 2, "duration": 1, "midinote": 55 },
                                        { "eventType": "note", "absTime": 4, "duration": 1, "midinote": 60 },
                                        { "eventType": "note", "absTime": 4, "duration": 1, "midinote": 65 },
                                        { "eventType": "note", "absTime": 6, "duration": 1, "midinote": 70 },
                                        { "eventType": "note", "absTime": 6, "duration": 1, "midinote": 75 },
                                    ],
                                    [
                                        { "eventType": "note", "absTime": 0, "duration": 3, "midinote": 60 },
                                    ]
                                ]
                            }
                        },
                        {
                            "name": "piano",
                            "midi": {
                                "timeSig": "4/4",
                                "bpm": 120,
                                "tracks": [
                                    [
                                        { "eventType": "note", "absTime": 1, "duration": 1/2, "midinote": 60 },
                                        { "eventType": "note", "absTime": 3, "duration": 1/2, "midinote": 64 },
                                        { "eventType": "note", "absTime": 3, "duration": 1/2, "midinote": 55 },
                                        { "eventType": "note", "absTime": 5, "duration": 1/2, "midinote": 60 },
                                        { "eventType": "note", "absTime": 5, "duration": 1/2, "midinote": 65 },
                                        { "eventType": "note", "absTime": 7, "duration": 1/2, "midinote": 70 },
                                        { "eventType": "note", "absTime": 7, "duration": 1/2, "midinote": 75 },
                                    ],
                                    [
                                        { "eventType": "note", "absTime": 0, "duration": 3, "midinote": 60 },
                                    ]
                                ]
                            }
                        }
                    ]
                },
                {
                    name: 'simplified it a bit',
                    author:2,
                    midi: [
                        {
                            "name": "kick",
                            "midi": {
                                "timeSig": "4/4",
                                "bpm": 120,
                                "tracks": [
                                    [
                                        { "eventType": "note", "absTime": 0, "duration": 1, "midinote": 60 },
                                        { "eventType": "note", "absTime": 2, "duration": 1, "midinote": 64 },
                                        { "eventType": "note", "absTime": 2, "duration": 1, "midinote": 55 },
                                        { "eventType": "note", "absTime": 4, "duration": 1, "midinote": 60 },
                                        { "eventType": "note", "absTime": 4, "duration": 1, "midinote": 65 },
                                        { "eventType": "note", "absTime": 6, "duration": 1, "midinote": 70 },
                                        { "eventType": "note", "absTime": 6, "duration": 1, "midinote": 75 },
                                    ],
                                    [
                                        { "eventType": "note", "absTime": 0, "duration": 3, "midinote": 60 },
                                    ]
                                ]
                            }
                        },
                        {
                            "name": "piano",
                            "midi": {
                                "timeSig": "4/4",
                                "bpm": 120,
                                "tracks": [
                                    [
                                        { "eventType": "note", "absTime": 1, "duration": 1/2, "midinote": 60 },
                                        { "eventType": "note", "absTime": 3, "duration": 1/2, "midinote": 64 },
                                        { "eventType": "note", "absTime": 3, "duration": 1/2, "midinote": 55 },
                                        { "eventType": "note", "absTime": 5, "duration": 1/2, "midinote": 60 },
                                        { "eventType": "note", "absTime": 5, "duration": 1/2, "midinote": 65 },
                                        { "eventType": "note", "absTime": 7, "duration": 1/2, "midinote": 70 },
                                        { "eventType": "note", "absTime": 7, "duration": 1/2, "midinote": 75 },
                                    ],
                                    [
                                        { "eventType": "note", "absTime": 0, "duration": 3, "midinote": 60 },
                                    ]
                                ]
                            }
                        }
                    ]
                },
                {
                    name: 'first commit',
                    author:1,
                    midi: [
                        {
                            "name": "kick",
                            "midi": {
                                "timeSig": "4/4",
                                "bpm": 120,
                                "tracks": [
                                    [
                                        { "eventType": "note", "absTime": 0, "duration": 1, "midinote": 1 },
                                        { "eventType": "note", "absTime": 2, "duration": 1, "midinote": 2 },
                                        { "eventType": "note", "absTime": 2, "duration": 1, "midinote": 10 },
                                        { "eventType": "note", "absTime": 4, "duration": 1, "midinote": 23 },
                                    ],
                                    [
                                        { "eventType": "note", "absTime": 6, "duration": 2, "midinote": 33 },
                                    ]
                                ]
                            }
                        },
                        {
                            "name": "piano",
                            "midi": {
                                "timeSig": "4/4",
                                "bpm": 120,
                                "tracks": [
                                    [
                                        { "eventType": "note", "absTime": 1, "duration": 1/2, "midinote": 99 },
                                        { "eventType": "note", "absTime": 3, "duration": 1/2, "midinote": 98 },
                                        { "eventType": "note", "absTime": 3, "duration": 1/2, "midinote": 97 },
                                    ],
                                    [
                                        { "eventType": "note", "absTime": 0, "duration": 31, "midinote": 80 },
                                        { "eventType": "note", "absTime": 5, "duration": 31, "midinote": 80 },
                                    ]
                                ]
                            }
                        }
                    ]
                }
            ],
        }
    },
    {
        "pk": 2,
        "fields": {
            "name": "projey 2",
            "content": {},
            "created_dt": "2019-11-10T18:26:23.805Z",
            "updated_dt": "2019-11-10T18:26:23.805Z",
            "author": 2,
            "collaborators": []
        }
    }
]

export const historyArr = [
    {
        "pk": 1,
        "fields": {
            "history_array": [],
            "project": 2,
            "created_dt": "2019-11-08T18:26:23.805Z",
            "updated_dt": "2019-11-08T18:26:23.805Z"
        }
    },
    {
        "pk": 2,
        "fields": {
            "history_array": [],
            "project": 1,
            "created_dt": "2019-11-09T18:26:23.805Z",
            "updated_dt": "2019-11-09T18:26:23.805Z"
        }
    },
]

export const commitArr = [
    {
        "pk": 1,
        "fields": {
            "name":"commy 1 proje 1",
            "content": [],
            "history": 1,
            "created_dt": "2019-11-01T18:26:23.805Z",
            "updated_dt": "2019-11-01T18:26:23.805Z"
        }
    },
    {
        "pk": 2,
        "fields": {
            "name":"commy 2 proje 1",
            "content": [],
            "history": 1,
            "created_dt": "2019-11-02T18:26:23.805Z",
            "updated_dt": "2019-11-02T18:26:23.805Z"
        }
    },
    {
        "pk": 3,
        "fields": {
            "name":"commy 1 projy 2",
            "content": [],
            "history": 2,
            "created_dt": "2019-11-03T18:26:23.805Z",
            "updated_dt": "2019-11-03T18:26:23.805Z"
        }
    },
]

export const commentArr = [
    {
        "pk": 1,
        "fields": {
            "content": "i am writing and seeding my first comment",
            "author":1,
            "project": 1,
            "created_dt": "2019-11-04T18:26:23.805Z",
            "updated_dt": "2019-11-04T18:26:23.805Z"
        }
    },
    {
        "pk": 2,
        "fields": {
            "content": "comment 2 comment 2",
            "author":2,
            "project": 2,
            "created_dt": "2019-11-05T18:26:23.805Z",
            "updated_dt": "2019-11-05T18:26:23.805Z"
        }
    },
    {
        "pk": 3,
        "fields": {
            "content": "this is sthe asdfa ksd tjdkkdd the comment 3",
            "author":3,
            "project": 2,
            "created_dt": "2019-11-06T18:26:23.805Z",
            "updated_dt": "2019-11-06T18:26:23.805Z"
        }
    }
]