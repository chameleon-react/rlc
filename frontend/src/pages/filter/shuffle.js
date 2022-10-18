const shuffle = (data) => {
    for (let i = data?.length-1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = data[i];
      data[i] = data[j];
      data[j] = temp;
    }  
    return data
  }


export default shuffle