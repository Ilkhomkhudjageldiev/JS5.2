
/* Birinchi vazifa */

const newUsers = {}

for(i=1; i<=10; i++){

    let ism = prompt('Ismingizni kiriting: ')
    let yosh = +prompt('Yoshingizni kiriting: ')
    const id = i
    newUsers[id] = {
        name: ism ,
        age: yosh
    }
}

for(const key in newUsers)

console.info(`Foydalanuvchi ${key}\nIsmi ${newUsers[key].name}\nYoshi ${newUsers[key].age}`)


// function receipt() {
//     const arrayReceipt = [ 

//      {
//         'Lavash': {
//             info: 'Big Cheese',
//             price: 15000
//         }, 'Hot-dog': {
//             info: 'mini',
//             price: 8500
//         }, 'Cola': {
//             info: '1.5 L',
//             price: 9000
//         }
//     },
     
//     {
//         'Milk': {
//             info: '1 L',
//             price: 8500
//         },
//         'Sugar': {
//             info: '1 kg',
//             price: 7000
//         }
//     },  
    
   
//     {
//         'Cola': {
//             info: '1 L',
//             price: 6500
//         },
//         'Fanta': {
//             info: '1.5 L',
//             price: 9000
//         },
//         'Lipton': {
//             info: '1.2 L',
//             price: 5000
//         }, 
//         'Nestle': {
//             info: '10 L',
//             price: 8500
//         }
//     }
// ]
//     const count = Math.floor(Math.random() * arrayReceipt.length)
//     return arrayReceipt[count]
// }

// let data = receipt()


// console.info(`Sizning buyurtmangiz: `)
// for(const key in data)
//     console.info(`${key} ${data[key].info} ${data[key].price}`)

//     // function receipt()

//     // if(data=2){
//     //     console.info('umumiy: 15000')
//     // }
//     // else if(data=3){
//     //     console.info('umumiy: 18000')

//     // }

//     // else{console.info('umumiy: 28000')}


  



// // {
  
// //     // if(data[last]==2){
// //     //     console.info(`Sizning buyurtmangiz: \n${key} ${data[key].info} ${data[key].price}`)

// //     // }
// //     // console.info(key, data[key].info, data[key].price)
  

// //     // console.info(key)



// // // sum = key + data[key].info + data[key].price





// // // console.info(sum)
// // // console.info(`Sizning buyurtmangiz: \n${key} ${data[key].info} ${data[key].price}`)
// // }   



// // let ilkhom = key
// // let ilkhom2 = data[key].info
// // let ilkhom3 = data[key].price
// // let summa = ''
// // let sum = ilkhom + ilkhom2 + ilkhom3 + summa

// // if( key.length =2){
// //     summa == 1025
// //  }
// //  else if( key.length =3){
// //      summa == 2025
// //   }
// //  else if( key.length =4){
// //      summa == 3025
// //   }


// // console.info(sum)






