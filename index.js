largestSubarraySum = (array) => {
    let total = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] + array[i + 1] >= 0) {
            total += array[i + 1]
        } else {
            return total
        }
    }
}