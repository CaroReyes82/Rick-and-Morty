import Personajes from './personajes';

export default class DetallesPersonajes extends Personaje {
  constructor(id,name,status,species,gender,created,origin,location,episode) {
    super(id);

    this.species = species;
    this.gender = gender;
    this.created = created;
    this.origin = origin;
    this.location = location;
    this.episode = episode;

    let _name = name;
    this_getName = () => {
      return _name;
    };
    let _status = status;
    this_getStatus = () => {
      return _status;
    };
  }
  get name() {
    return this.getName();
  }

  set name(nuevo_name) {
    this.setName(nuevo_name);
  }

  get status() {
    return this.getStatus();
  }

  set status(nuevo_status) {
    this.setStatus(nuevo_status);
  }

  
}
