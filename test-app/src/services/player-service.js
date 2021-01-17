

export const getPlayers = () => {
    const data = [
        {
            id: 1,
            playerName: 'Jon',
            playerAge: 45
        },
        {
            id: 2,
            playerName: 'Jon1',
            playerAge: 30
        }
    ]

    return new Promise((resolve, reject) => {
        console.log('PromiseService')
        if(data){
            resolve(data)
        }else{
            reject(new Error('all bad'));
        }
    })
}