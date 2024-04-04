// //task1
// let eded=parseInt(prompt())
// let ededfact=1
// while( eded>0) {
//     ededfact=ededfact*eded
//     eded--
// }
// console.log(ededfact);
////task2
// let arr =[2,4,6,7,10,12,58,9]
// let boyukEded=0
// let kicikEded=0
// let temp=0
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]>arr[boyukEded]){
//             boyukEded=i
//         }
//         else if (arr[i]<arr[kicikEded]) {
//             kicikEded=i
//         }
//     }
//     temp=arr[boyukEded]
//     arr[boyukEded]=arr[kicikEded]
//     arr[kicikEded]=temp
//    console.log(arr);
// //task3
// let arr =[2,4,6,7,10,12,58,9]
// let boyukEded=0
//     let arr2=[]
//     let count=0
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%2===1){
//         arr2[count]=arr[i]
//         count++
//     }
// }
// for (let i = 0; i < arr2.length; i++) {
//     if(arr2[i]>arr2[boyukEded]){
//                 boyukEded=arr2[i]
//         }
// }
// console.log(boyukEded);
// task4
// let arr =[123,7,53,99]
// let boyukEded=arr[0]
// let kicikEded=arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]>boyukEded){
//             boyukEded=arr[i]
//         }
//         else if (arr[i]<kicikEded) {
//             kicikEded=arr[i]
//         }
//     }
//     console.log((kicikEded+boyukEded)/2);

//task 5
let arr =[2,4,6,7,10,12,58,9]
let boyukEded=arr[0]
let kicikEded=arr[0]
sum=0

    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>arr[boyukEded]){
            boyukEded=i
        }
        else if (arr[i]<arr[kicikEded]) {
            kicikEded=i
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if(i==kicikEded || i==boyukEded){
            console.log("eded nezere alinmadi");
        }else{
            sum=sum+arr[i]
            console.log(arr[i]);
        }
    }
    console.log(sum,kicikEded,boyukEded);