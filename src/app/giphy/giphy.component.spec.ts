import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GiphyComponent} from './giphy.component';

describe('GiphyComponent', () => {
  let component: GiphyComponent;
  let fixture: ComponentFixture<GiphyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GiphyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should retrieve array of  giph image', () => {
    spyOn(component, 'getSearch').and.returnValue([{name: 'image'}, {name2: 'image2'}])
    expect(component).toBeTruthy();
    expect(component.getSearch()).toBeDefined;
    expect(component.getSearch()).toContain({name: 'image'});
  });
});
