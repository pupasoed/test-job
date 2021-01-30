

export const getPlayers = () => {
    const data = [
        {
            id: 1,
            name: 'Jon',
            age: 45
        },
        {
            id: 2,
            name: 'Jon1',
            age: 30
        }
    ]

    return new Promise((resolve, reject) => {
        // console.log('PromiseService')
        if(data){
            resolve(data)
        }else{
            reject(new Error('all bad'));
        }
    })
}