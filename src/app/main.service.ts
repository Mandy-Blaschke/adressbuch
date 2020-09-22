import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() {
    this.sortContacts();
  }

  view: 'nothing' | 'person' | 'edit' | 'new' = 'nothing';

  showWarning = false;

  selectedPerson: Person;

  newPersonFirst = '';
  newPersonLast = '';
  newPersonStreet: string;
  newPersonPostcode: number;
  newPersonLocation: string;
  newPersonTel: string;
  newPersonMobil: string;
  newPersonMail: string;
  newPersonBirthday: string;
  newPersonWeddingdate: string;

  editedPerson: Person;

  personToEditFirst: string;
  personToEditLast: string;
  personToEditStreet: string;
  personToEditPostcode: number;
  personToEditLocation: string;
  personToEditTel: string;
  personToEditMobil: string;
  personToEditMail: string;
  personToEditBirthday: string;
  personToEditWeddingdate: string;

  contacts: Person[] = [];

  formatDate(date: string): string {
    if (date !== undefined){
    const arrDate = date.split('-');
    return arrDate[2].concat('.', arrDate[1], '.', arrDate[0]);
    } else {
      return '';
    }
  }

  sortContacts(): void {
    this.contacts.sort((a, b) => a.last.localeCompare(b.last));
  }

  clearForm(): void {
    this.newPersonFirst = '';
    this.newPersonLast = '';
    this.newPersonStreet = '';
    this.newPersonPostcode = undefined;
    this.newPersonLocation = '';
    this.newPersonTel = '';
    this.newPersonMobil = '';
    this.newPersonMail = '';
    this.newPersonBirthday = undefined;
    this.newPersonWeddingdate = undefined;
  }

  showPerson(person: Person): void {
    this.view = 'person';
    this.selectedPerson = person;
  }

  newContact(): void {
    this.view = 'new';
    this.selectedPerson = undefined;
  }

  saveNewPerson(): void {
    const newPerson = {
      first: this.newPersonFirst,
      last: this.newPersonLast,
      street: this.newPersonStreet,
      postcode: this.newPersonPostcode,
      location: this.newPersonLocation,
      tel: this.newPersonTel,
      mobil: this.newPersonMobil,
      mail: this.newPersonMail,
      birthday: this.newPersonBirthday,
      weddingdate: this.newPersonWeddingdate,
    };

    if (newPerson.first.trim() !== '' || newPerson.last.trim() !== '') {
      this.contacts.push(newPerson);
      this.clearForm();
      this.sortContacts();
      this.view = 'nothing';

    } else {
      this.showWarning = true;
    }
  }

  cancelNew(): void {
    this.clearForm();
    this.view = 'nothing';
  }

  deletePerson(personToDelete: Person): void {
    personToDelete = this.selectedPerson;
    this.contacts.splice(this.contacts.indexOf(personToDelete), 1);
    this.view = 'nothing';
    this.selectedPerson = undefined;
  }

  editPerson(personToEdit: Person): void {
    this.view = 'edit';
    this.selectedPerson = personToEdit;
    this.personToEditFirst = personToEdit.first;
    this.personToEditLast = personToEdit.last;
    this.personToEditStreet = personToEdit.street;
    this.personToEditPostcode = personToEdit.postcode;
    this.personToEditLocation = personToEdit.location;
    this.personToEditTel = personToEdit.tel;
    this.personToEditMobil = personToEdit.mobil;
    this.personToEditMail = personToEdit.mail;
    this.personToEditBirthday = personToEdit.birthday;
    this.personToEditWeddingdate = personToEdit.weddingdate;
  }

  saveChanges(): void {
    this.editedPerson = this.selectedPerson;
    this.editedPerson.first = this.personToEditFirst;
    this.editedPerson.last = this.personToEditLast;
    this.editedPerson.street = this.personToEditStreet;
    this.editedPerson.postcode = this.personToEditPostcode;
    this.editedPerson.location = this.personToEditLocation;
    this.editedPerson.tel = this.personToEditTel;
    this.editedPerson.mobil = this.personToEditMobil;
    this.editedPerson.mail = this.personToEditMail;
    this.editedPerson.birthday = this.personToEditBirthday;
    this.editedPerson.weddingdate = this.personToEditWeddingdate;

    this.sortContacts();
    this.view = 'nothing';
    this.selectedPerson = undefined;
  }

  cancelEditing(): void {
    this.view = 'nothing';
    this.selectedPerson = undefined;
  }
}

export interface Person {
  first: string;
  last: string;
  street: string;
  postcode: number;
  location: string;
  mail: string;
  tel: string;
  mobil: string;
  birthday: string;
  weddingdate: string;
}
