import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DebugNode, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        MatToolbarModule,
        MatSelectModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;

    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(appComponent).toBeTruthy();
  });

  describe('UI', () => {
    it('should have a toolbar that displays the app title', () => {
      const toolbar: DebugElement = fixture.debugElement.query(By.css('mat-toolbar'));
      const toolbarText: string = toolbar.nativeElement.textContent;
  
      expect(toolbarText).toEqual(appComponent.title);
    });

    it('should display a select list of cuisines', () => {
      const cuisineSelect: DebugElement = fixture.debugElement.query(By.css('#cuisines'));      

      expect(cuisineSelect).toBeDefined();
    });

    it('should display a select list of distances', () => {
      const distanceSelect: DebugElement = fixture.debugElement.query(By.css('#distances'));      

      expect(distanceSelect).toBeDefined();
    });
  });
});
