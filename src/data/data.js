/**
 * Formatted such that data is stored in 4 arrays representing the four blocks to train.
 * data[[block1], [block2], [block1], [block4]]. Each block contains all exercises for that block and how many
 * sets and reps to perform for each of them. Weight will be calculated dynamically based on estimated max,
 * percentages and previous weeks performance.
 * */

export const data = [[
    {
        id:1,
        fields:{
            name: 'Deadlift warmup',
            sets: 5,
            reps: 5,
            percentile: 0
        }
    },
    {
        id:2,
        fields:{
            name: 'Deadlift main',
            sets: 1,
            reps: 5,
            percentile: 100
        }
    },
    {
        id:3,
        fields:{
            name: 'Paused Deadlift',
            sets:3,
            reps: 5,
            percentile: 80
        }
    },
    {
        id:4,
        fields:{
            name: 'Stiff-Legged Deadlift',
            sets: 3,
            reps: 5,
            percentile: 50
        }
    },

],
[{
    test: 'value'

}
]

]