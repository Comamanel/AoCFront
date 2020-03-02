import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CyclistService} from "../../../shared/_services/cyclist.service";
import * as jwt_decode from 'jwt-decode';
import {CustomValidators} from "../../../shared/_validators/custom-validators";

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.scss']
})
export class RegistrationsComponent implements OnInit {

  registerForm: FormGroup;

  khuntryList: string[] = ['Belgium', 'Slovenia', 'French', 'Germany'];

  constructor(
    private cyclistService: CyclistService
  ) {
  }

  ngOnInit(): void {
    const maxPointSkill: number = 40;
    this.registerForm = new FormGroup({
      birthdate: new FormControl(new Date(), Validators.required),
      weight: new FormControl(null, [
        Validators.required,
        Validators.min(45),
        Validators.max(100)
      ]),
      height: new FormControl(null, [
        Validators.required,
        Validators.min(1.5),
        Validators.max(2.1)
      ]),
      khuntry: new FormControl(null, Validators.required),
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      balance: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ]),
      climb: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ]),
      climbrun: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ]),
      flatrun: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ]),
      mud: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ]),
      planks: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ]),
      sand: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ]),
      soil: new FormControl(null, [
        Validators.required,
        Validators.min(0),
          Validators.max(10)
      ]),
      stairs: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ]),
      stamina: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ]),
      hills: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ]),
      flat: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ]),
      mountain: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ]),
      cobbles: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ]),
      downhill: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ]),
      sprint: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ]),
      punch: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ]),
      resistance: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ])
    });
  }

  submit() {
    const token = localStorage.getItem('TOKEN');
    const decoded = jwt_decode(token);
    const username = decoded.sub;
    const cyclist = {
      firstName: this.registerForm.get('firstname').value,
      lastName: this.registerForm.get('lastname').value,
      country: this.registerForm.get('khuntry').value,
      weight: this.registerForm.get('weight').value,
      height: this.registerForm.get('height').value,
      age: {
        years: new Date(this.registerForm.get('birthdate').value).getFullYear(),
        month: new Date(this.registerForm.get('birthdate').value).getMonth() + 1,
        days: new Date(this.registerForm.get('birthdate').value).getDate()
      },
      skillSetList: [
        {skill : {label: 'BALANCE'}, value: this.registerForm.get('balance').value},
        {skill : {label: 'CLIMB'}, value: this.registerForm.get('climb').value},
        {skill : {label: 'CLIMBRUN'}, value: this.registerForm.get('climbrun').value},
        {skill : {label: 'FLATRUN'}, value: this.registerForm.get('flatrun').value},
        {skill : {label: 'MUD'}, value: this.registerForm.get('mud').value},
        {skill : {label: 'PLANKS'}, value: this.registerForm.get('planks').value},
        {skill : {label: 'SAND'}, value: this.registerForm.get('sand').value},
        {skill : {label: 'SOIL'}, value: this.registerForm.get('soil').value},
        {skill : {label: 'STAIRS'}, value: this.registerForm.get('stairs').value},
        {skill : {label: 'STAMINA'}, value: this.registerForm.get('stamina').value},
        {skill : {label: 'HILLS'}, value: this.registerForm.get('hills').value},
        {skill : {label: 'FLAT'}, value: this.registerForm.get('flat').value},
        {skill : {label: 'MOUNTAIN'}, value: this.registerForm.get('mountain').value},
        {skill : {label: 'COBBLES'}, value: this.registerForm.get('cobbles').value},
        {skill : {label: 'DOWNHILL'}, value: this.registerForm.get('downhill').value},
        {skill : {label: 'SPRINT'}, value: this.registerForm.get('sprint').value},
        {skill : {label: 'PUNCH'}, value: this.registerForm.get('punch').value},
        {skill : {label: 'RESISTANCE'}, value: this.registerForm.get('resistance').value},
      ]
    };
    this.cyclistService.register(cyclist);
  }
}
