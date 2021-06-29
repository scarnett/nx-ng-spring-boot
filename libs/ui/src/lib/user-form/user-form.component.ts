import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { User } from '@app/model'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() user?: User | null
  @Output() save: EventEmitter<{ [x: string]: unknown }> = new EventEmitter<{ [x: string]: unknown }>()
  @Output() closeModel: EventEmitter<void> = new EventEmitter<void>()

  form!: FormGroup
  submitted = false

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: [this.user?.firstName, Validators.required],
      lastName: [this.user?.lastName, Validators.required],
      email: [this.user?.email, Validators.required]
    })
  }

  tapSubmit(): void {
    this.submitted = true

    if (this.form.valid) {
      this.save.emit({
        id: this.user?.id ?? null,
        data: this.form.value
      })
    }
  }

  tapCancel(): void {
    this.closeModel.emit()
  }

  hasError(control: AbstractControl): boolean {
    if ((control.touched || this.submitted) && control.errors?.required) {
      return true
    }

    return false
  }

  getFieldClasses(control: AbstractControl): { [x: string]: boolean } {
    const invalid: boolean = this.hasError(control)

    return {
      'form-control': true,
      'is-valid': !invalid && this.submitted,
      'is-invalid': invalid && this.submitted
    }
  }
}
