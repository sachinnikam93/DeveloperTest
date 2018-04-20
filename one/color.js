var color = [['57°', '13%', '76%'],['217°', '11%', '12%'], ['35°', '13%', '76%'], ['37°', '11%', '12%']];


var pair = [];


var firstIndex = 0


for (var i=0; i<color.length;i++){
    var deg =0;
    if(i!=firstIndex){
        deg= parseInt(color[firstIndex][0]) - parseInt(color[i][0]);
    }
    
    if(deg==180){
        pair.push(color[firstIndex])
        pair.push(color[i])
    }

    if(i==color.length-1){
        if(firstIndex ==color.length-1){
            break;
        }
        i=0;
        firstIndex =firstIndex +1;
    }
}

console.log(pair);