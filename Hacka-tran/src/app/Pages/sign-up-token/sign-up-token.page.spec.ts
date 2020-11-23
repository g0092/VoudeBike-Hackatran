import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignUpTokenPage } from './sign-up-token.page';

describe('SignUpTokenPage', () => {
  let component: SignUpTokenPage;
  let fixture: ComponentFixture<SignUpTokenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpTokenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpTokenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
