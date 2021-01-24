export const data = [
    {id:1, type: 'king', fields:{
        name: 'Deadlift',
            warmup:{
                sets:[5,5,5],
                reps:[5,3,2]
            },
            main:{
                sets:[1,1,1],
                reps:[5,3,2]
            },
            percentile:100
        }
    },
    {id:2, type: 'essential', fields:{
            name: 'Paused Deadlift',
            main:{
                sets:[3,3,3],
                reps:[5,3,2]
            },
            percentile: 80
        }
    },
    {id:3, type: 'essential',fields:{
            name: 'Stiff-legged Deadlift',
            main:{
                sets:[3,3,3],
                reps:[5,3,2]
            },
            percentile: 50
        }
    },
    {id:4, type: 'accessory-a', fields:{
            name: 'Close-grip pulldowns',
            main:{
                sets:[3,3,3],
                reps:[5,3,2]
            },
            percentile: 50
        }
    }
]