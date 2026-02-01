let chai = "tea"
let la = 1>2? 50 : "a";

let subs: number | string = '1M'

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'

// apiRequestStatus = 'done'

let airlineseat: 'firstac' | 'economy' = 'economy' // instead of default types we can assign data types of our own

// airlineseat = 'done'

const orders = ['12', '23', '28', '30']

let currentorder:string|undefined; //we avoid to assign any but in some cases we used this

for(let order of orders) {
    if(order === '28') {
        currentorder = order
    }
}

console.log(currentorder)