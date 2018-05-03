import { Directive,Renderer2, ElementRef  } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  constructor(el :ElementRef, re:Renderer2 ) { 
    setTimeout(() => {
      console.log(el.nativeElement.id);
      if(el.nativeElement.id == 5){
        re.setStyle(el.nativeElement,'color','green');
      }
  }, 0);
    
    
    
  }

}
