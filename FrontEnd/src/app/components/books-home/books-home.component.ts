import { Component, OnInit, Output } from '@angular/core';
import {BooksService} from '../../services/books.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-books-home',
  templateUrl: './books-home.component.html',
  styleUrls: ['./books-home.component.css']
})
export class BooksHomeComponent implements OnInit {

  @Output() showBtnLogout = new EventEmitter();
  public showTable = false;
  public tableData:any;

  auxTitle:string;
  auxAuthor:string;

  formBook: FormGroup;
  titleCtrl: FormControl;
  authorCtrl: FormControl;

  formModal: FormGroup;
  modalTitleCtrl: FormControl;
  modalAuthorCtrl: FormControl;

  constructor(public bookServ: BooksService, private miConstructor: FormBuilder ) { }

  ngOnInit() {
    this.titleCtrl = new FormControl('', [Validators.pattern('[a-zA-Z ]*'), Validators.required, Validators.minLength(1)]);
    this.authorCtrl = new FormControl('', [Validators.pattern('[a-zA-Z ]*'), Validators.required, Validators.minLength(3)]);

    this.modalTitleCtrl = new FormControl('', [Validators.pattern('[a-zA-Z ]*'), Validators.required, Validators.minLength(1)]);
    this.modalAuthorCtrl = new FormControl('', [Validators.pattern('[a-zA-Z ]*'), Validators.required, Validators.minLength(3)])
    
    this.formBook = this.miConstructor.group({
      title: this.titleCtrl,
      author: this.authorCtrl
    });

    this.formModal = this.miConstructor.group({
      titleModal: this.modalTitleCtrl,
      authorModal: this.modalAuthorCtrl
    });
    //traigo libros.
    this.bookServ.GetAll()
    .then(booksArray => {
      if (booksArray !== [] ) {
        this.tableData = booksArray;
        this.showTable = true;
      }
    })
    .catch( err => {console.log(err)});

    this.showBtnLogout.emit('true');
  }

  get title() {
    return this.formBook.get('title') as FormControl;
  }

  get author() {
    return this.formBook.get('author') as FormControl;
  }

  get titleModal () {
    return this.formModal.get('titleModal') as FormControl;
  }

  get authorModal() {
    return this.formModal.get('authorModal') as FormControl;
  }

  public FillList()
  {
    this.bookServ.GetAll()
    .then(booksArray => {
      if (booksArray !== [] ) {
        this.tableData = booksArray;
        this.showTable = true;
      }
    })
    .catch( err => {console.log(err)});
  }

  public SaveAuxData(title:string,author:string)
  {
    this.auxTitle = title;
    this.auxAuthor = author;

  }

  public GuardarLibro()
  {
    let titulo = this.formBook.get('title').value;  
    let author = this.formBook.get('author').value;

    let newBook = {title: titulo, author: author};

    this.bookServ.SaveOne(newBook)
    .then( res => {
      console.log(res);
      this.FillList();
    })
    .catch(err => {console.log(err)})
  }

  public UpdateBook(filter:string)
  {
    let updatedBook = {title:filter,Utitle:this.formModal.get('titleModal').value ,Uauthor: this.formModal.get('authorModal').value};
    
    
    this.bookServ.UpdateOne(updatedBook)
    .then(res => {
      console.log(res);
      this.FillList();
    })
    .catch(err => {console.log(err)})
  }

  public DeleteOne()
  {
    let toDelete = {title:this.auxTitle};
    this.bookServ.DeleteOne(toDelete)
    .then( res => {
      console.log(res);
      this.FillList();
    })
    .catch(err => {console.log(err)})
  }
}
