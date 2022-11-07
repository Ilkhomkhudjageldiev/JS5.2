
/* Birinchi vazifa */

// const newUsers = {}

// for(i=1; i<=10; i++){

//     let ism = prompt('Ismingizni kiriting: ')
//     let yosh = +prompt('Yoshingizni kiriting: ')
//     const id = i
//     newUsers[id] = {
//         name: ism ,
//         age: yosh
//     }
// }

// for(const key in newUsers)

// console.info(`Foydalanuvchi ${key}\nIsmi ${newUsers[key].name}\nYoshi ${newUsers[key].age}`)


function receipt() {
    const arrayReceipt = [ 

     {
        'Lavash': {
            info: 'Big Cheese',
            price: 15000
        }, 'Hot-dog': {
            info: 'mini',
            price: 8500
        }, 'Cola': {
            info: '1.5 L',
            price: 9000
        }
    },
     
    {
        'Milk': {
            info: '1 L',
            price: 8500
        },
        'Sugar': {
            info: '1 kg',
            price: 7000
        }
    },  
    
   
    {
        'Cola': {
            info: '1 L',
            price: 6500
        },
        'Fanta': {
            info: '1.5 L',
            price: 9000
        },
        'Lipton': {
            info: '1.2 L',
            price: 5000
        }, 
        'Nestle': {
            info: '10 L',
            price: 8500
        }
    }
]
    const count = Math.floor(Math.random() * arrayReceipt.length)
    return arrayReceipt[count]
}

let data = receipt()
let sum = 9000
let summary = ''
let order = 'Sizning buyurtmangiz: '
let umum = 'umumiy:'
let text = ' Yetkazib berish bilan (9000 sum).'



for(const key in data){

    sum = sum + data[key].price
    summary = summary + key + ' ' + data[key].info + ' ' + data[key].price + '\n'
}
    console.info(`${order}\n${summary}${umum}\n${sum}${text}`)

    



