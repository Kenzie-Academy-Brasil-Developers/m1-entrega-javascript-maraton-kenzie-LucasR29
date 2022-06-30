const names = ['Rafael', 'Manoel' , 'Daniel']

function positions(names){
    if(names.indexOf('Daniel') > 0){
        let name = names[names.indexOf('Daniel') - 1]
        names[names.indexOf('Daniel') - 1] = names[names.indexOf('Daniel')]
        names[names.indexOf('Daniel') + 1] = name
    }else{
        return 'Daniel é o vencedor'
    }
    return 'Esse é o pódio: ' + names
}

console.log(positions(names))