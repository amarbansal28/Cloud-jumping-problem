function jumpingOnClouds(c) {
    // Write your code here
    let jump = 0, i = 0;
    while(i <  c.length){
        console.log(i)
       if(c[i + 2] == 0){
          i = i+1;
          jump++;
        } else if(c[i + 1] == 0){
          jump++; 
        }
        i+= 1;
    }
    return jump;
}
jumpingOnClouds([0, 0, 0, 1, 0, 0])
// o/p - 3
