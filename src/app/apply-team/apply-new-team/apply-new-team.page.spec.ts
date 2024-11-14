import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplyNewTeamPage } from './apply-new-team.page';

describe('ApplyNewTeamPage', () => {
  let component: ApplyNewTeamPage;
  let fixture: ComponentFixture<ApplyNewTeamPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyNewTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
