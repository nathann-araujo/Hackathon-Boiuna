import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroModalPage } from './registro-modal.page';

describe('RegistroModalPage', () => {
  let component: RegistroModalPage;
  let fixture: ComponentFixture<RegistroModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
