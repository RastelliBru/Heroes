class Heroes{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type

    }

    attack(){
        let userHero = "Mago";
        let heroAttack;

        switch(userHero) {
            case "Mago":
                heroAttack = "Magia"
                break;
            case "Guerreiro":
                heroAttack = "espada"
                break;
            case "Monge":
                heroAttack = "artes marciais"
                break;
            case "Ninja":
                heroAttack = "shuriken"
                break;
            default:
                heroAttack = "ataque misterioso"    
        }
        console.log(`O ${this.type} atacou usando ${heroAttack}`)
    }
}

let hero = new Heroes("userMago", "500", "Mago")
hero.attack()

