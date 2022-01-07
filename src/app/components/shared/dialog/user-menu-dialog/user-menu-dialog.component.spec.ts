import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenuDialogComponent } from './user-menu-dialog.component';

describe('UserMenuDialogComponent', () => {
  let component: UserMenuDialogComponent;
  let fixture: ComponentFixture<UserMenuDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMenuDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMenuDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
