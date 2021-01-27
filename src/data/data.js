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
    {
        id: 5,
        fields:{
            name: 'Close-grip pulldowns',
            sets: 3,
            reps: 10,
            percentile: 0
        }
    },
    {
        id: 6,
        fields: {
            name: 'Reverse fly',
            sets: 3,
            reps: 12,
            percentile: 0
        }
    },
    {
        id: 7,
        fields: {
            name: 'Single-arm row',
            sets: 3,
            reps: 12,
            percentile: 0
        }
    },
    {
        id:8,
        fields:{
            name: 'Smith shrug',
            sets: 3,
            reps: 12,
            percentile: 0
        }
    }
],
[
    {
        id:9,
        fields:{
            name: 'Deadlift warmup',
            sets: 5,
            reps: 3,
            percentile: 0
        }
    },
    {
        id:10,
        fields:{
            name: 'Deadlift main',
            sets: 1,
            reps: 3,
            percentile: 100
        }
    },
    {
        id:11,
        fields:{
            name: 'Paused Deadlift',
            sets:3,
            reps: 3,
            percentile: 80
        }
    },
    {
        id:12,
        fields:{
            name: 'Stiff-Legged Deadlift',
            sets: 3,
            reps: 3,
            percentile: 50
        }
    },
    {
        id: 13,
        fields:{
            name: 'Close-grip pulldowns',
            sets: 2,
            reps: 12,
            percentile: 0
        }
    },
    {
        id: 14,
        fields: {
            name: 'Smith shrug',
            sets: 2,
            reps: 12,
            percentile: 0
        }
    }
]

]