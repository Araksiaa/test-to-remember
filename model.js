// const redis = require("./redis.config");
// class Model {
//     static async insertData(dataObject) {
//         try {
//             const dataString = JSON.stringify(dataObject);
//             await redis.set("obj", dataString)
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     static async getData() {
//         try {
//             const data = await redis.hgetall("user");
//             return data;
//         } catch (error) {
//             console.error(error);
//         }
//     };
//     static async putData(key, value) {
//         try {
//             await redis.hset("user", value);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     static async deleteData() {
//         try {
//             await redis.del("user");
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     static async deleteOne(key) {
//         try {
//             // console.log(key);

//             await redis.hdel('user', key)


//         } catch (error) {
//             console.error(error);
//         }
//     };
    // static async matrixD(data) {
    //     try {
    //         let array1 = data.a1;
    //         let array2 = data.a2;
    //         if(array1[0].length == array2.length){
    //             let result = Array.from({ length: array1.length }, () => Array(array2[0].length).fill(0));
    //             for(let i = 0; i < array1.length; i++){
    //                 for(let j = 0; j < array2.length; j++){
    //                     result[i][j] = array1[i].reduce((sum, element, index) => {
    //                         return sum + element * array2[index][j];
    //                     }, 0);

    //                 };
    //             };
    //             console.log(result);
    //         };
            
    //         // await redis.set("obj", data)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
//     static async matrixDet(data) {
//         try {
//             const matrix = data.a1;
//             if (matrix.length === matrix[0].length) {
//                 const [a, b, c] = matrix[0];
//                 const [d, e, f] = matrix[1];
//                 const [g, h, i] = matrix[2];

//                 const det = a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
//                 console.log(det);
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };
// }

module.exports = Model;HGVJ
lalallalala

