import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile.component';
import { LoggerService } from '../services/logger.service';

class LoggerMock {
  log(msg: string) {}
}

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfileComponent],
      imports: [FormsModule],
      providers: [{ providers: LoggerService, useClass: LoggerMock }],
    });
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
