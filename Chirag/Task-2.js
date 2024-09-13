
const obj = [{
    key: 'Sample 1',
    data: 'Data1',
},{
    key: 'Sample 1',
    data: 'Data1',
},{
    key: 'Sample 2',
    data: 'Data2',
},{
    key: 'Sample 1',
    data: 'Data1',
},{
    key: 'Sample 3',
    data: 'Data1',
},{
    key: 'Sample 4',
    data: 'Data1',
}];


// obj.push({
//     key: 'Sample 5',
//     data: 'Data5',
// })

/**
 * Using Foreach Function
 */

const groupedObj = {};

obj.forEach((item) => {
    if(groupedObj[item.key]){
        groupedObj[item.key].push(item);
    } else {
        groupedObj[item.key] = [item];
    }
});

// console.log(groupedObj);


/**
 * Using Reduce Function
 */

const groupKeysUsingReduce = obj.reduce((acc, curr) => {
    if (acc[curr.key]) {
        acc[curr.key].push(curr);
    } else {
        acc[curr.key] = [curr];
    }
    return acc;
}, {});


console.log(groupKeysUsingReduce);
