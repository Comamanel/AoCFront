import { FormGroup } from '@angular/forms';
import {ValidateFn} from "codelyzer/walkerFactory/walkerFn";

export class CustomValidators{
    static compare(...args: any){
        return (group: FormGroup) =>{
            let first = group.get(args[0]);
            let second = group.get(args[1]);
            if(!first||!second) return;
            if(first.value != second.value) return {matchError: 'Not match'};
        }
    }

    static maxPointSkill(...args: any) {

    }
}
