class ArrayHelper {

    generateRandomArray(length){
       return Array.from(Array(length)).map(x=>Math.random());
    }
}


export default ArrayHelper;