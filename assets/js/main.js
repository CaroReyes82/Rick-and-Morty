import Personajes from "./personajes";

class DetallePersonajes extends Personajes {
    constructor (id,name, status){
        super (id);
        let_name = name;
        this.getName = () => _name;
        this.setName = (nevo_name) => (_name = nuevo_name);

        let _status = status;
        this.getStatus
    }
}