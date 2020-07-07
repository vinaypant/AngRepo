import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent } from './first.component';
import { MyService } from '../services/myservice.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;
  let myService: MyService;
  let htmlEle: HTMLElement;
  let de:DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirstComponent],
      providers: [MyService]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    myService = TestBed.get(MyService);
    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    htmlEle = fixture.nativeElement.querySelector('h1')
    de=fixture.debugElement;

  })
  it("CheckIn function testing", () => {
    expect(component.title).toBe('Title:First component');

  })

  it("Checking spyon", () => {
    //spyOn(myService,"authenticate").and.returnValue();
    spyOn(myService, "login").and.returnValue(true);
    expect(component.checkIn()).toBe("Login called");
    expect(myService.login).toHaveBeenCalled();
  })

  it("Matching count value in ts & html", () => {

    spyOn(myService, "login").and.returnValue(true);
    expect(component.checkIn()).toBe("Login called");
    expect(myService.login).toHaveBeenCalled();
    fixture.detectChanges();
    expect(htmlEle.textContent.trim()).toBe(component.count.toString());

  })

  it('Testing debugelement',()=>{

         let pele=de.query(By.css('p'));
         let btn=de.query(By.css('#btnDebug'));
         btn.triggerEventHandler('click',{});
         fixture.detectChanges();
         expect(component.debugVal.toString()).toEqual(pele.nativeElement.innerText.trim());

  })

});
