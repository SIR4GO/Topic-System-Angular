import { Component, OnInit } from '@angular/core';
import {createElement} from '@angular/core/src/view/element';
declare let $: any;

@Component({
  selector: 'app-author-dashboard',
  templateUrl: './author-dashboard.component.html',
  styleUrls: ['./author-dashboard.component.css']
})

export class AuthorDashboardComponent implements OnInit {

   draggableElements: string[] = ["initial"] ;
   currentStep:String = 'First step';
   currentStepDescription:String = 'Create your topic';
  constructor() {}

  ngOnInit()
  {

//    $('.screen').draggable({ containment: ".page-body"   }).resizable({ maxHeight:200 , maxWidth: 200 });

    const bag = $('.bag');
    bag.draggable({containment:".topic-sheet"}).resizable();


    // way to find height of div after scroll
    // $('.topic-sheet').click(function () {
    //    const element: HTMLElement = document.getElementById('sheet');
    //      console.log(element.scrollHeight);
    // });

  }



  dragBorderEffect(  overlay: HTMLElement , input:HTMLElement)
  {
    const inp = $(input);
    inp.css('border' ,'2px dashed #54B6CC');
    this.deActivateInputsIfDocumentClicked( overlay , input);
  }

  activeInputToWriteIfClicked(blockOverlay: HTMLElement , input: HTMLElement)
  {

     const inp = $(input);
     const overlay = $(blockOverlay);

     overlay.css('display' , 'none');
     inp.focus();


    this.deActivateInputsIfDocumentClicked(blockOverlay ,input );

    // let overlayClassName = element.className;
    // let overlay = $('.'+ overlayClassName);
   // input.value = "";  // html element as document.getElementById();

  }

  deActivateInputsIfDocumentClicked(targetOverlay , input)
  {

     const overlay = $(targetOverlay);

     if( ! this.draggableElements.includes(targetOverlay.className)  ){  // improve performance .. to avoid add event listener for  each call activeInput..()

       document.addEventListener('click' , function (event) {
             const elem: HTMLElement = event.target as HTMLElement;
             // console.log(elem);

             if( elem.matches('input') || elem.className === targetOverlay.className)  return;
             // to disallow event on input and overlay which cover input in document

             // to improve performance
             if(overlay.css("display") != "block" ){
               overlay.css("display" , "block" );
             }
             $(input).css("border" , "none")
       });

       this.draggableElements.push(targetOverlay.className);
       return;
     }
        //console.log( this.draggableElements);
        return;
  }

  ActiveTopicCreationPanel()
  {
    const height = $(window).height();
    $('.topic-panel').height(height).addClass('topic-overlay').css('display' , 'flex');
  }

  DisableTopicCreationPanel(){

    $('.topic-panel').css('display' , 'none');
  }

}
