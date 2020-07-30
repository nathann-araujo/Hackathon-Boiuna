import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuspeitaPage } from './suspeita.page';

describe('SuspeitaPage', () => {
  let component: SuspeitaPage;
  let fixture: ComponentFixture<SuspeitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspeitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuspeitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
