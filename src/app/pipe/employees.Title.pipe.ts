import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name:'employessTitle'
})
export class employessTitlepipe implements PipeTransform {
    transform(value:string):string{
        if(value.toLowerCase()=='male'){
            return "Mr." + value;
        }else{
            return "Miss." + value;
        }
    }
}