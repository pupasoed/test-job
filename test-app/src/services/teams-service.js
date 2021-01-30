

export const getTeams = () => {
    const data = [
        {
            id: 1,
            name: 'Portland trail blazers',
            age: 1960
        },
        {
            id: 2,
            name: 'Portland trail blazers2',
            age: 1970
        },
        {
            id: 3,
            name: 'Portland trail blazers3',
            age: 1971
        },
        {
            id: 4,
            name: 'Portland trail blazers4',
            age: 1975
        }
    ];
    return new Promise((resolve, reject) => {
        // console.log('PromiseService')
        if (data) {
            resolve(data)
        } else {
            reject(new Error('all bad'));
        }
    })
}