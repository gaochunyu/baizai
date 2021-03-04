

export default {
  // 时间戳转化
  formatDateTime(timeStamp){
    let date = new Date();
    date.setTime(timeStamp);
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    let d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d
  },
  //数值均分法
  numericalDivision(min,max,inter){
    let difference = max-min;
    let interNum = parseInt(difference/inter);
    let interArry = [min,min+interNum,min+interNum*2,min+interNum*3,min+interNum*4,min+interNum*5];
    return interArry
  },
  //获取最大最小值
  getMaximin(arr,maxmin){
    if(maxmin=="max")
    {
      return Math.max.apply(Math,arr);
    }
    else if(maxmin=="min")
    {
      return Math.min.apply(Math, arr);
    }
  }

}
