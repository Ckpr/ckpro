// 数组相同尾部提取方法
var arr_a = ['abed','cded','afed']; // 输入组
var arr_c = ['dog','cre','bdf'];
var arr_d = ['dog','pig','egg','tig'];
this.printarr = [];
function repeatLast(arr){
    var templast = []
    var temparr = [].concat(arr)
    temparr.forEach((item,index) => {
        templast.push(item.substr(item.length-1,1));
        temparr[index] = item.slice(0,-1);
    })
    var set = new Set(templast)
    if(set.size == 1){
        this.printarr.unshift(templast[0]);
        templast = [];
        repeatlast(temparr);
    }else{
        console.log(this.printarr.join(''));
        this.printarr = [];
    }
};
repeatlast(arr_a);
repeatlast(arr_c);
repeatlast(arr_d);
