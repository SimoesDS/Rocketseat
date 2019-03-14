class List {
    constructor() {
        this.data = []
    }

    addData(data) {
        this.data.push(data)
        console.log(this.data)
    }
}

class TodoList extends List {

    constructor() {
        super();
    }

    static mostrarUsuario(usuario) {
        return usuario
    }

    testeConstante() {
        const testeConst = { nome: 'Diego' };
        testeConst.nome = 'Alguem'
        //testeConst = { nome: 'Fulano'}; // Não funciona
        console.log(testeConst)
    }

    testeLet(x) {
        let y = 2;

        if (x > 10) {
            let y = 5 // Pode definir outra variavel com o mesmo nome, pois esta em outro escopo
            console.log(x, y)
        }
    }

    testeArray() {
        const arr = [2, 3, 4, 5, 8, 9]
        const newArr = arr.map(function (item, index) {
            return item * index
        })
        console.log(newArr)

        const sum = arr.reduce(function(total, next){
            return total * next
        })
        console.log(sum)

        const filter = arr.filter(function(item){
            return item % 2 === 0;
        })
        console.log(filter)

        const search = arr.search(function(item){
            return item === 3
        })
    }
}

var MinhaLista = new TodoList()
MinhaLista.testeConstante()
MinhaLista.testeLet(11)
MinhaLista.testeArray()