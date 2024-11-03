import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ReactiveFormsModule, 
    FormlyModule,
    FormlyPrimeNGModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-12',
          type: 'input',
          key: 'firstName',
          props: {
            label: 'Input Text',
          },
        }
      ],
    },
    { template: '<hr />' },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-3 ',
          type: 'input',
          key: 'zip',
          props: {
            type: 'number',
            label: 'Input Number',
            max: 99999,
            min: 0,
            pattern: '\\d{5}',
          },
        },
      ],
    },
    { template: '<hr />' },
    {
      className: 'col-4 p-variant-filled',
      type: 'textarea',
      key: 'Textarea',
      props: {
        label: 'Text area',
      },
    },
    { template: '<hr />' },
    {
      defaultValue: true,
      key: 'Checkbox',
      type: 'checkbox',
      props: {
        label: 'Accept terms',
        description: 'In order to proceed, please accept terms',
        pattern: 'true',
        required: true,
      },
      validation: {
        messages: {
          pattern: 'Please accept the terms',
        },
      },
    },
    { template: '<hr />' },
    {
      key: 'Radio',
      type: 'radio',
      props: {
        label: 'Radio',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' },
          { value: 4, label: 'Option 4', disabled: true },
        ],
      },
    },
    { template: '<hr />' },
    {
      key: 'Select',
      type: 'select',
      props: {
        label: 'Select',
        filter: true,
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' },
          { value: 4, label: 'Option 4', disabled: true },
        ],
      },
    },
    { template: '<hr />' },
    {
      key: 'Datepicker',
      type: 'datepicker',
      props: {
        label: 'Datepicker',
        placeholder: 'Placeholder',
        description: 'Description',
        dateFormat: 'yy/mm/dd',
        hourFormat: '24',
        numberOfMonths: 1,
        selectionMode: 'single',
        required: true,
        readonlyInput: false,
        showTime: false,
        showButtonBar: true,
        showIcon: false,
        showOtherMonths: true,
        selectOtherMonths: false,
        monthNavigator: false,
        yearNavigator: false,
        yearRange: '2020:2030',
        inline: false,
      },
    },
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
  
}
