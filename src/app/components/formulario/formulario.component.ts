import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { map  , filter} from 'rxjs/operators';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form1: FormGroup;
  @ViewChild('fileInput') fileInput: ElementRef;
  name = new FormControl('', Validators.required);
  
  email = new FormControl('', [
    Validators.required,
    Validators.pattern('[^ @]*@[^ @]*')]) ;

  constructor(fb: FormBuilder) {
      this.form1 = fb.group({
            'name': this.name,
            'avatar': null,
            'email': this.email
          });
          this.form1.valueChanges.pipe(
            filter( res => this.form1.valid),

          )
          .subscribe( data => console.log(JSON.stringify(data)));
  }

  ngOnInit() {
  }

  

  onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.form1.get('avatar').setValue(file);
    }
  }

  private prepareSave(): any {
    let input = new FormData();
    input.append('name', this.form1.get('name').value);
    input.append('email', this.form1.get('email').value);
    input.append('avatar', this.form1.get('avatar').value);
    return input;
  }

  onSubmit() {
    const formModel = this.prepareSave();
    
    // In a real-world app you'd have a http request / service call here like
    // this.http.post('apiUrl', formModel)
    setTimeout(() => {
      // FormData cannot be inspected (see "Key difference"), hence no need to log it here
      alert('done!');
       console.log(formModel);
    }, 1000);
  }

  clearFile() {
    this.form1.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }
}

