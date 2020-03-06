import { FormGroup } from '@angular/forms';

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
        //TODO: finir le validator
        return (group: FormGroup) =>{
            let result = 100;
            console.log("total points set : " + result)
            if(result < 0) return {matchError: 'Too much points set'};
            if(result > 0) return {matchError: 'Not enough points set'};
        }
    }
}
