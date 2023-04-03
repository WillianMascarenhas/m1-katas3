 function xRunning(arr){
     for(let i = 0; i < arr.length; i++){
        if(i !== 0){
            arr[i - 1] = "-"
            arr[i] = "x"
        }
         console.log(arr)
    }
 }
 xRunning(["x", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]);

function vowelsCounte(arr){
    let arrNovo = []
    for(let i = 0; i < arr.length; i++){
        let palavras = arr[i]
        let contadora = 0
        for(let j = 0; j < palavras.length; j++){
            if(palavras[j] == "a"){
                contadora ++
            }else if(palavras[j] == "e"){
                contadora ++

            }else if(palavras[j] == "i"){
                contadora ++

            }else if(palavras[j] == "o"){
                contadora ++

            }else if(palavras[j] == "u"){
                contadora ++

            }
        }
        arrNovo.push(contadora)
    }
    return arrNovo
}
console.log(vowelsCounte(["laranja", "abacaxi", "acerola", "morango", "uva", "melancia"]));

function stringTripletGroup(string){
    let arrNovo = []
    let str = ""
    let str2 = ""
    let str3 = ""
    let str4 = ""
    let str5 = ""
    let str6 = ""
    let str7 = ""
    for(let i = 0; i < string.length; i++){
        if(i < 3){
            str += string[i]
        }else if(i >= 3 && i <= 5){
            str2 += string[i] 
        }else if(i >= 5 && i <=8){
            str3 += string[i]
        }else if(i >= 8 && i <=11){
            str4 += string[i]
        }else if(i >= 11 && i <=14){
            str5 += string[i]
        }else if(i >= 14 && i <=17){
            str6 += string[i]
        }else if(i >= 17 && i <=20){
            str7 += string[i] 
        }
    }
    str7 += " "
    arrNovo.push(str)
    arrNovo.push(str2)
    arrNovo.push(str3)
    arrNovo.push(str4)
    arrNovo.push(str5)
    arrNovo.push(str6)
    arrNovo.push(str7)
    return arrNovo
}
console.log(stringTripletGroup("Os três mosqueteiros"))

function dominantPet(arr){
    let arrNovo = []
    let cat = []
    let dog = []
    for(let i = 0; i < arr.length; i++){
        let palavras = arr[i]
        arrNovo.push(palavras.toLowerCase())
    }
    for(let i = 0; i < arrNovo.length; i++){
        if(arrNovo[i] == "cat"){
            cat.push(arrNovo[i])
        }else{
            dog.push(arrNovo)
        }
    }
    if(cat.length > dog.length){
        return "CAT!"
    }else if(cat.length < dog.length){
        return "DOG!"
    }else if(cat.length = dog.length){
        return "DRAW!"
    }
}
console.log(dominantPet(["DoG", "cat", "cAT", "dOg", "cat", "Dog", "caT"]))
console.log(dominantPet(["dog", "cAt", "Cat", "doG", "CAT", "Dog", "caT", "DOG"]))

function divisibleList(lista, numero){
    let arr = []
    for(let i = 0; i < lista.length; i++){
        if(lista[i] % numero == 0){
            arr.push(lista[i])
        }
    }
    return arr
}
console.log(divisibleList([14, 25, 32, 50, 35, 30], 5));

function trustMeOrNot(bool, numero){
    let arr = []
    for(let i = 1; i <= numero; i++){
        arr.push(i)
    }
    for(let i = 0; i <= arr.length -1; i++){
        console.log(arr.length)
        if(arr.length == numero)
        arr[i] = bool
    }
    return arr
}
console.log(trustMeOrNot(true, 8));

function changeLampStatus(lista){
    let arrnovo = []
    for(let i = 0; i < lista.length; i++){
        if(lista[i] == false){
            arrnovo.push(true)
        }else{
            arrnovo.push(false)
        }
    }
    return arrnovo
}
console.log(changeLampStatus([false, false, true, false, true, true, true]));

function gradeAverage(lista){
    let soma = 0
    for(let i = 0; i < lista.length; i++){
        soma += lista[i]
    }
    let valor = soma/lista.length
    return valor.toFixed(2)
}
console.log(gradeAverage([6.0, 5.5, 6.7, 8.0, 10, 10, 7.1]))

function canvasDeliveriesPercentage(lista){
    let soma = 0
    for(let i = 0; i < lista.length; i++){
        soma += lista[i]
    }
    let valor = soma/lista.length
    let valorPorcen = valor * 10
    return `A porcentagem total de entregas atingida é: ${valorPorcen.toFixed(2)}%`
}
console.log(canvasDeliveriesPercentage([3, 9.5, 6, 8, 10, 10, 7.1, 8.5, 2.3, 6.7]));

function shouldIGo(lista){
    let arrFormatado = []
    for(let i = 0; i < lista.length; i++){
        if(lista[i].toLowerCase() == "r"){
            arrFormatado.push(lista[i] = "Strop!")
        }else if(lista[i].toLowerCase() == "y"){
            arrFormatado.push(lista[i] = "Attention!")
        }else{
            arrFormatado.push(lista[i] = "Go!")
        }
    }
    return arrFormatado

}
console.log(shouldIGo(["R", "r", "G", "y", "G", "Y", "g"]))
