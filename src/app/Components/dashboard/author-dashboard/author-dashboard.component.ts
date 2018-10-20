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

  constructor() {}

  editDragEffect(blockOverlay)
  {
    console.log('here');
    let overlay = $(blockOverlay);
    overlay.css("display" , "block");
  }

  activeInputToWriteIfClicked(blockOverlay: HTMLElement , input: HTMLElement)
  {

     let overlay = $(blockOverlay);
     let inp = $(input);

     overlay.css("display" , "none");
     inp.css("border" ,"2px solid blue")


    this.deActivateInputsIfDocumentClicked(blockOverlay ,input );

    // let overlayClassName = element.className;
    // let overlay = $('.'+ overlayClassName);
   // input.value = "";  // html element as document.getElementById();

  }

  deActivateInputsIfDocumentClicked(targetOverlay , input)
  {

     let overlay = $(targetOverlay);

     if( ! this.draggableElements.includes(targetOverlay.className)  ){  // improve performance .. to avoid add event listener for  each call

       document.addEventListener('click' , function (event) {
             let elem: HTMLElement = event.target as HTMLElement;
             // console.log(elem);

             if( elem.matches('input') || elem.className === targetOverlay.className)  return;
             // to disallow event on input and overlay which cover input in document

             // to improve performance
             if(overlay.css("display") != "block" ){
               overlay.css("display" , "block" );
               $(input).css("border" , "none")
             }
       });

       this.draggableElements.push(targetOverlay.className);
       return;
     }
        //console.log( this.draggableElements);
        return;
  }
  ngOnInit()
  {

//    $('.screen').draggable({ containment: ".page-body"   }).resizable({ maxHeight:200 , maxWidth: 200 });
      let bag = $('.bag');
      bag.draggable({containment:".page-body"}).resizable({ maxHeight:200 , maxWidth: 200 });

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
