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

  PersonToEditFirst: string;
  PersonToEditLast: string;
  PersonToEditStreet: string;
  PersonToEditPostcode: number;
  PersonToEditLocation: string;
  PersonToEditTel: string;
  PersonToEditMobil: string;
  PersonToEditMail: string;
  PersonToEditBirthday: string;
  PersonToEditWeddingdate: string;

  contacts: Person[] = [
    {
      first: 'Felix',
      last: 'Blaschke',
      street: 'Münchener Str. 8',
      postcode: 63179,
      location: 'Obertshausen',
      tel: '0365-4745896',
      mobil: '0152-25887445',
      mail: 'felix@felix.de',
      birthday: new Date(1986, 1, 16).toLocaleDateString(),
      weddingdate: new Date(2016, 2, 18).toLocaleDateString(),
    },
    {
      first: 'Mandy',
      last: 'Blaschke',
      street: 'Münchener Str. 8',
      postcode: 63179,
      location: 'Obertshausen',
      tel: '0365-4745896',
      mobil: '0152-21465784',
      mail: 'mandy@mandy.de',
      birthday: new Date(1989, 0, 9).toLocaleDateString(),
      weddingdate: new Date(2016, 2, 18).toLocaleDateString(),
    },
    {
      first: 'Susann',
      last: 'Herrmann',
      street: 'Rostocker Str. 12',
      postcode: 18057,
      location: 'Rostock',
      tel: '0365-4745896',
      mobil: '0152-21465784',
      mail: 'susi@susi.de',
      birthday: new Date(1986, 1, 16).toLocaleDateString(),
      weddingdate: undefined,
    }
  ];

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
    this.PersonToEditFirst = personToEdit.first;
    this.PersonToEditLast = personToEdit.last;
    this.PersonToEditStreet = personToEdit.street;
    this.PersonToEditPostcode = personToEdit.postcode;
    this.PersonToEditLocation = personToEdit.location;
    this.PersonToEditTel = personToEdit.tel;
    this.PersonToEditMobil = personToEdit.mobil;
    this.PersonToEditMail = personToEdit.mail;
    this.PersonToEditBirthday = personToEdit.birthday;
    this.PersonToEditWeddingdate = personToEdit.weddingdate;
  }

  saveChanges(): void {
    this.editedPerson = this.selectedPerson;
    this.editedPerson.first = this.PersonToEditFirst;
    this.editedPerson.last = this.PersonToEditLast;
    this.editedPerson.street = this.PersonToEditStreet;
    this.editedPerson.postcode = this.PersonToEditPostcode;
    this.editedPerson.location = this.PersonToEditLocation;
    this.editedPerson.tel = this.PersonToEditTel;
    this.editedPerson.mobil = this.PersonToEditMobil;
    this.editedPerson.mail = this.PersonToEditMail;
    this.editedPerson.birthday = this.PersonToEditBirthday;
    this.editedPerson.weddingdate = this.PersonToEditWeddingdate;

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
