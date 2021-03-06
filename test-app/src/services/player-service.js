export const getPlayers = () => {
    const data = [
        {
            id: 1,
            name: 'Jon',
            position: 'Centerforward',
            height: 319,
            weight: 100,
            age: 45
        },
        {
            id: 2,
            name: 'Jon1',
            position: 'Centerforward',
            height: 319,
            weight: 100,
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