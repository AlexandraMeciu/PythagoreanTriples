const triangle = (number)=>{
for(i=0;i<=number;i++){
    for(j=0;j<=number;j++){
        for(q=0;q<=number;q++){
            if(i+j+q==number){
                if(i>j && i>q){
                    if(j*j+q*q===i*i){
                        document.write("The Pythagorean Triple is: <br>"+j+"^"+j+" + "+q+"^"+q+" = "+i+"^"+i);
                        return 1;
                    }
                }else if(j>i && j>q){
                        if(i*i+q*q===j*j){
                            document.write("The Pythagorean Triple is:<br>"+i+"^"+i+" + "+q+"^"+q+" = "+j+"^"+j);
                            return 1;
                        }
                    }else if(q>i && q>j){
                            if(i*i+j*j===q*q){
                                document.write("The Pythagorean Triple is: <br>"+i+"^"+i+" + "+j+"^"+j+" = "+q+"^"+q);
                                return 1;
                        }
                    }
                }
            }
        }
    }
    alert("No triple!");
    return 0;
    
}

var number = prompt("Enter the sum of all sides");
document.write("Sum: "+number+"<br>");
triangle(number)