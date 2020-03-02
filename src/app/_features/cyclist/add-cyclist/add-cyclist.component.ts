import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormArray, AbstractControl} from "@angular/forms";
import {CyclistService} from "../../../shared/_services/cyclist.service";
import * as jwt_decode from 'jwt-decode';
import {CustomValidators} from "../../../shared/_validators/custom-validators";
import { SkillSetList } from 'src/app/_models/cyclist-list-model';

@Component({
  selector: 'app-add-cyclist',
  templateUrl: './add-cyclist.component.html',
  styleUrls: ['./add-cyclist.component.scss']
})
export class AddCyclistComponent implements OnInit {
  addForm: FormGroup;
  maxPointSkill: number = 100;
  _skillControls: FormControl[];

  khuntryList: string[] = ['Belgium', 'Slovenia', 'French', 'Germany'];

  get skillControls():number{
    let result = this.maxPointSkill;
    this._skillControls.forEach(control => result -= control.value-10);
    return result;
  }
  

  constructor(
    private cyclistService: CyclistService
  ) {
  }

  ngOnInit(): void {
    let hills = new FormControl(10, [
      Validators.required,
      Validators.min(10),
      Validators.max(40)
    ]);
    let flat = new FormControl(10, [
      Validators.required,
      Validators.min(10),
      Validators.max(40)
    ]);
    let mountain = new FormControl(10, [
      Validators.required,
      Validators.min(10),
      Validators.max(40)
    ]);
    let cobbles = new FormControl(10, [
      Validators.required,
      Validators.min(10),
      Validators.max(40)
    ]);
    let downhill = new FormControl(10, [
      Validators.required,
      Validators.min(10),
      Validators.max(40)
    ]);
    let sprint = new FormControl(10, [
      Validators.required,
      Validators.min(10),
      Validators.max(40)
    ]);
    let punch = new FormControl(10, [
      Validators.required,
      Validators.min(10),
      Validators.max(40)
    ]);


    let balance = new FormControl(10, [
      Validators.required,
      Validators.min(10),
      Validators.max(40)
    ]);
    let climb = new FormControl(10, [
      Validators.required,
      Validators.min(10),
      Validators.max(40)
    ]);
    let climbrun = new FormControl(10, [
      Validators.required,
      Validators.min(10),
      Validators.max(40)
    ]);
    let flatrun = new FormControl(10, [
      Validators.required,
      Validators.min(10),
      Validators.max(40)
    ]);
    let mud = new FormControl(10, [
      Validators.required,
      Validators.min(10),
      Validators.max(40)
    ]);
    let planks = new FormControl(10, [
      Validators.required,
      Validators.min(10),
      Validators.max(40)
    ]);
    let sand = new FormControl(10, [
      Validators.required,
      Validators.min(10),
      Validators.max(40)
    ]);
    let soil = new FormControl(10, [
      Validators.required,
      Validators.min(10),
      Validators.max(40)
    ]);
    let stairs = new FormControl(10, [
      Validators.required,
      Validators.min(10),
      Validators.max(40)
    ]);
    this._skillControls = [hills, flat, mountain, cobbles, downhill, sprint, punch,
       balance, climb, climbrun, flatrun, mud, planks, sand, soil, stairs];
    

    this.addForm = new FormGroup({
      age: new FormControl(18, Validators.required),
      weight: new FormControl(null, [
        Validators.required,
        Validators.min(40),
        Validators.max(100)
      ]),
      height: new FormControl(null, [
        Validators.required,
        Validators.min(1.4),
        Validators.max(2.1)
      ]),
      khuntry: new FormControl(null, Validators.required),
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      balance: balance,
      climb: climb,
      climbrun: climbrun,
      flatrun: flatrun,
      mud: mud,
      planks: planks,
      sand: sand,
      soil: soil,
      stairs: stairs,
      hills: hills,
      flat: flat,
      mountain:mountain,
      cobbles: cobbles,
      downhill: downhill,
      sprint: sprint,
      punch: punch,
      stamina: new FormControl(10),
      resistance: new FormControl(10)
    }, Validators.compose([
      CustomValidators.maxPointSkill(this._skillControls)
    ]));
  }

  submit() {
    const token = localStorage.getItem('TOKEN');
    const decoded = jwt_decode(token);
    const username = decoded.sub;
    const cyclist = {
      firstName: this.addForm.get('firstname').value,
      lastName: this.addForm.get('lastname').value,
      country: this.addForm.get('khuntry').value,
      weight: this.addForm.get('weight').value,
      height: this.addForm.get('height').value,
      age: {
        years: new Date(this.addForm.get('age').value).getFullYear(),
        month: new Date(this.addForm.get('age').value).getMonth() + 1,
        days: new Date(this.addForm.get('age').value).getDate()
      },
      skillSetList: [
        {skill : {label: 'BALANCE'}, value: this.addForm.get('balance').value},
        {skill : {label: 'CLIMB'}, value: this.addForm.get('climb').value},
        {skill : {label: 'CLIMBRUN'}, value: this.addForm.get('climbrun').value},
        {skill : {label: 'FLATRUN'}, value: this.addForm.get('flatrun').value},
        {skill : {label: 'MUD'}, value: this.addForm.get('mud').value},
        {skill : {label: 'PLANKS'}, value: this.addForm.get('planks').value},
        {skill : {label: 'SAND'}, value: this.addForm.get('sand').value},
        {skill : {label: 'SOIL'}, value: this.addForm.get('soil').value},
        {skill : {label: 'STAIRS'}, value: this.addForm.get('stairs').value},
        {skill : {label: 'STAMINA'}, value: this.addForm.get('stamina').value},
        {skill : {label: 'HILLS'}, value: this.addForm.get('hills').value},
        {skill : {label: 'FLAT'}, value: this.addForm.get('flat').value},
        {skill : {label: 'MOUNTAIN'}, value: this.addForm.get('mountain').value},
        {skill : {label: 'COBBLES'}, value: this.addForm.get('cobbles').value},
        {skill : {label: 'DOWNHILL'}, value: this.addForm.get('downhill').value},
        {skill : {label: 'SPRINT'}, value: this.addForm.get('sprint').value},
        {skill : {label: 'PUNCH'}, value: this.addForm.get('punch').value},
        {skill : {label: 'RESISTANCE'}, value: this.addForm.get('resistance').value},
      ]
    };
    this.cyclistService.register(cyclist);
  }
}
