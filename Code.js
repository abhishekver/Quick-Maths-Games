$(document).ready(function()    {
    console.log("function called.");
    var dif,op;
    $("#lg, #help, #game, #submit, #exit, #end").hide();
    $(".op").click(function(){
        $( ".op" ).not(this).hide();
        op = this.id;
        $(".fic, #fit").css("visibility","visible");
    });
    
    $(".fic").click(function()  {
        $(".fic").not(this).hide();
        dif = this.id;
        $("#lg, #help").show();    
    });
    
    $("#help").click(function(){
        alert("Solve the "+op+" in an allotted time.");
    });
/*-----------------------------------------------------------------------------------------------------------------------------------------*/

    $("#lg").click(function()   {
        $("#game").show();
        $("#beg").hide();
    //-/\/\/\/\-GAME-SETTINGS-/\/\/\/\-

        function maxRandInt(min,max)    {
            min = Math.ceil(min);
            max = Math.floor(max);
                
            return Math.floor(Math.random() * (max-min) + min);
        }

        var s = 0;
        var sec,min,max,ope,n1,n2,qst,res;
        if (dif == "easy"){sec = 4;s=4;}
        else if (dif == "snail"){sec=5;s=5;}
        else{ sec=3;s=3; }
        $("#headt").text(op);

        var min1, max1;

        if (op == "Multiplication") {
            if (dif == "hard")  {
                min = 3; max = 11;
                n1 = maxRandInt(min,max);
                min1 = 8; max1 = 15;
                n2 = maxRandInt(min1,max1);
                sec = 4;
            }
            
            else {
                min = 2; max = 8;
                n1 = maxRandInt(min,max);
                min1 = 3; max1 = 10;
                n2 = maxRandInt(min1,max1);
            }
        }

        else if (op == "Substraction") {
            min = 8; max = 23;
            n1 = maxRandInt(min,max);
            min1 = 25; max1 = 59;
            n2 = maxRandInt(min1,max1);
        }

        else {
            min = 10; max = 76;
            n1 = maxRandInt(min,max);
            min1 = 17; max1 = 107;
            n2 = maxRandInt(min1,max1);
        }

        if (op == "Addition")   {ope = "+";}
        else if (op == "Substraction")  {ope="-";}
        else    {ope="*";}

        qst = n2+ope+n1;
        if (ope == "+")     {
            res = n1+n2;
        }
        else if (ope == "-")    {
            res = n2-n1;
        }
        else {
            res = n1*n2;
        }

        

        var wr = $("#write").text();
        $("#eno").text(qst);
        az = "";

        $(".list").click(function()     {
            $("#write").append(this.id);
            az = az + this.id;
            write = write + this.id;
            
        });
                
        var score = 0;
        opes = "";

        if (op == "Addition")   {
            opes = "+";
        }
        else if (op == "Multiplication")    {
            opes = "*";
        }
        else {
            opes = "-";
        }

        function exit() {
            $("#game").hide();
            $("#end").show();
            $("#sscore").text("You did "+score);

            if (score <= 3){
                $("#apreciation").text("You can do it !");
            }
            else if (score <= 6){
                $("#apreciation").text("Mmh.. not bad !");
            }
            else {
                $("#apreciation").text("Wait.. are you Einstein ?");
            }
        }//function

        function NewCode(){
            n1 = maxRandInt(min,max);
            n2 = maxRandInt(min1,max1);
            qst = n2+ope+n1;
            
            if (opes == "+"){
                res = n1+n2;
            }
            else if (opes == "-"){
                res = n2-n1;
            }
            else {
                res = n1*n2;
            }
            
            az = "";
            $("#eno").text(qst);
            $("#write").text("");
            
            function nom()  {
                $("#timer").text(--sec);
                if (sec == 0){
                    clearInterval(si);
                    sec = sec + s;
                    
                    if (az != res){
                        exit();
                    }
                    else {
                        score++;
                        NewCode();
                    }
                }
            }
        si = setInterval(nom,1000);
        }//function

        function nom()  {
            $("#timer").text(--sec);
            if (sec == 0)   {
                clearInterval(si);
                sec = sec + s;
                
                if (az != res){
                    exit();
                }
                else {
                    score++;
                    NewCode();
                }
            }
        }//function

        var si = setInterval(nom,1000);
        var write = "";
    });
});