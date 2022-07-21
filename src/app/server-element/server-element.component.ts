import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input()
  element: { name: string, type: string, content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() { console.log('constructor called');  }  

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');    
  }
  
  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log(`ngOnInit: ${this.header.nativeElement.textContent}`);
    console.log(`ngOnInit: ${this.paragraph.nativeElement.textContent}`);
  }
  
  ngDoCheck(): void {
    console.log('ngDoCheck called');    
  }
  
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');    
    console.log(`ngAfterContentInit: ${this.paragraph.nativeElement.textContent}`);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }
  
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');    
    console.log(`ngAfterViewInit: ${this.header.nativeElement.textContent}`);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');    
  }
}
