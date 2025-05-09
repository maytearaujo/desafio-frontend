import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaismenosComponent } from './maismenos.component';

describe('MaismenosComponent', () => {
  let component: MaismenosComponent;
  let fixture: ComponentFixture<MaismenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaismenosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaismenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
