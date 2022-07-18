import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './blog-index.component.html',
  styleUrls: ['./blog-index.component.less']
})
export class BlogIndexComponent implements OnInit {

  filepath: string = '../../../assets/video1.mp4';


  seasons = [
    {
      label: '2013',
      children: [
        {
          label: '春',
          children: []
        },
        {
          label: '夏',
          children: []
        }
      ]
    },
    {
      label: '2014',
      children: [
        {
          label: '春'
        },
        {
          label: '夏'
        }
      ]
    }
  ];
  value = ['2014', '夏'];

  constructor(
    private router: Router,
    private http: HttpClient,
    private renderer2: Renderer2,
    private elementRef: ElementRef,
  ) { }



  ngOnInit() {
   
  }



  meetFunc() {

    const index = this.elementRef.nativeElement.querySelector('#index1');
    this.renderer2.setStyle(index, 'opacity', '0');
    setTimeout(() => {
      this.router.navigateByUrl('home');
    }, 500);
  }


  onChange(result: any) {
    console.log(result);
  }

  getValue(result: any[]) {
    let value: any = [];
    let temp = '';
    result.forEach(item => {
      value.push(item.label || item);
      temp += item.label || item;
    });
    return value;
  }





}
