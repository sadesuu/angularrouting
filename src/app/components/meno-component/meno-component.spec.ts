import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenoComponent } from './meno-component';

describe('MenoComponent', () => {
  let component: MenoComponent;
  let fixture: ComponentFixture<MenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
