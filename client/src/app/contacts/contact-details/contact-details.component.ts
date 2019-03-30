import { Component, OnInit } from '@angular/core';
import { ContactListService } from 'src/app/services/contact-list.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

import { Contact } from 'src/app/models/contact';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  title: string;
  contact: Contact;


  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private contactListService: ContactListService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.contact = new Contact();

    this.activatedRoute.params.subscribe(params =>{
      this.contact._id = params.id;
    });
    
    if(this.title === 'Edit Message'){
      this.getContacts(this.contact);
    }
  }

  onDetailsPageSubmit(): void{
    switch(this.title){
      case 'Add New Message':
      this.contactListService.addContact(this.contact).subscribe(data=>{
        if(data.success) {
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
          this.router.navigate(['/contact/contact-list']);
        } else {
          this.flashMessage.show('Add contact fail', {cssClass: 'alert-danger', timeOut: 3000});
          this.router.navigate(['/contact/contact-list']);
        }
      });
      break;

      case 'Edit Message':
      this.contactListService.editContact(this.contact).subscribe(data=>{
        if(data.success) {
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
          this.router.navigate(['/contact/contact-list']);
        } else {
          this.flashMessage.show('Edit contact fail', {cssClass: 'alert-danger', timeOut: 3000});
          this.router.navigate(['/contact/contact-list']);
        }
      });
      break;
    }
  }

  private getContacts(contact: Contact): void{
    this.contactListService.getContact(contact).subscribe(data=> {
      this.contact = data.contact;
    });
  }

  

}
